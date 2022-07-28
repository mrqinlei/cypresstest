describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('create package repo', () =>{
        cy.visit('/ezPackage/snapshot')
        cy.contains('制品库').click()
        cy.contains('半成品库').click()
        cy.contains('新建半成品库').click()
        cy.get('.ant-select-selection-item').click()
        cy.contains('Maven').click()
        cy.get('#repoName.ant-input').type("uicreatepackage")
        cy.contains('确 定').click()
        cy.contains('创建成功').should('contain','创建成功')
    }
    )

    it('create package ariifactld', () =>{
        cy.visit('/ezPackage/snapshot')
        cy.contains('制品库').click()
        cy.contains('半成品库').click()
        cy.contains('uicreatepackage').click()
        cy.contains('包列表').click()
        cy.contains('新建包').click()
        cy.get('#pkgName.ant-input').type("ezone.work")
        cy.get('#pkgNameSec.ant-input').type("artifactld")
        cy.contains('确 定').click()
        cy.contains('包创建成功').should('contain','包创建成功')
        cy.contains('ezone.work:artifactld').click()
        cy.contains('+ 上传新版本').click()
        cy.contains('选择文件').click()
        cy.get("input[type='file']").eq(1).attachFile('newjar.jar')
        cy.get("#version.ant-input").type("0.0.1-SNAPSHOT")
        cy.contains('确 定').click()
        cy.get('.anticon.anticon-database').click()
        cy.contains('ezone.work:artifactld').should('contain','ezone.work:artifactld')
        cy.get('.anticon.anticon-close').eq(0).click()
        cy.get('.anticon.anticon-delete').eq(1).click({force: true})    
        cy.contains('确 认').click({force: true})
        cy.get('.anticon.anticon-delete').eq(0).click({force: true})    
        cy.contains('确 认').click({force: true})
    }
    )

    it('delete packagerepo', () =>{
        cy.contains('运维操作').click()
        cy.contains('删除制品库').click()
        cy.get('[placeholder="请输入制品库名称确认"]').type('uicreatepackage')
        cy.get('.ant-btn,ant-btn-primary').eq(4).click()
        cy.contains('删除成功').should('contain','删除成功')

    }
    )
})