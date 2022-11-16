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

function validateValue(fn) {
    // Lazy evaluation
    return (value) => {
        try {
            fn(value)
        } catch (e) {
            return { error: e };
        }
    }
}

const useSpecificSize = textWithSizeBetween(4)(255);
const useValidProductName = useSpecificSize('Invalid Name!');

const validateProduct = validateValue(useValidProductName);

const p1 = { name: 'A', price: 14.99, desc: 0.25 };
const p2 = { name: 'B', price: 14.99, desc: 0.25 };

console.log(validateProduct(p1.name));
console.log(validateProduct(p2.name));