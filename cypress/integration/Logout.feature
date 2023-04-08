Feature: Logout

    Scenario: Encerrar sessao iniciada  
        Given que o usuario esteja logado no site Seu Barriga
        When clicar no botao Sair na parte superior da tela
        Then o usuario devera ser redirecionado deslogado para a tela de login do site
