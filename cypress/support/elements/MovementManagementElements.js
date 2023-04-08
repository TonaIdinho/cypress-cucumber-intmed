class MovementManagementElements {
    inputEmail = () => { return '#email' }  
    inputPassword = () => { return '#senha'}
    enterButton = () => {return '.btn'}  
    
    newMovementMenu = () => {return ':nth-child(3) > a'}
    movementDate = () => {return '#data_transacao'}
    paymentDate = () => {return '#data_pagamento'}
    description = () => {return '#descricao'}
    interested = () => {return '#interessado'}
    price = () => {return '#valor'}
    paidCheckbox = () => {return '#status_pago'}

    alert = () => {return '.alert'}    

    billsMenu = () => { return '.dropdown-toggle' }
    listSubmenu = () => {return '.dropdown-menu > :nth-child(2) > a'}     
    billsList = () => {return '#tabelaContas'}
    deleteIcon = () => {return '[href="/removerConta?id=1695341"] > .glyphicon'}

    addSubmenu = () => {return '.dropdown-menu > :nth-child(1) > a'}
    inputBillsName = () => {return '#nome'}
    saveButton = () => {return '.btn'}
} 
export default MovementManagementElements;
