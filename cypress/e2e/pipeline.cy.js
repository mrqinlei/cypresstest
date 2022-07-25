describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('create code repo', () =>{
        cy.visit('/ezCode')
        cy.contains('代码库').click()
        cy.contains('新建代码库').click()
        cy.get('#dir.ant-select-selection-search-input').type("uicreatecodedir")
        cy.get('#name.ant-input').type("uicreatecoderepo")
        cy.contains('确定').click()
        cy.contains('已成功创建代码库').should('contain','已成功创建代码库')
        cy.exec("sh cypress/e2e/repo/pushjavademo.sh")
    }
    )
})