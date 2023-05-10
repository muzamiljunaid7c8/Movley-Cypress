/// <reference types="Cypress" />
import 'cypress-file-upload'
import DataSet from '../../fixtures/FCRMData.json'
import LoginPage from "../../support/pageObjects/LoginPage"
import ProductPage from "../../support/pageObjects/ProductPage"
import LogOutPage from "../../support/pageObjects/LogOutPage"


describe('Movley Product Scenario (Sever Name)', function() 
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

it('Login',function() {

    const loginPage=new LoginPage()
   
    loginPage.getEmailField().type(DataSet.email)
    loginPage.getPassField().type(DataSet.pass)
    loginPage.getLoginButton().click()
    cy.wait(5000)

})

it('Create Product',function() {

  const productPage=new ProductPage()

  //Product Table Listing 
  productPage.productTableListing().contains(DataSet.pTabProductTitle)
  productPage.statusTableListing().contains(DataSet.pTabProductStatus)
  productPage.skuTableListing().contains(DataSet.pTabProductSKU)
  productPage.lastUpdateTableListing().contains(DataSet.pTabProductLastUpdate)
  productPage.productSortTableListing().should('be.visible').click()

  //Product Creation
  productPage.createProductButton().should('be.visible').click()
  productPage.popUpTitle().contains(DataSet.createProductPopUpTitle)
  productPage.productNameFeild().should('be.visible').type(DataSet.productName)
  productPage.factoryFeild().should('be.visible').click()
  productPage.factoryFeildListing().should('be.visible').click()
  productPage.riskToleranceFeild().should('be.visible').click()
  productPage.riskToleranceFeildListing().should('be.visible').click()
  productPage.skuFeild().should('be.visible').type(DataSet.sku)
  productPage.brandFeild().should('be.visible').type(DataSet.brand)
  productPage.familyFeild().should('be.visible').type(DataSet.family)
  productPage.typeFeild().should('be.visible').type(DataSet.type)
  productPage.supplierPriceFeild().should('be.visible').type(DataSet.supplierPrice)
  productPage.salePriceFeild().should('be.visible').type(DataSet.salePrice)
  productPage.saleChannelDropDown().should('be.visible').click()
  productPage.saleChannelDropDownSelection().should('be.visible').click()
  productPage.colorDropDown().should('be.visible').click()
  productPage.colorDropDownSelection().should('be.visible').click()
  productPage.materialDropDown().click()
  productPage.materialDropDownSelection().should('be.visible').click()
  productPage.descriptionFeild().should('be.visible').type(DataSet.description)

  //File Upload 
  const fixtureFile = 'P50Pro.docx';
  cy.get('input[accept="application/msword,.docx,.doc"]').attachFile(fixtureFile)
  productPage.popupCreateProductButton().should('be.visible').click({ force: true })
  cy.wait(3000)

})

it('Edit Product',function() {

  const productPage=new ProductPage()

  cy.wait(5000)
  //Searching the Product in the product Table
  cy.searchInInspectionTable(this.data.productName)
  productPage.product3Dot().click()
  productPage.product3DotMenu().click({force: true})

  //Editing the Product or Updating the Product
  productPage.editPopUpTitle().contains(DataSet.editProductPopUpTitle)
  productPage.productNameFeild().should('be.visible').type(DataSet.productName)
  productPage.factoryFeild().should('be.visible').click()
  productPage.factoryFeildListing().should('be.visible').click()
  productPage.riskToleranceFeild().should('be.visible').click()
  productPage.riskToleranceFeildListing().should('be.visible').click()
  productPage.skuFeild().should('be.visible').type(DataSet.sku)
  productPage.brandFeild().should('be.visible').type(DataSet.brand)
  productPage.familyFeild().should('be.visible').type(DataSet.family)
  productPage.typeFeild().should('be.visible').type(DataSet.type)
  productPage.supplierPriceFeild().should('be.visible').type(DataSet.supplierPrice)
  productPage.salePriceFeild().should('be.visible').type(DataSet.salePrice)
  productPage.saleChannelDropDown().should('be.visible').click()
  productPage.saleChannelDropDownSelection().should('be.visible').click()
  productPage.colorDropDown().should('be.visible').click()
  productPage.colorDropDownSelection().should('be.visible').click()
  productPage.materialDropDown().click()
  productPage.materialDropDownSelection().should('be.visible').click()
  productPage.descriptionFeild().should('be.visible').type(DataSet.description)
  
  //File Upload 
  const fixtureFileEdit = 'P50Pro.docx';
  cy.get('input[accept="application/msword,.docx,.doc"]').attachFile(fixtureFileEdit)
  productPage.popupCreateProductButton().should('be.visible').click({ force: true })
  cy.wait(3000)

}  )

it ('LogOut', function (){

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  logOutPage.getProfileMenu().click()
  logOutPage.getLogoutButton().click()
})

}})


