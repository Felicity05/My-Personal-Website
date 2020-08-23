describe("Testing some functionalities", () => {
    it("the page is available", () => {
        cy.visit('http://localhost:8080')
    })

    it("test the element exist and is working", () => {
        //check for a element
        cy.get('.nav-link')
            .contains('Cigna').should('have.class', 'current').click()
        cy.get('.nav-link')
            .contains('FIU').should('have.class', 'past').click()
    })

    it("user is correctly redirected to links", () => {
        cy.get('.fa-github').click()
        cy.get('.fa-linkedin').click()
    })

    it("user is returned to home", () => {
        cy.get('.material-icons').click()
    })
})