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
    }
    )

    it('create repo new file', () =>{
        cy.contains('新建文件').click()
        cy.get('[placeholder="新文件名"]').type("uicreaterepofile")
        cy.get('.view-line').type("我是内容我是内容我是内容")
        cy.contains('保存').click()
        cy.contains('确 定').click()
        cy.contains('操作成功').should('contain','操作成功')
    }
    )

    it('delete repo', () =>{
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').eq(1).click()
        cy.get('[placeholder="请输入代码库名称确认"]').type('uicreatecoderepo')
        cy.get('.ant-btn.ant-btn-primary').eq(1).click()
        cy.contains('成功删除代码库').should('contain','成功删除代码库')
    }
    )
})