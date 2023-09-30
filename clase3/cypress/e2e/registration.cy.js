import homePage from "../pages/homePage"
import signUpPage from "../pages/signUpPage"
import { faker } from '@faker-js/faker';

let email;

describe('Account creation', function(){

    this.beforeEach(function (){
        homePage.open()
        homePage.header.goToSingUp()
    })

    it ('Should show a message saying an activation email was sent when all data is correct', function(){
        email = faker.internet.email()
        signUpPage.fill(email, faker.person.firstName(), faker.person.lastName(), 'test1234')
        signUpPage.send()
        
        signUpPage.elements.alert().then(alert => {
            expect(alert).to.contain('Activation code has been sent to your email!')
        })
    })

    it ('Should show a message saying the email is duplicated when the email already exists', function(){
        signUpPage.fill(email, faker.person.firstName(), faker.person.lastName(), 'test1234')
        signUpPage.send()
        
        signUpPage.elements.invalidFeedback().then(feedback => {
            expect(feedback).to.be.visible
            expect(feedback).to.contain('Email is already used.')
        })
    })

    it ('Should show an error when the password is too short', function(){
        signUpPage.fill(email, faker.person.firstName(), faker.person.lastName(), 'test')
        signUpPage.send()
        signUpPage.elements.invalidFeedback().then(feedback => {
            expect(feedback).to.be.visible
            expect(feedback).to.contain('The password must be between 6 and 16 characters long')
        })
    })
})