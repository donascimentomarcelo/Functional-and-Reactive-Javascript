/**
 * Todas as funções recebem apenas 1 parametro
 * Todas as funções retornam funções que recebem
 * apenas 1 parametro
 */

function textWithSizeBetween(min) {
    return max =>
        error =>
            text => {
                const size = (text || '').trim().length;

                if (size < min || size > max) throw error;
            }
}

const p1 = { name: 'A', price: 14.99, desc: 0.25 };
textWithSizeBetween(4)(255)('Invalid Name!')(p1.name)