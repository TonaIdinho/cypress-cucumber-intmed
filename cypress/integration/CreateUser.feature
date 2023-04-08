Feature: Sign Up

    Background: 
        Given que o usuario esteja na tela de login do site Seu Barriga

    Scenario: Cadastro com credenciais validas    
        When o usuario clicar na opçao Novo usuario no canto superior esquerdo
        And preencher todos os campos com credenciais validas
        And clicar no botao Cadastrar
        Then deve ser a exibida a mensagem Usuario inserido com sucesso

    Scenario: Cadastro com email já registrado    
        When clicar na opçao Novo usuário no canto superior esquerdo
        And preencher todos os campos
        And usar um email já registrado
        And clicar no botão Cadastrar
        Then deve ser exibida a mensagem Endereço de email já utilizado