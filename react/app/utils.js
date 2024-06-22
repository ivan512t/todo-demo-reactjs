export function makeID() {
    return Math.random().toString(36).substring(2, 4) + Date.now().toString(36);
}
