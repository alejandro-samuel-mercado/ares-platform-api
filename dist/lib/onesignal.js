"use strict";
/**
 * OneSignal Utility — Plataforma Ares
 *
 * Wrapper para enviar notificaciones push a través de la REST API de OneSignal.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignal = void 0;
const axios_1 = __importDefault(require("axios"));
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID || 'TU_ONESIGNAL_APP_ID';
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_REST_API_KEY || 'TU_ONESIGNAL_API_KEY';
exports.OneSignal = {
    /**
     * Envía una notificación push a todos los usuarios o por segmentos.
     */
    async sendNotification(options) {
        try {
            const payload = {
                app_id: ONESIGNAL_APP_ID,
                headings: options.headings,
                contents: options.contents,
                data: options.data,
                big_picture: options.big_picture,
            };
            // Si hay filtros, no se deben enviar segmentos (conflictivo)
            if (options.filters && options.filters.length > 0) {
                payload.filters = options.filters;
            }
            else {
                payload.included_segments = options.segments || ['All'];
            }
            const response = await axios_1.default.post('https://onesignal.com/api/v1/notifications', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${ONESIGNAL_API_KEY}`,
                },
            });
            console.log(`[OneSignal] Notification sent successfully:`, response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error enviando notificación OneSignal:', error.response?.data || error.message);
            return null;
        }
    },
    /**
     * Notifica sobre un nuevo partido (Solo a vendedores Pro).
     */
    async notifyNewMatch(matchDetails) {
        return this.sendNotification({
            headings: { en: '🏆 New Match Today!', es: '🏆 ¡Nuevo Partido Hoy!' },
            contents: {
                en: `${matchDetails.equipo_a} vs ${matchDetails.equipo_b} on ${matchDetails.canal}.`,
                es: `${matchDetails.equipo_a} vs ${matchDetails.equipo_b} en ${matchDetails.canal}.`
            },
            filters: [{ field: 'tag', key: 'plan', relation: '=', value: 'Pro' }]
        });
    },
    /**
     * Envía una notificación directa a un usuario específico por su ID.
     */
    async sendSystemNotification(vendorId, title, message) {
        return this.sendNotification({
            headings: { en: title, es: title },
            contents: { en: message, es: message },
            // Usar external_user_id es más fiable que tags para notificaciones directas
            filters: [{ field: 'external_user_id', relation: '=', value: vendorId }]
        });
    }
};
//# sourceMappingURL=onesignal.js.map