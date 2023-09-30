class singUpPage
{
    elements = {
        emailInput: () => cy.get('input[name="email"]'),
        firstNameInput: () =>  cy.get('input[name="firstName"]'),
        lastNameInput: () =>  cy.get('input[name="lastName"]'),
        passwordNameInput: () =>  cy.get('input[name="password"]'),
        password2NameInput: () =>  cy.get('input[name="password2"]'),
        signUpBtn: () => cy.get('button.btn'),
        alert: () => cy.get('.alert'),
        invalidFeedback: () => cy.get('div.invalid-feedback')
    }

    fill(email, firstName, lastName, password){
        this.elements.emailInput().type(email)
        this.elements.firstNameInput().type(firstName)
        this.elements.lastNameInput().type(lastName)
        this.elements.passwordNameInput().type(password)
        this.elements.password2NameInput().type(password)
    }

    send(){
        this.elements.signUpBtn().click()
    }
}

module.exports = new singUpPage();