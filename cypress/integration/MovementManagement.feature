Feature: Manage Movement
    
    Background: 
        Given que o usuario esteja na tela inicial do site Seu Barriga

    Scenario: Criar movimentaçao valida    
        When clicar na opçao Criar Movimentação
        And preencher todos os campos
        And clicar em salvar
        Then deve ser exibida mensagem de sucesso ao adicionar movimentacao

    Scenario: Criar movimentaçao invalida    
        When clicar no menu Criar Movimentaçao
        And preencher campos deixando datas em branco
        And clicar em salvar
        Then deve ser exibida mensagem de erro de campos obrigatorios

    Scenario: Criar movimentaçao com formato de data incorreta 
        When clicar no menu Criar Movimentaçao
        And preencher campos deixando datas com formato incorreto    
        And clicar em salvar   
        Then deve ser exibida mensagem de erro de data invalido

    Scenario: Criar Movimentaçao com data futura
        When clicar no menu Criar Movimentaçao
        And preencher campos deixando datas movitenção com data futura 
        And clicar em salvar      
        Then deve ser exibida mensagem de erro de data futura

    Scenario: Exclusao de conta com movimentacao      
        When clicar na opçao Contas
        And clicar submenu Listar  
        And clicar no icone de exclusão de uma conta com movimentacao
        Then deve ser exibida mensagem de erro ao tentar excluir conta  

    Scenario: Inserir conta com o mesmo nome
        When clicar no na opção Contas
        And clicar no submenu Adicionar  
        And salvar um nome de conta ja existente
        Then deverá ser exibida uma mensagem de erro