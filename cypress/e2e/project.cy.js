
describe('ezOneUiTest', () => {

    beforeEach( function() {
        cy.apilogin()
    })
   
    it('create proejctspace', () => {
        cy.visit('http://test321.ezone-test.work/ezProject')
        // cy.contains('我的工作台').click()
        cy.contains('项目管理').click()
        cy.contains('新 建').click()
        cy.get("#new-project_name").type("uiautocreateproject")
        cy.get("#new-project_key").type("uiautocreateproject")
        cy.get("#new-project_description").type("uiautocreateproject")
        cy.get("#new-project_projectTemplateId").click()
        cy.contains("软件研发").click()
        cy.contains('确 定').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]').should('contain',"uiautocreateproject")
    })
    
    it('create new plan',()=> {
        cy.contains('计划与看板').click()
        cy.contains('新建计划').click()
        cy.get('[placeholder="开始日期"]').click().type("2022-07-22").type('{enter}')
        cy.get('[placeholder="结束日期"]').click().type("2022-07-23").type('{enter}')
        cy.get('[placeholder="请输入名称"]').type("uiautocreateplan")
        cy.contains("确 定").click()
        cy.contains("计划创建成功").should('contain','计划创建成功')
    })
    
    it('delete projectspace',()=>{
        cy.contains('项目管理').click()
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').click()
        cy.get('[placeholder="请输入完整的项目英文标识"]').type('uiautocreateproject')    
        cy.get('button.ant-btn.ant-btn-primary:nth-child(2)').click()
        cy.contains("成功删除项目").should('contain',"成功删除项目")
    })
  })