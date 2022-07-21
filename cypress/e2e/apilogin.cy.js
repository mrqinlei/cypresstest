describe('ezOneUiTest',function(){
    it('apilogin ',function(){
        cy.request({
            url:'http://test321.ezone-test.work/v1/ezbase/iam/authenticate/login',
            method:'POST',
            // form:true,  // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "credential": "amlhbmRhbmxpYW5nZGlhbjEyMzQ1Ng==",
                "identifier": "afei",
                "remember": "true",
                "authenticationType":"PASSWORD"
            }
        })
        .then((response) => {
            // assert status code is 200
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('code',0) 
            // assert body contains success
          })

    })
})

