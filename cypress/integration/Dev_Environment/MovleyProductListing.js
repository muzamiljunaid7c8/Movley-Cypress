/// <reference types="Cypress" />
import 'cypress-file-upload'
import DataSet from '../../fixtures/FCRMData.json'
import LoginPage from "../../support/pageObjects/LoginPage"

import LogOutPage from "../../support/pageObjects/LogOutPage"
import ProductListingPage from '../../support/pageObjects/ProductListingPage'

describe('Movley Product Listing (Sever Name)', function() 
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

it('Product Listing Screen',function() {

  const productListingPage=new ProductListingPage()
//Search in Product Table via Inspection ID

cy.searchProductTable(this.data.movleyProductName)
  
productListingPage.getProductTitle().contains('Awesome!').should('be.visible')
productListingPage.getProductMaterialTitle().contains('Product Material').should('be.visible')

productListingPage.getProductMaterial().contains('Metal, ').should('be.visible')
productListingPage.getProductColorsTitle().contains('Product Colors').should('be.visible')
//productListingPage.getProductColors().contains().should('be.visible')

productListingPage.getLogoPlacementTitle().contains('Logo Placement').should('be.visible')
productListingPage.getLogoPlacement().contains('Backside of watch face').should('be.visible')

productListingPage.getProductDimensionsTitle().contains('Product Dimensions').should('be.visible')
//productListingPage.getProductDimensions().contains('Wrist circumference: 5.9 – 7.1 inch; Watch case size:  1.3 – 1.7 inch').should('be.visible')

productListingPage.getProductSalesChannelTitle().contains('Product Sales Channel').should('be.visible')
productListingPage.getProductSalesChannel().contains('Amazon, ').should('be.visible')


productListingPage.getSupplierPriceTitle().contains('Supplier Price').should('be.visible')
productListingPage.getSupplierPrice().contains('1500 per unit').should('be.visible')


productListingPage.getTargetCustomerSellPriceTitle().contains('Target Customer Sell Price').should('be.visible')
productListingPage.getTargetCustomerSellPrice().contains('2000 per unit').should('be.visible')

productListingPage.getRiskToleranceTitle().contains('Risk Tolerance').should('be.visible')
productListingPage.getRiskTolerance().contains('Medium').should('be.visible')

cy.wait(3000)

})

it ('LogOut', function (){

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  logOutPage.getProfileMenu().click()
  logOutPage.getLogoutButton().click()
})


}})
