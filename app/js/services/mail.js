var baseUrl = 'http://localhost:5000/mail';//'/mail';

export function sendMail(data) {
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