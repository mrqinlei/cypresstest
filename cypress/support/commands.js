// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 Cypress.Commands.add('apilogin', (credential="amlhbmRhbmxpYW5nZGlhbjEyMzQ1Ng==",
 identifier="afei") => {
    cy.request({
    url:'v1/ezbase/iam/authenticate/login',
    method:'POST',
    headers: {
    "Content-Type": "application/json"
    },
    body: {
        "credential": credential,
        "identifier":identifier,
        "remember": "true",
        "authenticationType":"PASSWORD"
    }
    })
    .then((resp) => {
    // status code is 200
    expect(resp.status).to.be.equal(200)
    expect(resp.body).to.have.property('code',0) 
})
})
import 'cypress-file-upload';