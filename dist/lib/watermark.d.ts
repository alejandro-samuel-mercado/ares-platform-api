/**
 * Aplica una marca de agua a una imagen.
 *
 * @param imageUrl URL de la imagen original (Cloudinary u otra)
 * @param watermarkText Texto para la marca de agua (ej: alias del vendedor)
 * @param logoUrl URL del logo del vendedor (opcional)
 * @returns Buffer con la imagen procesada
 */
export declare function applyWatermark(imageUrl: string, watermarkText: string, logoUrl?: string, whatsapp?: string): Promise<Buffer>;
//# sourceMappingURL=watermark.d.ts.map