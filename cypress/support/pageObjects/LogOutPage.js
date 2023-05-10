class LogOutPage
{

getProfileMenu()
{
    return  cy.get('.MuiToolbar-root > .MuiGrid-container > .MuiGrid-root > .MuiAvatar-root > .MuiAvatar-img')
    
}

getLogoutButton()
{
    return cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root > .MuiTypography-root')
}

}

export default LogOutPage;
