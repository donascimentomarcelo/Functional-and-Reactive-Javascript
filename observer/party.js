const readline = require('readline');

function getAnswer(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
            rl.close();
        });
    });
}

// observer
function girlfriend() {
    console.log('Girlfriend: Turn off the lights');
    console.log('Girlfriend: Shut up');
    console.log('Girlfriend: Susprise!');
}

// observer
function apartmentManager(event) {
    console.log('Apartment Manager: Monitorando o barulho!');
    console.log(`event -> ${event.resp}`);
    console.log(`event -> ${event.data}`);
}

// subject
async function doorman(interest) {
    while (true) {
        const resp = await getAnswer('The boyfriend arrived? (s/N/q)');

        if (resp.toLowerCase() === 's')
            //observadores sao notificados
            interest.forEach(observer => observer({resp, data: new Date()}));
        else if (resp.toLowerCase() === 'q')
            break;
    }
}

doorman([girlfriend, apartmentManager]);