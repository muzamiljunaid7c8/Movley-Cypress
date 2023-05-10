class InspectionListingPage
{

getInspectionTypeTitle()
{
    return cy.xpath('//h6[contains(text(),"Inspection Type")]')
}

getInspectionType()
{
    return cy.xpath('//h6[contains(text(),"Re-inspection")]')
}

getRequestedByTitle()
{
    return cy.xpath('//h6[contains(text(),"Requested By")]')
}

getRequestedByEmail()
{
    return cy.xpath('//h6[contains(text(),"nabeel@mavrictech.com")]')
}

getRequestedByName()
{
    return cy.xpath('//h6[contains(text(),"Nabeel")]')
}

getFactoryTitle()
{
    return cy.xpath('//h6[contains(text(),"Factory")]')
}

getFactory()
{
    return cy.xpath('//h6[contains(text(),"Huawei")]')
}

getDateGoodsWillBeReadyTitle()
{
    return cy.xpath('//h6[contains(text(),"Date Goods Will be Ready")]')
}

getDateGoodsWillBeReady()
{
    return cy.xpath('//h6[contains(text(),"2022-10-30")]')
}

getCurrentStageTitle()
{
    return cy.xpath('//h6[contains(text(),"Current Stage")]')
}

getCurrentStage()
{
    return cy.xpath('//h6[contains(text(),"pass")]')
}

getCurrentStageDescription()
{
    return cy.xpath('//h6[contains(text(),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]')
}

getUpdateInspectionStatus()
{
    return cy.xpath('//h6[contains(text(),"Update Inspection Status")]')
}

getCurrentStageDropDown()
{
    return cy.get('#inspectionStatus')
}
getCurrentStageDropDownValue(){return cy.get('')}

getUploadQDocsTitle()
{
    return cy.xpath('//h6[contains(text(),"Upload Questionnaire Document")]')
}

getUploadQDocs()
{
    return cy.xpath('//p[contains(text(),"Drag drop document here, or click to select files")]')
}

getDownLDocsTitle()
{
    return cy.xpath('//h6[contains(text(),"Upload Questionnaire Document")]')
}

getDownLDocsProductNameTitle()
{
    return cy.xpath('//p[contains(text(),"Product Name:")]')
}

getDownLDocsProductName()
{
    return cy.xpath('//p[contains(text(),"Product Document: ")]')
}

}

export default InspectionListingPage;