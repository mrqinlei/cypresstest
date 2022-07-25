describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('check scan rule', () =>{
        cy.visit('/ezScan/rules')
        cy.contains('代码扫描').click()
        cy.contains('扫描规则').click()
        cy.contains('Java').click()
        cy.contains('规则详情').should('contain','规则详情')
        cy.get('.anticon.anticon-close').click()
    }
    )

    it('check ruleset', () =>{
        cy.contains('规则集').click()
        cy.contains('默认全量规则集').click()
        cy.contains('查看规则集').should('contain','查看规则集')
        cy.get('.ant-drawer-close').click()
    }
    )

    it('ruleset opearion', () =>{
        // cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[3]').click()     
        /**
         暂时注释，下载后wait page有问题 */ 
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[2]').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/span[4]').click()
        cy.contains('确 定').click()
    }
    )

    it('create ruleset', () =>{
        cy.contains('新 建').click()
        cy.contains('直接新建').click()
        cy.get('#rulesetName.ant-input').type("uitestcreate")
        cy.get('#rulesetDesc.ant-input').type('uitestcreate')
        cy.get('.ant-checkbox-input').eq(0).click()
        cy.contains('确 定').click()
        cy.contains('uitestcreate').should('contain','uitestcreate')
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/span[4]').click()
        cy.contains('确 定').click()
        cy.contains('uitestcreate删除成功').should('contain','删除成功')
    }
    )
    
})