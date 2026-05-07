import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const useCloudinary = !!process.env.CLOUDINARY_CLOUD_NAME;

if (useCloudinary) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

// Local Storage Fallback
const UPLOADS_DIR = path.join(__dirname, '../../uploads');
if (!useCloudinary && !fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = useCloudinary 
  ? new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: 'ares/banco_imagenes',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp', 'pdf', 'svg', 'gif', 'JPG', 'PNG', 'JPEG', 'WEBP', 'PDF', 'SVG', 'GIF'],
        format: async (req: any, file: any) => {
          const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
          return ['jpg', 'png', 'jpeg', 'webp', 'pdf', 'svg', 'gif'].includes(ext) 
            ? (ext === 'jpg' ? 'jpeg' : ext) 
            : 'jpeg';
        },
        public_id: (req: any, file: any) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          const cleanName = path.basename(file.originalname, path.extname(file.originalname))
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '_');
          return `file-${uniqueSuffix}-${cleanName}`;
        }
      } as any,
    })
  : multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
    });

export const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  }
});

export const getFileUrl = (file: any): string => {
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
  if (file.path && file.path.startsWith('http')) return file.path;
  if (file.secure_url) return file.secure_url;
  // Local diskStorage return — build absolute URL so the frontend can access it
  if (file.filename) {
    const apiBase = (process.env.BASE_URL || process.env.API_URL || 'http://localhost:4000').replace(/\/+$/, '');
    return `${apiBase}/uploads/${file.filename}`;
  }
  return file.path || '';
};

export default cloudinary;
