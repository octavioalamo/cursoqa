const { faker } = require('@faker-js/faker');

module.exports = function () {
    this.When(/^Fill the registration form properly$/, async function(){
        await driver.findElement(page.registration.elements.emailInputBox).sendKeys(faker.internet.email())
        await driver.findElement(page.registration.elements.firstnameInputBox).sendKeys('Octavio')
        await driver.findElement(page.registration.elements.lastnameInputBox).sendKeys('Alamo')
        await driver.findElement(page.registration.elements.passwordInputBox).sendKeys('password')
        await driver.findElement(page.registration.elements.password2InputBox).sendKeys('password')
        return driver.findElement(page.registration.elements.signUpButton).click()           
    })

    this.Then(/^I should see a message saying an email was sent$/, function () {

        // driver wait returns a promise so return that
        return driver.wait(until.elementsLocated(page.registration.elements.alert), 10000).then(function(){

            return driver.findElement(page.registration.elements.alert);
        })
        .then(async function (element) {
            const text = await element.getText()
            expect(text).to.include('Activation code has been sent to your email!');
        });
    });
}