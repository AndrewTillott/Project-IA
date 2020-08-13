const validateForm = () => {   
    
    const form = document.getElementById('sign-up-form');

    const namePopup = document.getElementById('name-popup');
    const emailPopup = document.getElementById('email-popup');
    const phonePopup = document.getElementById('phone-popup');
    const postPopup = document.getElementById('post-popup');

    var name = form.elements.namedItem('Name').value;
    var email = form.elements.namedItem('Email Address').value;
    var phone = form.elements.namedItem('Phone Number').value;
    var post = form.elements.namedItem('Post Code').value;
    
    var error
    
    if (!Boolean(name)) {
        namePopup.style.visibility = 'visible';
        error = 'true';
    };

    if (!/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email)) {
        emailPopup.style.visibility = 'visible';
        error = 'true';
    };

    if (!/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/.test(phone)) {
        phonePopup.style.visibility = 'visible';
        error = 'true'
    };

    if (!/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(post)) {
        postPopup.style.visibility = 'visible';
        error = 'true'
    };

    if (error) {return false};

};

const clearNamePopup = () => {

    const namePopup = document.getElementById('name-popup');

    namePopup.style.visibility = 'hidden';

};

const clearEmailPopup = () => {

    const namePopup = document.getElementById('email-popup');

    namePopup.style.visibility = 'hidden';

};

const clearPhonePopup = () => {

    const namePopup = document.getElementById('phone-popup');

    namePopup.style.visibility = 'hidden';

};

const clearPostPopup = () => {

    const namePopup = document.getElementById('post-popup');

    namePopup.style.visibility = 'hidden';

};