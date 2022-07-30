const { getCypressElementCoordinates } = require("cypress-real-events/getCypressElementCoordinates")

describe('ezOneUiTest', () => {
    beforeEach( function() {
        cy.apilogin()
    })

    it('create test spcace', () =>{
        cy.visit('/ezTest')
        cy.contains('测试管理').click()
        cy.contains('新 建').click()
        cy.get('#name.ant-input').type('uicreatetestspace')
        cy.get('#idAlias.ant-input').type('uicreatetest')
        cy.contains('确 定').click()
        cy.contains('创建成功').should('contain','创建成功')
    }
    )
    it('create test case', () =>{
        cy.contains('测试管理').click()
        cy.contains('用例管理').click()
        cy.contains('新 建').click()
        cy.get('#name.ant-input').type('uicreatetestcase')
        cy.contains('新增步骤').click()
        cy.get('.ProseMirror.editor').eq(1).type('输入步骤一输入步骤一输入步骤一输入步骤一输入步骤一')
        cy.get('.ProseMirror.editor').eq(2).type('输入预计结果一')
        cy.contains('确 定').click()
    }
    )
    it('test case operation', () =>{
        cy.contains('测试管理').click()
        cy.contains('用例管理').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/span[3]').click()
        cy.contains('复制用例成功').should('contain','复制用例成功')
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]/span[4]').click()
        cy.contains('确 定').click()
        cy.contains('删除成功').should('contain','删除成功')
    }
    )
    it('test api', () =>{
        cy.contains('测试管理').click()
        cy.contains('接口管理').click()
        cy.contains('新 建').click()
        cy.get('#name.ant-input').type('uicreatetestapi')
        cy.get('#detail_request_url.ant-input').type('www.baidu.com')
        cy.contains('确 定').click()
        cy.contains('创建接口成功').should('contain','创建接口成功')

    }
    )
    it('test api operation', () =>{
        cy.contains('测试管理').click()
        cy.contains('接口管理').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/span[2]').click()
        cy.contains('复制接口成功').should('contain','复制接口成功')
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/span[3]').click()
        cy.contains('确 认').click()
        // cy.contains('删除接口成功').should('contain','删除接口成功')
    }
    )
    it('create test suite', () =>{
        cy.contains('测试管理').click()
        cy.contains('测试套件').click()
        cy.contains('新 建').click()
        cy.get('#name.ant-input').type('uicreatetestsuite')
        cy.contains('编辑用例列表').click()
        cy.get('.ant-checkbox-input').eq(1).click()
        cy.get('.ant-btn.ant-btn-primary').eq(2).click()
        cy.contains('确 定').click()
        cy.contains('添加成功').should('contain','添加成功')
    }
    )
    it('create test suite record', () =>{
        cy.contains('测试管理').click()
        cy.contains('测试套件').click()
        cy.contains('uicreatetestspace').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[1]').click()
        cy.contains('已创建套件uicreatetestsuite的测试记录').should('contain','已创建套件uicreatetestsuite的测试记录')
        cy.get('.ant-select-selection-item').click()
        cy.contains('成功').click()
        cy.contains('保存成功').should('contain','保存成功')
        cy.contains('同 步').click()
        cy.get('.anticon.anticon-close').eq(0).click()

    }
    )

    it('test space delete', () =>{
        cy.contains('测试管理').click()
        cy.contains('设置').click()
        cy.contains('运维操作').click()
        cy.get('button.ant-btn.ant-btn-danger').click()
        cy.contains('确认删除').click()


    }
    )
    
})