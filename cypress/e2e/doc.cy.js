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

    it('create txt',()=>{
        cy.contains('文档列表').click()
        cy.get('.ant-btn.ant-btn-secondary.ant-dropdown-trigger').click()
        cy.contains('文本文件').click()
        cy.get('[placeholder="新文件名"]').type("uiautocreatedoctxt")
        cy.get('.view-line').type("我是内容我是内容我是内容")
        cy.contains('保存').click()
        cy.contains('操作成功').should('contain','操作成功')
    })

    it('create dir',()=>{
        cy.contains('文档列表').click()
        cy.get('.ant-btn.ant-btn-default').eq(1).click()
        cy.get('[placeholder="请输入文件夹名称"]').type("uiautocreatedocdir")
        cy.contains('确 定').click()
        cy.contains('操作成功').should('contain','操作成功')
    })

    it('delete doc space',()=>{
        cy.contains('文档列表').click()
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').click()
        cy.contains('确认删除').click()
        cy.contains('成功删除空间').should('contain','成功删除空间')
    })
    
})