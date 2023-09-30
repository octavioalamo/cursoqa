class header{
    elements =  {
        signUpBtn: () => cy.get('#sign_up')
    }

    goToSingUp(){
        this.elements.signUpBtn().click()
    }

}

module.exports = new header();