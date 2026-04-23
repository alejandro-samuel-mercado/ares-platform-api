/**
 * OneSignal Utility — Plataforma Ares
 *
 * Wrapper para enviar notificaciones push a través de la REST API de OneSignal.
 */
export declare const OneSignal: {
    /**
     * Envía una notificación push a todos los usuarios o por segmentos.
     */
    sendNotification(options: {
        headings: {
            [key: string]: string;
        };
        contents: {
            [key: string]: string;
        };
        segments?: string[];
        filters?: any[];
        data?: any;
        big_picture?: string;
    }): Promise<any>;
    /**
     * Notifica sobre un nuevo partido (Solo a vendedores Pro).
     */
    notifyNewMatch(matchDetails: {
        equipo_a: string;
        equipo_b: string;
        liga: string;
        canal: string;
    }): Promise<any>;
    /**
     * Envía una notificación directa a un usuario específico por su ID.
     */
    sendSystemNotification(vendorId: string, title: string, message: string): Promise<any>;
};
//# sourceMappingURL=onesignal.d.ts.map