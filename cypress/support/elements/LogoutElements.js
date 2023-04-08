class LogoutElements {
    inputEmail = () => { return '#email' }  
    inputPassword = () => { return '#senha'}
    enterButton = () => {return '.btn'}    
    alert = () => {return '.alert'}

    exitButton = () => {return ':nth-child(5) > a'}
    emailTitle = () => {return ':nth-child(1) > label'}
}
export default LogoutElements;
