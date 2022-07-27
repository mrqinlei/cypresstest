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
        cy.get('.view-lines.monaco-mouse-cursor-text').clear().type("mvn clean deploy -U")
        cy.get('.ant-select-selection-overflow-item.ant-select-selection-overflow-item-suffix').click()
        cy.get('._searchInputOption_cohr4_237').click()
        cy.get('[placeholder="请指定要上传的文件"]').type("target/raintest01.ab-1.0.3-SNAPSHOT.jar")
        cy.get('#pkgRepo.ant-select-selection-search-input').click()
        cy.get('._searchInputOption_cohr4_237').eq(2).click()
        cy.contains('确 定').click()
        cy.contains('保 存').click()
        cy.contains('流水线创建成功').should('contain','流水线创建成功')
    }
    )

    it('run pipeline', () =>{
        cy.get('._iconBtn_cohr4_61').eq(1).click()
        cy.get('#branch.ant-select-selection-search-input').click()
        cy.get('.ant-select-item-option-content').click()
        cy.contains('确 定').click()
        cy.contains('手动触发成功').should('contain','手动触发成功')

    
    }
    )


    it('delete repo', () =>{
        cy.contains('代码库').click()
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').eq(1).click()
        cy.get('[placeholder="请输入代码库名称确认"]').type('uicreatecoderepo')
        cy.get('.ant-btn.ant-btn-primary').eq(1).click()
        cy.contains('成功删除代码库').should('contain','成功删除代码库')
    }
    )
})