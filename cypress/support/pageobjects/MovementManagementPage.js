/// <reference types="Cypress" />

import MovementManagementElements from '../elements/MovementManagementElements'
const movementManagementElements = new MovementManagementElements
const url = Cypress.config("baseUrl")

class MovementManagementPage {
    
    homePage(){
        cy.visit(url)
        cy.get(movementManagementElements.inputEmail()).click().type("ton.teste@teste.com")
        cy.get(movementManagementElements.inputPassword()).click().type('abcd,1234')  
        cy.get(movementManagementElements.enterButton()).click()
        cy.get(movementManagementElements.alert()).contains('Bem vindo')       
    }

    newMovementMenu(){
        cy.get(movementManagementElements.newMovementMenu()).click()
    }

    fillValidFields(){
        cy.get(movementManagementElements.movementDate()).type('08/04/2023')
        cy.get(movementManagementElements.paymentDate()).type('15/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação valida')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()        
    }

    clickSave(){
        cy.get(movementManagementElements.enterButton()).click()
    }

    successMovementMessage(){
        cy.get(movementManagementElements.alert()).contains('Movimentação adicionada com sucesso!')
    }
    
    noDateFieldFill(){
        cy.get(movementManagementElements.description()).type('teste movimentação sem campo data')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
    }

    errorMovementMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação é obrigatório')
    }

    invalidDateFieldFill(){
        cy.get(movementManagementElements.movementDate()).type('20.04.2023')
        cy.get(movementManagementElements.paymentDate()).type('24/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação formato data invalida')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
        cy.get(movementManagementElements.enterButton()).click()
    }
   
    invalidDateMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação inválida (DD/MM/YYYY)')
    }

    futureDateFieldFill(){
        cy.get(movementManagementElements.movementDate()).type('15/04/2023')
        cy.get(movementManagementElements.paymentDate()).type('15/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação data futura')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
        cy.get(movementManagementElements.enterButton()).click()
    }    

    errorFutureDateMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação deve ser menor ou igual à data atual')
    }

    clickBillsMenu(){
        cy.get(movementManagementElements.billsMenu()).click()
    }

    billsList(){
        cy.get(movementManagementElements.listSubmenu()).click()
    }    

    deleteBillsMovement(){
        cy.get(movementManagementElements.deleteIcon()).click()
    }

    deleErrorMessage(){
        cy.get(movementManagementElements.alert()).contains('Conta em uso na movimentações')
    }        
      
    addSubmenu(){
        cy.get(movementManagementElements.addSubmenu()).click()
    }  

    addBills(){       
        
        cy.get(movementManagementElements.inputBillsName()).type('Conta Teste')
        cy.get(movementManagementElements.saveButton()).click()
    }

    errorAddMessage(){
        cy.get(movementManagementElements.alert()).contains('Já existe uma conta com esse nome!')
    }    
}
export default MovementManagementPage;