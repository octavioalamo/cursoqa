describe('Login as as registered user', function(){
    it('should login sucessfully if the user exists', function(){
        cy.getExistingUser().then(email => {
            cy.log(email)
        })
    })
})