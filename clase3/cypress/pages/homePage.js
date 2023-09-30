import header from "../components/header"

class homePage {

    constructor(){
        this.header = header
    }
    
    open(){
        cy.visit('http://localhost:3000')
    }
}

module.exports = new homePage();