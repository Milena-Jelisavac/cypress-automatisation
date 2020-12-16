describe("Login test", () => {  //describe blok sadrzi vise testova
    it('Visit gallery page', () => {  //it sadrzi jedan test
        cy.visit('/')  // visit() -> posecujemo neki URL
    })

    it('Kliknuti na login', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()

    })

    it('Login with valid credentials', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('m@gmail.com')
        cy.get('#password').type('123456789')
        cy.get('button').click()

    })

















 })
 