Feature: Sign In

    Background: 
        Given que o usuário esteja na tela de login do site 'Seu Barriga' 

    Scenario: Login com credenciais validas      
        When preencher todos os campos com credenciais válidas
        And clicar no botão 'Entrar'
        Then deverá ser redirecionado para a tela inicial do site
        And ver uma mensagem de boas vindas com o nome do usuário

    Scenario: Login com credenciais invalidas        
        When preencher pelo menos um campo com dados inválidos
        And clicar no botão 'Entrar'
        Then o usuário deverá ser impedido de efetuar o login
        And deverá ser exibido a mensagem "Problemas com o login do usuário"

