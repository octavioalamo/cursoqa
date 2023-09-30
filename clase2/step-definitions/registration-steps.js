const { faker } = require('@faker-js/faker');

async function fillRegistrarion(username) {
    await driver.findElement(page.registration.elements.emailInputBox).sendKeys(shared.testData.username)
    await driver.findElement(page.registration.elements.firstnameInputBox).sendKeys('Octavio')
    await driver.findElement(page.registration.elements.lastnameInputBox).sendKeys('Alamo')
    await driver.findElement(page.registration.elements.passwordInputBox).sendKeys('password')
    await driver.findElement(page.registration.elements.password2InputBox).sendKeys('password')
    return driver.findElement(page.registration.elements.signUpButton).click() 
}

module.exports = function () {
    this.When(/^Fill the registration form properly$/, async function(){
        shared.testData.username = faker.internet.email()
        return fillRegistrarion(shared.testData.username)   
    })

    this.When(/^Fill the registration form with an already existing email$/, async function(){
        return fillRegistrarion(shared.testData.username)         
    })

    this.Then(/^I should see a message saying an email was sent$/, function () {
        return driver.wait(until.elementsLocated(page.registration.elements.alert), 10000).then(function(){

            return driver.findElement(page.registration.elements.alert);
        })
        .then(async function (element) {
            const text = await element.getText()
            expect(text).to.include('Activation code has been sent to your email!');
        });
    });

    this.Then(/^I should see a message saying an email is duplicated$/, function () {
        

        return driver.wait(until.elementsLocated(page.registration.elements.invalidFeedback), 10000).then(function(){

            return driver.findElement(page.registration.elements.invalidFeedback);
        })
        .then(async function (element) {
            const text = await element.getText()
            expect(text).to.include('Email is already used.');
        });
    })
}