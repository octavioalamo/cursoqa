import header from "../components/header"

class homePage {

    constructor(){
        this.header = header
    }
    
    open(){
        cy.visit(Cypress.env('FRONT_URL'))
    }
}

module.exports = new homePage();