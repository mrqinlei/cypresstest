describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('create doc space', () =>{
        cy.visit('/ezDoc')
        cy.contains('文档管理').click()
        cy.contains('新 建').click()
        cy.get('#new-space_name.ant-input').type("uicreatedocspace")
        cy.get('#new-space_sign.ant-input').type("uicreatedocspace")
        cy.contains('确 定').click()
    }
    )

    it('create dir',()=>{
        cy.get('.anticon-folder-add').click()
        cy.get('.name.ant-input').type("uicreatefolder")
        cy.contains('确 定').click()
        cy.contains('操作成功').should('contain','操作成功')
    })
    
})