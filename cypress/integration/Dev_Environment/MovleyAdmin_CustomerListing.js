/// <reference types="Cypress" />
import 'cypress-file-upload'
import DataSet from '../../fixtures/FCRMData.json'
import LoginPage from "../../support/pageObjects/LoginPage"
import AdminCustomerListingPage from "../../support/pageObjects/AdminCustomerListingPage"
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

it('Create Customers',function() {

        const adminCustomerListingPage=new AdminCustomerListingPage()
    
  
        adminCustomerListingPage.getCustomersSection().click({ force: true })
        cy.wait(10000)
    
    
    adminCustomerListingPage.getCusTHeadingComTitle().contains(this.data.CustomerListingTableCompanyTitle)
    adminCustomerListingPage.getCusTHeadingLastUpdateTitle().contains (this.data.CustomerListingTableLastUpdateTitle)
    adminCustomerListingPage.getCusTHeadingLastActivityDateTitle().contains (this.data.CustomerListingTableLastActivityDateTitle)
    adminCustomerListingPage.getCusTHeadingLastLoginDateTitle().contains (this.data.CustomerListingTableLastLoginDateTitle)
    adminCustomerListingPage.getCusTHeadingTotalInspectionsTitle().contains (this.data.CustomerListingTableTotalInspectionsTitle)
    adminCustomerListingPage.getCusTHeadingTotalRevenueTitle().contains (this.data.CustomerListingTableTotalRevenueTitle)

    adminCustomerListingPage.getCreateCustomerButton().click()
    adminCustomerListingPage.getCreateCustomerPopUpHeading().contains(this.data.CustomerPopUpTitle)
    adminCustomerListingPage.getCreateCustomerPopUpHeadingDescription().contains(this.data.CustomerPopUpDescriptionTitle)
   adminCustomerListingPage.getCreateCustomerPopUpCompanyNameTitle().contains(this.data.CustomerPopUpCompanyNameFeildTitle)
  adminCustomerListingPage.getCreateCustomerPopUpCompanyName().type(this.data.CustomerPopUpCompanyName)
  adminCustomerListingPage.getCreateCustomerPopUpColorTitle().contains(this.data.CustomerPopUpColorFeildTitle)
  adminCustomerListingPage.getCreateCustomerPopUpColorDropDown().click({ force: true })
  adminCustomerListingPage.getCreateCustomerPopUpColorDropDownGreen().click({ force: true })
  
  adminCustomerListingPage.getCreateCustomerPopUpAddUserButton().click()
  //First User
  adminCustomerListingPage.getCreateCustomerPopUp1UserNameTitle().contains(this.data.CustomerPopUpUserNameFeildTitle)
  adminCustomerListingPage.getCreateCustomerPopUp1UserName().type(this.data.CustomerPopUpUserName)
  adminCustomerListingPage.getCreateCustomerPopUp1UserEmailAddressTitle().contains(this.data.CustomerPopUpUserEmailFeildTitle)
  adminCustomerListingPage.getCreateCustomerPopUp1UserEmailAddress().type(this.data.CustomerPopUpUserEmailFeild)
  adminCustomerListingPage.getCreateCustomerPopUp1UserTitleTitle().contains(this.data.CustomerPopUpUserTitleFeildTitle)
  adminCustomerListingPage.getCreateCustomerPopUp1UserTitle().type(this.data.CustomerPopUpUserTitleFeild)

  //Second User
  
  adminCustomerListingPage.getCreateCustomerPopUp2UserName().type(this.data.CustomerPopUpUser2Name)
  adminCustomerListingPage.getCreateCustomerPopUp2UserEmailAddress().type(this.data.CustomerPopUpUserEmailFeild)
  adminCustomerListingPage.getCreateCustomerPopUp2UserTitle().type(this.data.CustomerPopUpUser2TitleFeild)
  //adminCustomerListingPage.getCreateCustomerPopUpSaveButton().click({ force: true })
  adminCustomerListingPage.getCreateCustomerPopUpCrossButton().click()
  cy.wait(5000)
  
  //Dynamic Search
  //This need a Column Name from Fixture file as "columnInCustomersTable"
  // Search function will compare the actual key which we have to find out in the table
  let col
  const tcn = ['Company', 'Last Update', 'Last Activity Date', 'Last Login Date', 'Total Inspections', 'Total Revenue' ]
  
  cy.xpath('//tr[@class ="MuiTableRow-root MuiTableRow-head css-1d7zxr5"]/th').each(($e1, index, $list) => {
  const tableColumnName = $e1.text()
  for (let i=0; i<tcn.length; i++){
    if (tcn[i] === this.data.columnInCustomersTable){
      col= i+1
        cy.searchInCustomerTable(this.data.searchInCustomersTable, col)
        return false
    }}}) 





}  )

it ('LogOut', function (){

    const logOutPage=new LogOutPage()

    cy.wait(10000)
    logOutPage.getProfileMenu().click()
    logOutPage.getLogoutButton().click()
})

}})


