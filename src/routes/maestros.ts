import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = Router();

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * RUTAS DE PLATAFORMAS
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Listar todas las plataformas
router.get('/plataformas', async (_req: Request, res: Response) => {
    try {
        const data = await prisma.plataforma.findMany({
            orderBy: { nombre: 'asc' }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener plataformas' });
    }
});

// Crear plataforma
router.post('/plataformas', async (req: Request, res: Response) => {
    try {
        const { nombre, color, emoji } = req.body;
        const data = await prisma.plataforma.create({
            data: { nombre, color, emoji }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear plataforma' });
    }
});

// Actualizar plataforma
router.put('/plataformas/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const { nombre, color, emoji, activo } = req.body;
        const data = await prisma.plataforma.update({
            where: { id },
            data: { nombre, color, emoji, activo }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar plataforma' });
    }
});

// Eliminar plataforma
router.delete('/plataformas/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        await prisma.plataforma.delete({ where: { id } });
        res.json({ success: true });
    } catch (err) {
        // Fallback to soft-delete if relations prevent hard delete
        try {
            await prisma.plataforma.update({
                where: { id: req.params.id },
                data: { activo: false }
            });
            res.json({ success: true, softDelete: true });
        } catch (e) {
            res.status(500).json({ error: 'Error al eliminar plataforma' });
        }
    }
});

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * RUTAS DE CATEGORÍAS
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Listar categorías
router.get('/categorias', async (req: Request, res: Response) => {
    try {
        const tipo = req.query.tipo as string;
        const where: any = {};
        if (tipo) where.tipo = tipo;

        const data = await prisma.categoria.findMany({
            where,
            orderBy: { nombre: 'asc' }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
});

// Crear categoría
router.post('/categorias', async (req: Request, res: Response) => {
    try {
        const { nombre, tipo } = req.body;
        const data = await prisma.categoria.create({
            data: { nombre, tipo }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear categoría' });
    }
});

// Actualizar categoría
router.put('/categorias/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const { nombre, tipo, activo } = req.body;
        const data = await prisma.categoria.update({
            where: { id },
            data: { nombre, tipo, activo }
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar categoría' });
    }
});

// Eliminar categoría
router.delete('/categorias/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        await prisma.categoria.delete({ where: { id } });
        res.json({ success: true });
    } catch (err) {
        try {
            await prisma.categoria.update({
                where: { id: req.params.id },
                data: { activo: false }
            });
            res.json({ success: true, softDelete: true });
        } catch (e) {
            res.status(500).json({ error: 'Error al eliminar categoría' });
        }
    }
});

export default router;
