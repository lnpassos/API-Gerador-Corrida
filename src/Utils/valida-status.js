
// Funçãozinha básica apenas para validar o status nessa task
export function normalizeStatus(status) {
    if (typeof status === 'string') {
        return status.toUpperCase();
    }
    return status;
}