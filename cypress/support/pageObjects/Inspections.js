class InspectionPage
{

getInspectionHome()
{
    return cy.get('.MuiList-root > :nth-child(2) > .MuiTypography-root')
}

createInspectionButton()
{
    return cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root')
}

inspectionIdTableListing ()
{
    return cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root')
}

inspectionStatusTableListing ()
{
    return cy.get('.MuiTableRow-root > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
}

lastUpdateTableListing()
{
    return cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
}

assignedUsersTableListing()
{
    return cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root')
}

inspectionSortTableListing()
{
    return cy.get('[data-testid="ArrowDownwardIcon"]')
}

//Create Inspection Dialogue
popUpTitle()
{
    return cy.get('#customized-dialog-title')
}

factoryDropDown()
{
    return cy.get('#factory')
}

//DropDown Help https://www.youtube.com/watch?v=zw99PZalGqA
factoryDropDownListing()
{ //Selecting Second Index Value
    return cy.get('.MuiList-root > [tabindex="-1"]')
}

productsDropwDwon()
{
    return cy.get('#products')
}

productsDropDownListing()
{ //Selecting First Index Value
    return cy.get('#products-option-0')
}

inspectionTypeDropDown()
{ 
    return cy.get('#inspectionType')
}

inspectionTypeDropDownListing()
{ 
    //Selecting the first index of the drodown
    return cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]')
}

shipingDateCalander()
{ 
    return cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"] > path')
}

shipingDateCalanderDateSelection()
{ 
    //selecting 5th row and 4th index value which is 28/9/2022
    return cy.get('#\:r6\:')
}

dateGoodsWillBeReadyCalander()
{ 
    return cy.get('#\:r7\:')
}

dateGoodsWillBeReadyCalanderDateSelection()
{ 
     //selecting 5th row and 4th index value which is 28/9/2022
     return cy.get(':nth-child(5) > :nth-child(4)')
}

preferredInspectionDate()
{ 
    return cy.get('#\:r8\:')
}

preferredInspectionDateDateSelection()
{ 
    //selecting 5th row and 4th index value which is 28/9/2022
    return cy.get(':nth-child(5) > :nth-child(4)')
}

assignedUsersToTheInspection()
{ 
    return cy.get('#assignedUsers')
}

assignedUsersToTheInspectionListSelection()
{ 
    //Selecting First Index 
    return cy.get('#assignedUsers-option-0')
}

popupCreateInspectionButton()
{ 
    return cy.get('.css-18trltr')
}

popupCancelButton()
{ 
    return cy.get('.css-18trltr')
}

popupCrossButton()
{ 
    return cy.get('[data-testid="CloseIcon"] > path')
}

naviToInsFromSideMenu()
{ 
    return cy.xpath('//p[contains(text(),"Inspections")]')
}
EditShipingDate()
{ 
    return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
}

EditShipingCalander()
{ 
    return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
}

EditDateGoodsCalander()
{ 
    return cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
}

EditPreferInsDateCalander()
{ 
    return cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
}

firstCol()
{ 
    return cy.get('tr td:nth-child(1)')
}

inspection3Dot()
{ 
    return cy.get('[data-testid="MoreVertIcon"]')
}

inspection3DotMenu()
{ 
    return cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root > .MuiTypography-root')
}



}

export default InspectionPage;
