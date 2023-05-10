class MovleyU_CustomersPage
{

    getAddCustomerBtn()
    {
        return cy.xpath("//button[contains(text(),'Add Customer')]")
    }
    
    //Add Customer Pop Up Locators
    getManageCPopUpCompanyName()
    {
        return cy.xpath('//input[@name= "name"]')
    }
    
    getManageCPopUpUserFN()
    {
        return cy.xpath("//input[@name= 'firstName']")
    }
    
    getManageCPopUpUserLN()
    {
        return cy.xpath("//input[@name= 'lastName']")
    }
    
    getManageCPopUpUserEmailAddress()
    {
        return cy.xpath("//input[@name= 'email']")
    }
    
    getManageCPopUpSaveBtn()
    {
        return cy.xpath("//button[contains(text(), 'Save')]")
    }
    
    getManageCPopUpCancelBtn()
    {
        return cy.xpath("//button[contains(text(), 'Cancel')]")
    }
    
    getManageCPopUpCloseBtn()
    {
        return cy.xpath("//button[@aria-label='close']")
    }
    
    //Headings, Descriptions, Titles Etc

    getManageCPopUpHeadingText()
    {
        return cy.xpath("//h2[contains(text(), 'Manage Customer')]")
    }
    
    getManageCPopUpHeadingDescript()
    {
        return cy.xpath("//p[contains(text(), 'Enter company details to add/edit')]")
    }

    getManageCPopUpCompanyNameTitle()
    {
        return cy.xpath("//label [contains (text(), 'Company Name')]")
    }
    
    getManageCPopUpUserFNTitle()
    {
        return cy.xpath("//label [contains (text(), 'First Name')]")
    }
    
    getManageCPopUpUserLNTitle()
    {
        return cy.xpath("//label [contains (text(), 'Last Name')]")
    }
    
    getManageCPopUpUserEmailAddressTitle()
    {
        return cy.xpath("//label [contains (text(), 'Email Address')]")
    }

    

}

export default MovleyU_CustomersPage;
