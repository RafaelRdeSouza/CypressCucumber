#language:pt

Funcionalidade: Pesquisando no google

  Contexto:teste
    Dado que estou no google

    Cenário: Exemplo 1
      Quando eu pesquiso por Cypress
      Então irá aparecer nos resultados o site oficial

    Cenário: Exemplo 2
      Quando eu pesquiso por Cypress API
      E eu entro no página Cypress API
      Então mostrará a documentação