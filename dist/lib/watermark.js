"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyWatermark = applyWatermark;
const sharp_1 = __importDefault(require("sharp"));
const axios_1 = __importDefault(require("axios"));
/**
 * Aplica una marca de agua a una imagen.
 *
 * @param imageUrl URL de la imagen original (Cloudinary u otra)
 * @param watermarkText Texto para la marca de agua (ej: alias del vendedor)
 * @param logoUrl URL del logo del vendedor (opcional)
 * @returns Buffer con la imagen procesada
 */
async function applyWatermark(imageUrl, watermarkText, logoUrl, whatsapp) {
    let mainImageBuffer;
    let width = 800;
    let height = 800;
    let useFallback = false;
    try {
        // 1. Descargar la imagen principal
        const response = await axios_1.default.get(imageUrl, {
            responseType: 'arraybuffer',
            timeout: 5000 // 5 segundos de timeout
        });
        mainImageBuffer = Buffer.from(response.data);
        const metadata = await (0, sharp_1.default)(mainImageBuffer).metadata();
        width = metadata.width || 800;
        height = metadata.height || 800;
    }
    catch (err) {
        console.error(`Error descargando imagen principal (${imageUrl}):`, err.message);
        useFallback = true;
        // Crear un buffer de imagen sólida como fallback
        mainImageBuffer = await (0, sharp_1.default)({
            create: {
                width: 800,
                height: 600,
                channels: 4,
                background: { r: 20, g: 20, b: 25, alpha: 1 }
            }
        }).png().toBuffer();
        width = 800;
        height = 600;
    }
    const overlays = [];
    // 2. Preparar el logo si existe (Posicionarlo abajo a la izquierda)
    if (logoUrl && !useFallback) {
        try {
            const logoResponse = await axios_1.default.get(logoUrl, { responseType: 'arraybuffer', timeout: 3000 });
            const logoBuffer = await (0, sharp_1.default)(Buffer.from(logoResponse.data))
                .resize({ width: Math.round(width * 0.15) })
                .toBuffer();
            overlays.push({
                input: logoBuffer,
                gravity: 'southwest',
                blend: 'over',
            });
        }
        catch (err) {
            console.error('Error cargando logo para watermark:', err.message);
        }
    }
    // 3. Preparar el texto (SVG) - ABAJO A LA DERECHA (WhatsApp/Alias)
    const isDemo = watermarkText.includes('DEMO');
    const svgText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: white; font-size: ${Math.round(width * 0.04)}px; font-weight: bold; font-family: sans-serif; }
        .shadow { fill: black; font-size: ${Math.round(width * 0.04)}px; font-weight: bold; font-family: sans-serif; opacity: 0.5; }
        .demo { fill: rgba(255,255,255,0.15); font-size: ${Math.round(width * 0.12)}px; font-weight: 900; font-family: sans-serif; }
        .fallback-text { fill: #444; font-size: 24px; font-weight: bold; font-family: sans-serif; }
      </style>
      
      ${useFallback ? `
        <rect width="100%" height="100%" fill="#1a1a1a" />
        <text x="50%" y="45%" text-anchor="middle" fill="white" style="font-size: 40px; font-weight: 900;">ARES SAAS</text>
        <text x="50%" y="55%" text-anchor="middle" class="fallback-text">Cargando material visual...</text>
      ` : ''}

      <!-- Marca de agua principal abajo a la derecha -->
      <text x="${width - 18}" y="${height - 18}" text-anchor="end" class="shadow">${watermarkText}${whatsapp ? ` | WhatsApp: ${whatsapp}` : ''}</text>
      <text x="${width - 20}" y="${height - 20}" text-anchor="end" class="title">${watermarkText}${whatsapp ? ` | WhatsApp: ${whatsapp}` : ''}</text>

      ${isDemo ? `
        <!-- Marca de agua DIAGONAL para planes gratuitos -->
        <text 
          x="${width / 2}" 
          y="${height / 2}" 
          text-anchor="middle" 
          class="demo" 
          transform="rotate(-45, ${width / 2}, ${height / 2})"
        >DEMO</text>
      ` : ''}
    </svg>
  `;
    overlays.push({
        input: Buffer.from(svgText),
        top: 0,
        left: 0,
    });
    // 4. Componer
    return (0, sharp_1.default)(mainImageBuffer).composite(overlays).png().toBuffer();
}
//# sourceMappingURL=watermark.js.map