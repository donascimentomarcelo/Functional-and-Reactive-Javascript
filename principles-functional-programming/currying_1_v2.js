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

const useSpecificSize = textWithSizeBetween(4)(255);
const useValidName = useSpecificSize('Invalid Name!');
const p1 = { name: 'A', price: 14.99, desc: 0.25 };
useValidName(p1.name);