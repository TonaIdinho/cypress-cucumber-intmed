Feature: Sign Up

    Background: 
        Given que o usuario esteja na tela de login do site Seu Barriga

    Scenario: Cadastro com credenciais válidas    
        When o usuario clicar na opçao Novo usuario no canto superior esquerdo
        And preencher todos os campos com credencial valida
        And clicar no botao Cadastrar
        Then deve ser a exibida a mensagem Usuario inserido com sucesso