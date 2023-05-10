class AdminCustomerListingPage
{


getCustomersSection ()
{
    return cy.get(':nth-child(3) > .MuiTypography-root')
}

getCusTHeadingComTitle ()
{
    return cy.xpath('//p[contains(text(),"Company")]')
}

getCusTHeadingLastUpdateTitle ()
{
    return cy.xpath('//p[contains(text(),"Last Update")]')
}

getCusTHeadingLastActivityDateTitle ()
{
    return cy.xpath('//p[contains(text(),"Last Activity Date")]')
}

getCusTHeadingLastLoginDateTitle ()
{
    return cy.xpath('//p[contains(text(),"Last Login Date")]')
}

getCusTHeadingTotalInspectionsTitle ()
{
    return cy.xpath('//p[contains(text(),"Total Inspections")]')
}

getCusTHeadingTotalRevenueTitle ()
{
    return cy.xpath('//p[contains(text(),"Total Revenue")]')
}

getCreateCustomerButton ()
{
    return cy.xpath('//button[contains(text(),"Create Customer")]')
}

getCreateCustomerPopUpHeading ()
{
    return cy.get('#customized-dialog-title')
}

getCreateCustomerPopUpHeadingDescription ()
{
    return cy.xpath('//p[contains(text(),"Enter company details to add/edit")]')
}

getCreateCustomerPopUpCompanyNameTitle ()
{
    return cy.xpath('//label[contains(text(),"Company Name")]')
}

getCreateCustomerPopUpCompanyName ()
{
    return cy.get('.MuiGrid-grid-md-9 > .MuiFormControl-root > .MuiInputBase-root > #name')
}

getCreateCustomerPopUpColorTitle ()
{
    return cy.xpath('//label[contains(text(),"Color")]')
}

getCreateCustomerPopUpColorDropDown ()
{
    return cy.get('#color')
}

getCreateCustomerPopUpColorDropDownGreen ()
{
    return cy.xpath('//*[@id="menu-color"]/div[3]/ul/li[3]')
}

getCreateCustomerPopUpUserTitle ()
{
    return cy.xpath('//p[contains(text(),"Users")]')
}

getCreateCustomerPopUpAddUserButtonTitle ()
{
    return cy.xpath('//button[contains(text(),"add User")]')
}

getCreateCustomerPopUpAddUserButton ()
{
    return cy.get('.css-1apqj3z > .MuiButtonBase-root')
}

getCreateCustomerPopUp1UserNameTitle ()
{
    //change the first child value to get the next row, change second child value to get next column 
    return cy.get('.css-v3asbo > :nth-child(1) > :nth-child(1) > .MuiFormLabel-root')
}

getCreateCustomerPopUp1UserName ()
{
   return cy.get('.css-v3asbo > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #name')
}

getCreateCustomerPopUp1UserEmailAddressTitle ()
{
    return cy.get('.css-v3asbo > :nth-child(1) > :nth-child(2) > .MuiFormLabel-root')
}

getCreateCustomerPopUp1UserEmailAddress ()
{
    return cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #email')
}

getCreateCustomerPopUp1UserTitleTitle ()
{
    return cy.get('.css-v3asbo > :nth-child(1) > :nth-child(3) > .MuiFormLabel-root')
}

getCreateCustomerPopUp1UserTitle ()
{
    return cy.get(':nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #title')
}

getCreateCustomerPopUp2UserNameTitle ()
{
    //change the first child value to get the next row, change second child value to get next column 
    return cy.get('.css-v3asbo > :nth-child(2) > :nth-child(1) > .MuiFormLabel-root')
}

getCreateCustomerPopUp2UserName ()
{
   return cy.get('.css-v3asbo > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #name')
}

getCreateCustomerPopUp2UserEmailAddressTitle ()
{
    return cy.get('.css-v3asbo > :nth-child(2) > :nth-child(2) > .MuiFormLabel-root')
}

getCreateCustomerPopUp2UserEmailAddress ()
{
    return cy.get(':nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #email')
}

getCreateCustomerPopUp2UserTitleTitle ()
{
    return cy.get('.css-v3asbo > :nth-child(2) > :nth-child(3) > .MuiFormLabel-root')
}

getCreateCustomerPopUp2UserTitle ()
{
    return cy.get(':nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #title')
}





getCreateCustomerPopUpSaveButton()
{ 
    return cy.get('.css-18trltr')
}

getCreateCustomerPopUpCancelButton()
{ 
    return cy.get('.css-hpbhyu')
}

getCreateCustomerPopUpCrossButton()
{ 
    return cy.get('[data-testid="CloseIcon"] > path')
}


}
export default AdminCustomerListingPage;
