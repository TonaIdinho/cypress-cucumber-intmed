Feature: Manage Movement
    
    Background: 
        Given que o usuario esteja na tela inicial do site Seu Barriga

    Scenario: Criar movimentaçao valida    
        When clicar na opção "criar movimentação"
        And preencho todos os campos
        And clico em salvar
        Then deve ser exibida mensagem de sucesso ao adicionar movimentacao

    Scenario: Criar movimentaçao invalida    
        When clico no menu criar movimentacao
        And preencho campos deixando datas em branco
        And clico em salvar
        Then deve ser exibida mensagem de erro de campos obrigatorios

    Scenario: Criar movimentacao com formato de data incorreta 
        When clico no menu criar movimentacao
        And preencho campos deixando datas com formato incorreto    
        And clico em salvar   
        Then deve ser exibida mensagem de erro de data invalido

    Scenario: Criar movimentacao com data futura
        When clico no menu criar movimentacao
        And preencho campos deixando datas movitenção com data futura 
        And clico em salvar      
        Then deve ser exibida mensagem de erro de data futura

    Scenario: Exclusao de conta com movimentacao      
        When clico no menu contas
        And clico submenu Listar  
        And clico no icone de exclusão de uma conta com movimentacao
        Then deve ser exibida mensagem de erro ao tentar excluir conta  

    Scenario: Inserir conta com o mesmo nome
        When clico no menu contas
        And clico submenu Adicionar  
        And insiro nome de conta já existente
        Then deve ser exibida mensagem de erro ao tentar inserir conta com mesmo nome