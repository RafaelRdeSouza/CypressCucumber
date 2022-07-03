Feature: teste

    teste
Scenario Outline: login
    Given que estou na tela de login 
    And digito login <login> 
    And senha <senha>
    When eu clicar no botão para logar
    Then tal mensagem <mensagem> será mostrada

Examples:
|login|senha|mensagem|
|email@email.com|0000|Invalid password|
|email@email.com|{backspace}|Password is required|
|{backspace}|9999 |An email address required|