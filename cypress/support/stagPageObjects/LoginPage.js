class LoginPage
{

getEmailField()
{
    return cy.get('#email')
}

getPassField()
{
    return cy.get('#password')
}

getLoginButton()
{
    return cy.get('.MuiButtonBase-root')
}

}

export default LoginPage;
