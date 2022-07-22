describe('ezOneUiTest', () => {
  it('login', () => {
    cy.visit('')
    cy.contains('登录').click()
    cy.get("#sign-in_identifier").type("afei")
    cy.get("#sign-in_credential").type("jiandanliangdian123456")
    cy.contains('登 录').click()
  })
})