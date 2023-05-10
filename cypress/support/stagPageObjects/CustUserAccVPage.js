class CustUserAccVPage
{
    getPass()
    {
        return cy.get('#password')
    }

    getConfirmPass()
    {
        return cy.get('#confirmPassword')
    }
    
    getBtn()
    {
        return cy.get('.MuiButtonBase-root')
    }

}

export default CustUserAccVPage;
