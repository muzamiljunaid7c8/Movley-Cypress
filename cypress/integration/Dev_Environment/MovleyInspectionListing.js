/// <reference types="Cypress" />
import 'cypress-file-upload'
import DataSet from '../../fixtures/FCRMData.json'
import LoginPage from "../../support/pageObjects/LoginPage"
import Inspections from "../../support/pageObjects/Inspections"
import LogOutPage from "../../support/pageObjects/LogOutPage"
import InspectionListingPage from '../../support/pageObjects/InspectionListingPage'



describe('Movley Inspection Listing (Sever Name)', function() 
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
    
    it('Inspection Listing Screen',function() {
    
        const inspectionPage=new Inspections()
        const inspectionListingPage=new InspectionListingPage()
    
        inspectionPage.naviToInsFromSideMenu().click()
        cy.wait(2000)
    
    //Search in Inspection Table via Inspection ID
    
      cy.searchInInspectionTable(this.data.inspectionIDTesting)
      
      inspectionListingPage.getInspectionTypeTitle().contains(this.data.InspectionListingInspectionTypeTitle).should('be.visible')
      inspectionListingPage.getInspectionType().contains(this.data.InspectionListingInspectionType).should('be.visible')
      
      inspectionListingPage.getRequestedByTitle().contains(this.data.InspectionListingRequestedByTitle).should('be.visible')
      inspectionListingPage.getRequestedByEmail().contains(this.data.InspectionListingRequestedByEmail).should('be.visible')
      inspectionListingPage.getRequestedByName().contains(this.data.InspectionListingRequestedByName).should('be.visible')
      
      inspectionListingPage.getFactoryTitle().contains(this.data.InspectionListingFactoryTitle).should('be.visible')
      inspectionListingPage.getFactory().contains(this.data.InspectionListingFactory).should('be.visible')
    
      inspectionListingPage.getDateGoodsWillBeReadyTitle().contains(this.data.InspectionListingDateGoodsWillbeReadyTitle).should('be.visible')
      inspectionListingPage.getDateGoodsWillBeReady().contains(this.data.InspectionListingDateGoodsWillbeReady).should('be.visible')
    
      inspectionListingPage.getCurrentStageTitle().contains(this.data.InspectionListingCurrentStageTitle).should('be.visible')
      inspectionListingPage.getCurrentStage().contains(this.data.InspectionListingCurrentStage).should('be.visible')
      inspectionListingPage.getCurrentStageDescription().contains(this.data.InspectionListingCurrentStageDescription).should('be.visible')

      inspectionListingPage.getUpdateInspectionStatus().contains(this.data.InspectionListingUpdateInspectionStatus).should('be.visible')
      inspectionListingPage.getCurrentStageDropDown().contains(this.data.InspectionListinggetCurrentStageDropDown).should('be.visible')
      
    
      inspectionListingPage.getUploadQDocsTitle().contains(this.data.InspectionListingUploadQDocsTitle).should('be.visible')
      inspectionListingPage.getUploadQDocs().contains(this.data.InspectionListingUploadQDocs).should('be.visible')
    
      //inspectionListingPage.getDownLDocsTitle().contains(this.data.InspectionListingDownLDocsTitle).should('be.visible')
      //inspectionListingPage.getDownLDocsProductNameTitle().contains(this.data.InspectionListingDownLDocsProductNameTitle).should('be.visible')
     
     // inspectionListingPage.getDownLDocsProductName().contains(this.data.InspectionListingDownLDocsProductName).should('be.visible')
      cy.wait(3000)
      
    })
    
    it ('LogOut', function (){
    
        const logOutPage=new LogOutPage()
    
        cy.wait(10000)
        logOutPage.getProfileMenu().click()
        logOutPage.getLogoutButton().click()
    })


}})


