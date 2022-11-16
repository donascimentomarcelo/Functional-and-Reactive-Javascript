const person = {
    name: 'Maria',
    height: 1.76,
    city: 'São Paulo',
    address: {
        street: 'Red'
    }
}

// Passagem por referência
function updatePerson(person) {
    const newPerson = { ...person };
    newPerson.name = 'Joana';
    newPerson.city = 'Curitiba';
    // Pra corrigir precisa de um shadow clone
    newPerson.address.street = 'Blue';
    return newPerson;
}

const newPerson = updatePerson(person);
console.log(person);
console.log(newPerson);