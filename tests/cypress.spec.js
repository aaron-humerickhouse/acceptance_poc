describe('Layer Example', () => {
    it('Should Fail', () => {
        cy.visit('http://0.0.0.0:8080/src/layered_testing.html')
        cy.get('#button').click()
        cy.contains('Button was successfully clicked')
    })
  })
  