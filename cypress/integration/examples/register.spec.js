describe('Register test', () => {
 it('Visit page', () => {
    cy.visit('/') 
    })
 it('Click on register', () => {
     cy.visit('/')
     cy.get('.nav-link').eq(2).click()

 })
 it('Register with valid credentials', () => {
     cy.visit('/')
     cy.get('.nav-link').eq(2).click()
     cy.get('#first-name').type('Test')
     cy.get('#last-name').type('Cypress')
     cy.get('#email').type('testcypress@gmail.com')
     cy.get('#password').type('123456789')
     cy.get('#password-confirmation').type('123456789')
     cy.get('[type="checkbox"]').check()
     cy.get('.btn').click()
 })
 it('Register with empty first-name', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').invoke('val', '')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with empty last-name', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').invoke('val', '')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with empty email', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').invoke('val', '')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with empty password', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').invoke('val', '')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with empty confirmation password', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').invoke('val', '')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with all empty field', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').invoke('val', '')
    cy.get('#last-name').invoke('val', '')
    cy.get('#email').invoke('val', '')
    cy.get('#password').invoke('val', '')
    cy.get('#password-confirmation').invoke('val', '')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with invalid email-missing @', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypressgmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with invalid email-missing .com', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with invalid email-missing frst part', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with email that already exist', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress1@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register password and conf. password', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('12345678')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').click()
})
it('Register with checking terms and cond', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Cypress')
    cy.get('#email').type('testcypress@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirmation').type('123456789')
    cy.get('.btn').click()
})

})
