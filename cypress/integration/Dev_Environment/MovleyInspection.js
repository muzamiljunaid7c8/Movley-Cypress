/// <reference types="Cypress" />
import 'cypress-file-upload'
import DataSet from '../../fixtures/FCRMData.json'
import LoginPage from "../../support/pageObjects/LoginPage"
import Inspections from "../../support/pageObjects/Inspections"
import LogOutPage from "../../support/pageObjects/LogOutPage"


describe('Movley Inspection Sceanrio (Sever Name)', function() 
{
      beforeEach(function() {

        cy.fixture('FCRMData').then(function(data)
        {
            this.data=data
        })   
      
      }) 

    // runs once before all tests in the block
      before(function() {

        cy.visit(Cypress.env('url')) 

           })
{

it ('Login', function (){

    const loginPage=new LoginPage()
    //Login 
    loginPage.getEmailField().type(DataSet.email)
    loginPage.getPassField().type(DataSet.pass)
    loginPage.getLoginButton().click()
    cy.wait(3000)
})

it('Book Inspection',function() {

        const inspectionPage=new Inspections()
    
    inspectionPage.getInspectionHome().click({ force: true })
    cy.wait(20000)
    
    //Inspection Table Listing 
    inspectionPage.inspectionIdTableListing().contains(DataSet.InspectionIDText)
    inspectionPage.inspectionStatusTableListing().contains(DataSet.InspectionStatusText)
    inspectionPage.lastUpdateTableListing().contains(DataSet.InspectionLastUpdateText)
    inspectionPage.assignedUsersTableListing().contains(DataSet.InspectionAssignedUsersText)
    inspectionPage.inspectionSortTableListing().should('be.visible').click()
    
    //Inspection Creation
    inspectionPage.createInspectionButton().should('be.visible').click()
    inspectionPage.popUpTitle().contains(DataSet.TitleBookNewInspection)
    inspectionPage.factoryDropDown().should('be.visible').click()
    inspectionPage.factoryDropDownListing().should('be.visible').click()
    inspectionPage.productsDropwDwon().should('be.visible').click()
    inspectionPage.productsDropDownListing().should('be.visible').click()
    inspectionPage.inspectionTypeDropDown().should('be.visible').click()
    inspectionPage.inspectionTypeDropDownListing().should('be.visible').click()
    cy.wait(500)
    cy.contains(DataSet.scrollingtext).scrollIntoView()   
    inspectionPage.assignedUsersToTheInspection().should('be.visible').click()
    inspectionPage.assignedUsersToTheInspectionListSelection().should('be.visible').click()
    inspectionPage.popupCreateInspectionButton().click()
    cy.wait(3000)
    
    }  )

it('Edit Inspection',function() {

    const inspectionPage=new Inspections()

    inspectionPage.naviToInsFromSideMenu().click()
    cy.wait(2000)

//Search in Inspection Table via Inspection ID

/*
    //" inspectionPage.firstCol() " is returning the first column of the table 
    inspectionPage.firstCol().each(($e1, index, $list) => {
    const text=$e1.text()
    cy.log (text)
    if(text.includes("0F21E60F"))
    {
        inspectionPage.firstCol().eq(index).click ({force: true})
    }
}) */
  cy.searchInInspectionTable(this.data.inspectionID)
  
inspectionPage.inspection3Dot().click()
inspectionPage.inspection3DotMenu().click({force: true})

//Inspection Update
inspectionPage.popUpTitle().contains(DataSet.TitleEditInspection)
inspectionPage.factoryDropDown().should('be.visible').click()
inspectionPage.factoryDropDownListing().should('be.visible').click()
inspectionPage.inspectionTypeDropDown().should('be.visible').click()
inspectionPage.inspectionTypeDropDownListing().should('be.visible').click()
inspectionPage.EditShipingCalander().click()

//Date Selecting 
//Helping fucntion defined in command.js
cy.selectDate(this.data.Date)
cy.wait(500)
inspectionPage.EditDateGoodsCalander().click()
cy.selectDate(this.data.Date)
cy.wait(500)
inspectionPage.EditPreferInsDateCalander().click()
cy.selectDate(this.data.Date)
cy.wait(500)
inspectionPage.popupCreateInspectionButton().click()
cy.wait(3000)

})

it ('LogOut', function (){

    const logOutPage=new LogOutPage()

    cy.wait(10000)
    logOutPage.getProfileMenu().click()
    logOutPage.getLogoutButton().click()
})

}})


