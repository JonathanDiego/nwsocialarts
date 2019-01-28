

//node dependencies
const nodemailer = require('nodemailer');

//local dependencies
const mailModel = require('./../infrastructure/mail');

const DIRECT_TO = {
    PARADOXY: 1,
    NW_SOCIAL_ARTS: 2
}

var transportMail = function (mailoptions) {

    let transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: '',
            pass: ''
        }
    });

    return transport.sendMail(mailoptions);
}

var sendMail = (req, res) => {

    var mailRequest = req.body || null;
    if (!mailRequest) {
        res.status(412);
        res.send({ message: 'Body is empty' });
        return;
    }

    if (JSON.stringify(mailRequest).match(/\s(""|'')|(""|'')/g)) {
        res.status(422);
        res.send({ message: 'Some fields are empty' });
        return;
    }

    //deal with request 
    mailRequest.from = `NwSocialArts Ticket <paradoxy.dev@gmail.com>`;

    
    switch (mailRequest.directTo) {

        case DIRECT_TO.PARADOXY:
            mailRequest.to = '';
            break;

        case DIRECT_TO.NW_SOCIAL_ARTS:
            mailRequest.to = '';
            break;
        default:
            res.status(422);
            res.send({ message: 'Client not found' });

    }

    mailRequest.html = `${mailRequest.email}\n\n<h1>${mailRequest.title}</h1>\n\n<h3>${mailRequest.text} - ${mailRequest.directTo}</h3>`;
    mailRequest.subject = `${mailRequest.name} (${mailRequest.company}) - Tel:${mailRequest.phone}`;

    //send mail
    transportMail(mailRequest).catch(err => {
        console.log(err);
    });
    res.send({ message: 'mail sended' });
}

module.exports.sendMail = sendMail;