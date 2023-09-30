module.exports = {
    url: 'http://localhost:3000/registration',
    elements: {
        emailInputBox: by.name('email'),
        firstnameInputBox: by.name('firstName'),
        lastnameInputBox: by.name('lastName'),
        passwordInputBox: by.name('password'),
        password2InputBox: by.name('password2'),
        captcha: by.css('.recaptcha-checkbox-border')
    },
}