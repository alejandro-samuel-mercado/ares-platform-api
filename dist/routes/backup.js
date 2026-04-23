"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const BACKUP_DIR = path_1.default.join(__dirname, '../../backups');
// Asegurar que el directorio exista
if (!fs_1.default.existsSync(BACKUP_DIR)) {
    fs_1.default.mkdirSync(BACKUP_DIR, { recursive: true });
}
// Modelos a respaldar en orden de inserción (para dependencias)
const MODELS_ORDER = [
    'ajustesPlataforma',
    'plan',
    'vendor',
    'servicioBase',
    'miServicio',
    'imagen',
    'estreno',
    'partido',
    'mensajeRapido',
    'pedido',
    'pago',
    'clickMarketplace'
];
/**
 * GET /api/admin/backups
 * Lista todos los archivos de copia de seguridad locales.
 */
router.get('/', (req, res) => {
    try {
        const files = fs_1.default.readdirSync(BACKUP_DIR).filter(f => f.endsWith('.json'));
        const backups = files.map(file => {
            const stats = fs_1.default.statSync(path_1.default.join(BACKUP_DIR, file));
            return {
                filepath: file,
                size: stats.size,
                date: stats.mtime
            };
        }).sort((a, b) => b.date.getTime() - a.date.getTime());
        res.json(backups);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error leyendo backups' });
    }
});
/**
 * POST /api/admin/backups/create
 * Genera una copia de seguridad dinámica usando JSON.
 */
router.post('/create', async (req, res) => {
    try {
        // @ts-ignore
        const fullBackup = {};
        for (const modelName of MODELS_ORDER) {
            // @ts-ignore
            fullBackup[modelName] = await prisma[modelName].findMany();
        }
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `ares_backup_${timestamp}.json`;
        const filepath = path_1.default.join(BACKUP_DIR, filename);
        fs_1.default.writeFileSync(filepath, JSON.stringify(fullBackup, null, 2));
        res.json({ message: 'Backup creado exitosamente', file: filename });
    }
    catch (error) {
        console.error('Error creando backup:', error);
        res.status(500).json({ error: 'Error al generar la copia de seguridad' });
    }
});
/**
 * POST /api/admin/backups/restore
 * Restaura la base de datos a partir de un JSON (PELIGRO: Borra datos actuales)
 */
router.post('/restore', async (req, res) => {
    try {
        const { filename } = req.body;
        if (!filename)
            return res.status(400).json({ error: 'Debes enviar el nombre del archivo' });
        const filepath = path_1.default.join(BACKUP_DIR, filename);
        if (!fs_1.default.existsSync(filepath)) {
            return res.status(404).json({ error: 'Archivo de backup no encontrado' });
        }
        const fileContent = fs_1.default.readFileSync(filepath, 'utf8');
        const backupData = JSON.parse(fileContent);
        // 1. Borrar datos actuales en orden inverso a las dependencias
        const reverseOrder = [...MODELS_ORDER].reverse();
        for (const modelName of reverseOrder) {
            // @ts-ignore
            await prisma[modelName].deleteMany({});
        }
        // 2. Insertar datos del backup en orden de precedencia (padres primero)
        for (const modelName of MODELS_ORDER) {
            const records = backupData[modelName] || [];
            if (records.length > 0) {
                // @ts-ignore
                await prisma[modelName].createMany({
                    data: records,
                    skipDuplicates: true
                });
            }
        }
        res.json({ message: 'Restauración completada con éxito. Actualiza la página.' });
    }
    catch (error) {
        console.error('Error restaurando backup:', error);
        res.status(500).json({ error: 'Error fatal durante la restauración' });
    }
});
exports.default = router;
//# sourceMappingURL=backup.js.map