import pageObj from "../pageObj/google.js"
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou no google", () => {
  cy.visit("https://google.com/",{log:false});
});

When("eu pesquiso por Cypress", () => {
  cy.get(pageObj.descricaoPesquisa,{log:false})
    .type("cypress",{log:false})
  cy.contains(pageObj.botaoPesquisar,"Pesquisa Google",{log:false}).click({force:true,log:false})
});

When("eu pesquiso por Cypress API", () => {
  cy.get(pageObj.descricaoPesquisa,{log:false})
    .type("cypress API",{log:false})
  cy.contains(pageObj.botaoPesquisar,"Pesquisa Google",{log:false}).click({force:true,log:false})
});


When("eu entro no página Cypress API", () => {
  cy.contains('Module API').click({log:false})
});

Then("irá aparecer nos resultados o site oficial", () => {
  cy.get(pageObj.resultadosPesquisa,{log:false})
    .should('contain.html','https://www.cypress.io')
});

Then("mostrará a documentação", () => {
  cy.get('h1').should('contain.text','Module API')
  cy.url().should('equal','https://docs.cypress.io/guides/guides/module-api')
});