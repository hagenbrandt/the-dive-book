describe('Visit the app', () => {
    it('Visit the right localhost', () => {
        cy.visit('http://localhost:3000/')
        expect(true).to.equal(true)
    })
})