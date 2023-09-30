module.exports = {

    url: 'http://localhost:3000/',

    elements: {
        signUpLink: by.id('sign_up'),
    },

    goToSignUp: function(){
        var selector = page.home.elements.signUpLink
        return driver.findElement(selector).click()
    }
};