module.exports = function () {
    this.When(/^I go to the registration page$/, function(){
        return helpers.loadPage('http://localhost:3000')
            .then(async function (){
                return page.home.goToSignUp()
            })
    })
}