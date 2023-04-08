Feature: Sign In

    Background: 
        Given que o usuário esteja na tela de login do site Seu Barriga

    Scenario: Login com credenciais validas      
        When preencher todos os campos com credenciais validas
        And clicar no botao Entrar
        Then devera ser redirecionado para a tela inicial do site

    Scenario: Login com credenciais invalidas        
        When preencher pelo menos um campo com dados invalidos
        And clicar no botao Entrar
        Then o usuario devera ser impedido de efetuar o login


