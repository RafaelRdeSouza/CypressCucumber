import pageObj from "../pageObj/login"
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que estou na tela de login", () => {
  cy.visit("/",{log:false});
});

Given("digito login {}", (login) => {
    cy.get(pageObj.email).type(login)
});

Given("senha {}", (senha) => {
    cy.get(pageObj.senha).type(senha)
});

When("eu clicar no botão para logar", () => {
    cy.get(pageObj.botaoLogin).click()
});

Then("tal mensagem {} será mostrada", (alerta) => {
    cy.get(pageObj.mensagem).should('contain.text',alerta)
});