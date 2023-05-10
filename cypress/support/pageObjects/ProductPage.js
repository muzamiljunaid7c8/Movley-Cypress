class ProductPage
{

createProductButton()
{
    return cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root')
}

productTableListing ()
{
    return cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root')
}

statusTableListing ()
{
    return cy.get('.MuiTableRow-root > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
}

skuTableListing()
{
    return cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
}

lastUpdateTableListing()
{
    return cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root')
}

productSortTableListing()
{
    return cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > [data-testid="ArrowDownwardIcon"]')
}

//Create Product Dialogue
popUpTitle()
{
    return cy.get('#customized-dialog-title')
}

productNameFeild()
{
    return cy.get('#name')
}

factoryFeild()
{
    return cy.get('#industry')
}

factoryFeildListing()
{ //Selecting Second Index Value
    return cy.get('.MuiList-root > [tabindex="-1"]')
}

riskToleranceFeild()
{ 
    return cy.get('#riskTolerance')
}

riskToleranceFeildListing()
{ //Selecting Index of Listing
    return cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]')
}

skuFeild()
{ 
    return cy.get('#sku')
}

brandFeild()
{ 
    return cy.get('#brand')
}

familyFeild()
{ 
    return cy.get('#family')
}

typeFeild()
{ 
    return cy.get('#type')
}

supplierPriceFeild()
{ 
    return cy.get('#supplierPrice')
}

salePriceFeild()
{ 
    return cy.get('#sellingPrice')
}

//DropDwons

saleChannelDropDown()
{ 
    return cy.get('#saleChannels')
}

saleChannelDropDownSelection()
{ 
    return cy.get('#saleChannels-option-0')
}

colorDropDown()
{ 
    return cy.get('#colors')
}

colorDropDownSelection()
{ 
    return cy.get('#colors-option-0')
}

materialDropDown()
{ 
    return cy.get('#material')
}

materialDropDownSelection()
{ 
    return cy.get('#material-option-0')
}

descriptionFeild()
{ 
    return cy.get('#description')
}

popupCreateProductButton()
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

product3Dot()
{ 
    return cy.get('[data-testid="MoreVertIcon"]')
}

product3DotMenu()
{ 
    return cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root > .MuiTypography-root')
}

editPopUpTitle()
{ 
    return cy.get('#customized-dialog-title')
}
}
export default ProductPage;
