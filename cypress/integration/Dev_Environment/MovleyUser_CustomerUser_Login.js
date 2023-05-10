/// <reference types="Cypress" />
import 'cypress-file-upload'
import 'cypress-iframe'
import DataSet from '../../fixtures/MovleyLoginScenarioData.json'
import LoginPage from "../../support/pageObjects/LoginPage"
import LogOutPage from "../../support/pageObjects/LogOutPage"


describe('Movley Login Page Test Suite (Sanity)', function() 
{
      beforeEach(function() {

        cy.fixture('MovleyLoginScenarioData').then(function(data)
        {
            this.data=data
        })   
      
      }) 
{

it('Verify that App Logo, Heading, Welcome message, Email, Password feild, forgot password? link and Login Button is visible',function() {

  cy.visit(Cypress.env('url_StagMovley'))
  
    const loginPage=new LoginPage()

    cy.xpath ('//img [@alt="logo"]').should('be.visible')
    cy.xpath('//p[contains(text(), "Log in to your account")]').should('be.visible')
    cy.xpath('//p[contains(text(), "Welcome back! Please enter your login details.")]').should('be.visible')
    cy.xpath('//p[contains(text(), "Email")]').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.xpath('//p[contains(text(), "Password")]').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible')
    cy.xpath('//button[contains(text(), "Login")]').should('be.visible')

})

it('Verify that user is able to enter valid data in Email and Password field ',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  const loginPage=new LoginPage()
 
  loginPage.getEmailField().type(DataSet.existingUseremail)
  cy.get('#email').should('have.value', DataSet.existingUseremail)
  loginPage.getPassField().type(DataSet.existingUserpass)
  cy.get('#password').should('have.value', DataSet.existingUserpass)

})

it('Verify that the login button is clickable ',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  const loginPage=new LoginPage()
 
  loginPage.getLoginButton().should('be.visible')
  loginPage.getLoginButton().click()
  cy.wait(5000)
  cy.xpath('//span[contains(text(),"Unauthorized")]').should('be.visible')

})

it('Verify that Existing user can successfully login into the system by clicking on login button upon providing valid email and password',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  const loginPage=new LoginPage()
 
  loginPage.getEmailField().type(DataSet.existingUseremail)
  loginPage.getPassField().type(DataSet.existingUserpass)
  loginPage.getLoginButton().click()

  //Logout
  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()

})

it('Verify clicking on Forgot passoword button should navigate user to Forgot password page',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
      cy.forceVisit(href)
      cy.wait(10000)
      
    })

    //Verifying the URL is opened
    cy.url().should('include', 'https://staging.movley.com/forgotPassword')

})

it('Verify Forgot passoword page is loaded with proper data (Movley Logo, Heading, Description Text, Email Address Feild and Reset Button) ()',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
      cy.forceVisit(href)
      cy.wait(10000)
    })

    cy.xpath ('//img [@alt="logo"]').should('be.visible')
    cy.xpath('//p[contains(text(), "Forgot Password?")]').should('be.visible')
    cy.xpath('//p[contains(text(), "Please enter your email address to reset your password")]').should('be.visible')
    cy.xpath('//p[contains(text(), "Email Address")]').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible')

})

it('Verify clicking on Back button at Forgot Password Page should navigate user back ()',function() {

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
      cy.forceVisit(href)
      cy.wait(10000)
    })

    cy.go('back')
    cy.wait(5000)
    cy.url().should('include', 'https://staging.movley.com/login')

})

//By Passing these Test Case due to technical Limitation , As Test Runner Left Pannel Disappear when routing to youmail mail box
/*
it.only ('Verify forgot password email is received at the email address which was written in forgot password page', function (){

  cy.visit(Cypress.env('url_StagMovley'))

  //Clicking on Forgot Password Link at Login Page
  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').click()
 
  cy.get('#email').should('be.visible').type(this.data.existingUseremail)
  cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible').click()
  cy.wait(10000)
  cy.xpath('//button[contains(text(), "Resend Email")]').should('be.visible')
 
  cy.forceVisit(Cypress.env('url_Yopmail'))
  
  cy.get('#login').type(this.data.existingUseremail)
  cy.log ('Rukoooooooooooooooooooooooooooooooooooooooo')
  cy.wait(5000)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").should('be.visible').click()
  cy.log ('Waitttttttttttttttttttttttttttttttttttttttt')
  cy.wait(5000)
  cy.get('#ifinbox').then($iframe => {

    const iframe = $iframe.contents()
    const myInput = iframe.find("body.bodyinbox.yscrollbar:nth-child(2) div.mctn div.m:nth-child(2) button.lm div.lmfd > span.lmf")
    cy.wrap(myInput).click()

})
 
  cy.get('#ifmail').then($iframe => {

  const iframe1 = $iframe.contents()
  const myInput2 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > span')
  cy.wrap(myInput2).should('have.value', 'Reset password')

})

}) 

it ('Verify forgot password link is working in forgot password email received, it should navigate user to create new password page', function (){

  cy.visit(Cypress.env('url_StagMovley'))
  cy.wait(10000)
  
  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
  })

  cy.get('#email').should('be.visible').type(this.data.existingUseremail)
  cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible').click()
  cy.forceVisit(Cypress.env('url_Yopmail'))

  cy.get('#login').type(this.data.existingUseremail)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").click()
  cy.get('#ifinbox').then($iframe => {

    const iframe = $iframe.contents()
    const myInput = iframe.find("body.bodyinbox.yscrollbar:nth-child(2) div.mctn div.m:nth-child(2) button.lm div.lmfd > span.lmf")
    cy.wrap(myInput).click()

})
 
  cy.get('#ifmail').then($iframe => {

  const iframe1 = $iframe.contents()
  const myInput1 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > a')
  cy.wrap(myInput1).should('have.attr', 'href')
  .then((href) => {
    cy.forceVisit(href)
    cy.wait (10000)
    
  })

})

  cy.get('#password').should('be,visible')
  cy.get('#confirmPassword').should('be,visible')
  cy.get('.MuiButtonBase-root').should('be,visible')

})

it ('Verify User is able to change or reset the password by the link given in Forgot Password email received', function (){

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
  })

  cy.get('#email').should('be.visible').type(this.data.existingUseremail)
  cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible').click()
  cy.visit(Cypress.env('url_Yopmail'))

  cy.get('#login').type(this.data.existingUseremail)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").click()
  cy.get('#ifinbox').then($iframe => {

    const iframe = $iframe.contents()
    const myInput = iframe.find("body.bodyinbox.yscrollbar:nth-child(2) div.mctn div.m:nth-child(2) button.lm div.lmfd > span.lmf")
    cy.wrap(myInput).click()

})
 
  cy.get('#ifmail').then($iframe => {

  const iframe1 = $iframe.contents()
  const myInput1 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > a')
  cy.wrap(myInput1).should('have.attr', 'href')
  .then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
    
  })

})

  cy.get('#password').type(this.data.existingUserNewpass)
  cy.get('#confirmPassword').type(this.data.existingUserNewpass)
  cy.get('.MuiButtonBase-root').click()
  cy.wait(2000)

  const loginPage=new LoginPage()
  //Login 
  loginPage.getEmailField().type(this.data.existingUseremail)
  loginPage.getPassField().type(this.data.existingUserNewpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)

})

it ('Verify user should not be able to login with old password after requesting a new password', function (){

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
  })

  cy.get('#email').should('be.visible').type(this.data.existingUseremail)
  cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible').click()
  cy.visit(Cypress.env('url_Yopmail'))

  cy.get('#login').type(this.data.existingUseremail)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").click()
  cy.get('#ifinbox').then($iframe => {

    const iframe = $iframe.contents()
    const myInput = iframe.find("body.bodyinbox.yscrollbar:nth-child(2) div.mctn div.m:nth-child(2) button.lm div.lmfd > span.lmf")
    cy.wrap(myInput).click()

})
 
  cy.get('#ifmail').then($iframe => {

  const iframe1 = $iframe.contents()
  const myInput1 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > a')
  cy.wrap(myInput1).should('have.attr', 'href')
  .then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
    
  })

})

  cy.get('#password').type(this.data.existingUserNewpass)
  cy.get('#confirmPassword').type(this.data.existingUserNewpass)
  cy.get('.MuiButtonBase-root').click()
  cy.wait(2000)

  const loginPage=new LoginPage()
  //Login 
  loginPage.getEmailField().type(this.data.existingUseremail)
  loginPage.getPassField().type(this.data.existingUserpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)
  cy.xpath('//span[contains(text(),"Unauthorized")]').should('be.visible')
  
})

it ('Verify user should be able to login successfully with newly generated password from email', function (){

  cy.visit(Cypress.env('url_StagMovley'))

  cy.xpath('//a[contains(text(), "Forgot Password?")]').should('be.visible').should('have.attr', 'href').then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
  })

  cy.get('#email').should('be.visible').type(this.data.existingUseremail)
  cy.xpath('//button[contains(text(), "Reset Password")]').should('be.visible').click()
  cy.visit(Cypress.env('url_Yopmail'))

  cy.get('#login').type(this.data.existingUseremail)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").click()
  cy.get('#ifinbox').then($iframe => {

    const iframe = $iframe.contents()
    const myInput = iframe.find("body.bodyinbox.yscrollbar:nth-child(2) div.mctn div.m:nth-child(2) button.lm div.lmfd > span.lmf")
    cy.wrap(myInput).click()

})
 
  cy.get('#ifmail').then($iframe => {

  const iframe1 = $iframe.contents()
  const myInput1 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > a')
  cy.wrap(myInput1).should('have.attr', 'href')
  .then((href) => {
    cy.forceVisit(href)
    cy.wait(10000)
    
  })

})

  cy.get('#password').type(this.data.existingUserNewpass)
  cy.get('#confirmPassword').type(this.data.existingUserNewpass)
  cy.get('.MuiButtonBase-root').click()
  cy.wait(2000)

  const loginPage=new LoginPage()
  //Login 
  loginPage.getEmailField().type(this.data.existingUseremail)
  loginPage.getPassField().type(this.data.existingUserNewpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)
  
})
*/
}})


