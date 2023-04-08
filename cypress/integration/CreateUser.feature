Feature: Sign Up

    Background: 
        Given que o usuário esteja na tela de login do site 'Seu Barriga'

    Scenario: Cadastro com credenciais válidas    
        When o usuario clicar na opçao Novo usuario no canto superior esquerdo
        And preencher todos os campos com credenciais validas
        And clicar no botao Cadastrar
        Then deve ser a exibida a mensagem Usuario inserido com sucesso