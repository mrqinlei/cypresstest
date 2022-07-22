describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('create wikispace', () =>{
        cy.visit('/ezWiki')
        cy.contains("Wiki").click()
        cy.contains("新 建").click()
        cy.get('#name.ant-input').type("uicreatewikispace")
        cy.get('#key.ant-input').type("uicreate")
        cy.contains('确 定').click()
        cy.contains('创建成功').should('contain','创建成功')
    }
    )
    it ('create new page',()=>{
        cy.contains("页面列表").click()
        cy.contains("新建页面").click()
        cy.get('[placeholder="请输入文章标题"]').type("uiautocreatewikipage")
        cy.get(".ProseMirror").type("输入内容输入内容输入内容输入内容输入内容")
        cy.contains("发 布").click()
    })
    it('delete wikispace',()=>{
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').click()
        cy.contains('确认删除').click()
     }
     )
})