var baseUrl = 'http://localhost:5000/mail';//'/mail';

var DIRECT_TO = {
    PARADOXY: 1,
    NW_SOCIAL_ARTS: 2
}

Object.freeze(DIRECT_TO);

export function sendMail(data) {

    switch (data.directTo) {
        case DIRECT_TO.PARADOXY: baseUrl = 'http://localhost:5000/mail'; //'https://paradoxy.com.br/mail'
            break;
    }
debugger;
    return fetch(`${baseUrl}/sendmail`,
        {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(value => {
            return value.json();
        });
}