module.exports = function () {
    this.When(/^Fill the registration form properly$/, async function(){
        await driver.findElement(page.registration.elements.emailInputBox).sendKeys('tavmsn@gmail.com')
        await driver.findElement(page.registration.elements.firstnameInputBox).sendKeys('Octavio')
        await driver.findElement(page.registration.elements.lastnameInputBox).sendKeys('Alamo')
        await driver.findElement(page.registration.elements.passwordInputBox).sendKeys('password')
        await driver.findElement(page.registration.elements.password2InputBox).sendKeys('password')
        await driver.wait(until.elementsLocated(page.registration.elements.captcha), 10000).then( async function(){
            await driver.findElement(page.registration.elements.captcha).click()
        })             
    })
}