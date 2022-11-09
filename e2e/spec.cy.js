describe('empty spec', () => {
  it('should fail to login Ujian JTI Polinema', () => {
    cy.visit('http://ujian.jti.polinema.ac.id/public/code/index.php')
    cy.get('#xuser_name').type("butterfluxxx_")
    cy.get('#xuser_password').type("nisakkkk13")
    cy.get('#login').click()
  })
  it('should could to login Ujian JTI Polinema', () => {
    cy.visit('http://ujian.jti.polinema.ac.id/public/code/index.php')
    cy.get('#xuser_name').type("")
    cy.get('#xuser_password').type("")
    cy.get('#login').click()
  })
})