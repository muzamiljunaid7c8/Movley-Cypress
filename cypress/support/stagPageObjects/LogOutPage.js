class LogOutPage
{
    getProfileMenu()
    {
        return  cy.get('.MuiAvatar-root')  
    }
    
    getLogoutButton()
    {
        return cy.xpath("//p[contains(text(),'LOGOUT')]")
    }

}

export default LogOutPage;
