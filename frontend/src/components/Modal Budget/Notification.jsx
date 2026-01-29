import { notification } from 'antd';

/**
 * Función helper para mostrar notificaciones de Ant Design
 * @param {string} type - Tipo de notificación: 'success' | 'error' | 'info' | 'warning'
 * @param {string} message - Título de la notificación
 * @param {string} description - Descripción/contenido de la notificación
 * @param {number} duration - Duración en segundos (default: 4.5)
 */
const showNotification = (type, message, description, duration = 4.5) => {
    notification[type]({
        message: message,
        description: description,
        duration: duration,
        placement: 'topRight', // Posición de la notificación
    });
};

// Exportar funciones específicas para cada tipo
export const notifySuccess = (message, description, duration) => {
    showNotification('success', message, description, duration);
};

export const notifyError = (message, description, duration) => {
    showNotification('error', message, description, duration);
};

export const notifyInfo = (message, description, duration) => {
    showNotification('info', message, description, duration);
};

export const notifyWarning = (message, description, duration) => {
    showNotification('warning', message, description, duration);
};

// Exportar la función general también
export default showNotification;