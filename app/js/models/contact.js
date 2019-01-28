//enumeradores
Contact.prototype.DIRECT_TO = {
    PARADOXY: 1,
    NW_SOCIAL_ARTS: 2
};

Object.freeze(Contact.prototype.DIRECT_TO);

//object Contact
function Contact(directTo = Contact.prototype.DIRECT_TO.NW_SOCIAL_ARTS) {
    Contact.prototype._applyMasks();
    this.el = document.querySelector('form');
    this.directTo = directTo;
};

Contact.prototype._applyMasks = function () {

    var maskOptions = {
        mask: '+55 (00) 0 0000-0000',
        country: 'Brazil'
    }

    var phone = document.getElementById('phone');
    new IMask(phone, maskOptions);
}

Contact.prototype.isValidForm = function () {
    var isValid = true;
    [...this.el].forEach(elem => {
        if (!elem.value) {
            elem.classList.add('invalid');
            isValid = false;
        }
    });
    return isValid;
}

Contact.prototype.toJson = function () {
    return {
        name: this.el.querySelector('#name').value,
        email: this.el.querySelector('#email').value,
        company: this.el.querySelector('#company').value,
        phone: this.el.querySelector('#phone').value,
        title: this.el.querySelector('#title').value,
        text: this.el.querySelector('#text').value,
        date: new Date(Date.now()).toJSON(),
        directTo: this.getDirectTo()
    }
}

Contact.prototype.clearFields = function () {
    [...this.el].forEach(elem => {
        elem.value = '';
        elem.parentElement.querySelector('label').classList.remove('active')
    })
}

Contact.prototype.getDirectTo = function () {
    return this.directTo;
}



export default Contact;
