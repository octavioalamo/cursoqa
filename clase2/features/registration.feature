Feature: User registration
    As an internet User
    In order to create a new account
    I want to complete the registration process

    Scenario: Registration happy path
        When I go to the registration page
        And Fill the registration form properly
        Then I should see a message saying an email was sent

    Scenario: Usuario already exists
        When I go to the registration page
        And Fill the registration form with an already existing email
        Then I should see a message saying an email is duplicated

