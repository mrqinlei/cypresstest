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


    it('create pipeline', () =>{
        cy.contains('流水线').click()
        cy.contains('流水线管理').click()
        cy.contains('新 建').click()
        cy.get('#name.ant-input').type("uicreatecoderepo")
        cy.contains('确 定').click()
        cy.contains('全部分支').click()
        cy.contains('新增任务').click()
        cy.get('[placeholder="按名称查找"]').type("maven")
        cy.contains('使用Apache Maven构建Java项目').click()
        cy.get('#buildImageId.ant-select-selection-search-input').click()
        cy.contains('maven3.6.1-jdk-8').click()
        cy.get('.view-line').eq(4).type("mvn clean deploy -U")
        cy.get('#privateRepoNames.ant-select-selection-search-input').type('maven')
        cy.contains('maven').click()
        cy.get('[placeholder="请指定要上传的文件"]').type("target/raintest01.ab-1.0.5-SNAPSHOT.jar")
        cy.contains('请选择仓库').type('file')
        cy.contains('file').click()
        cy.contains('确 定').click()

    }
    )
})