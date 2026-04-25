"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileUrl = exports.upload = void 0;
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const useCloudinary = !!process.env.CLOUDINARY_CLOUD_NAME;
if (useCloudinary) {
    cloudinary_1.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
}
// Local Storage Fallback
const UPLOADS_DIR = path_1.default.join(__dirname, '../../uploads');
if (!useCloudinary && !fs_1.default.existsSync(UPLOADS_DIR)) {
    fs_1.default.mkdirSync(UPLOADS_DIR, { recursive: true });
}
const storage = useCloudinary
    ? new multer_storage_cloudinary_1.CloudinaryStorage({
        cloudinary: cloudinary_1.v2,
        params: {
            folder: 'ares/banco_imagenes',
            allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        },
    })
    : multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_DIR);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const ext = path_1.default.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix + ext);
        }
    });
exports.upload = (0, multer_1.default)({ storage });
const getFileUrl = (file) => {
    if (!file) {
        console.log('[CLOUDINARY] getFileUrl: No file provided');
        return '';
    }
    console.log('[CLOUDINARY] getFileUrl Processing:', {
        fieldname: file.fieldname,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        path: file.path ? 'Present' : 'Missing'
    });
    // Cloudinary return
    if (file.path && file.path.startsWith('http'))
        return file.path;
    if (file.secure_url)
        return file.secure_url;
    // Local diskStorage return — build absolute URL so the frontend can access it
    if (file.filename) {
        const apiBase = (process.env.BASE_URL || process.env.API_URL || 'http://localhost:4000').replace(/\/+$/, '');
        return `${apiBase}/uploads/${file.filename}`;
    }
    return file.path || '';
};
exports.getFileUrl = getFileUrl;
exports.default = cloudinary_1.v2;
//# sourceMappingURL=cloudinary.js.map