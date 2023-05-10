/// <reference types="Cypress" />
import 'cypress-iframe'
import 'cypress-file-upload'
import LoginPage from "../../support/pageObjects/LoginPage"
import LogOutPage from "../../support/pageObjects/LogOutPage"

var inspectionNumberHelping 

describe('As a Customer User (Product Sceanrio)', function() 
{
      beforeEach(function() {

        cy.fixture('Movley-CustomerUser-ProductData').then(function(data)
        {
            this.data=data
        })   
      
      })
{

it ('Verify that the Products page is displayed successfully after login', function (){

    cy.visit(Cypress.env('url_StagMovley')) 
    const loginPage=new LoginPage()
    
    loginPage.getEmailField().type(this.data.Customer_Useremail)
    loginPage.getPassField().type(this.data.Customer_Userpass)
    loginPage.getLoginButton().click()
    cy.wait(3000)

    cy.xpath('//div[@class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected css-9x2f9z"]').should('be.visible')

})

it('Verify Movely Logo is displayed ',function() {


    //Pre-Requsite are Loging into the system

        cy.xpath('//img[@alt="movley-logo-placeholder"]').should('be.visible')
  
})

it ('Verify Profile button is displayed and functional', function (){

     //Pre-Requsite are Loging into the system
    const logOutPage=new LogOutPage()

    cy.wait(5000)
    cy.get('.MuiAvatar-root').click({ force: true })
    cy.xpath("//p[contains(text(),'LOGOUT')]").should('be.visible')

})

it ('Verify Logout button is displayed and functional', function (){

     //Pre-Requsite are Loging into the system
    const logOutPage=new LogOutPage()

    cy.wait(5000)
    cy.get('.MuiAvatar-root').click({ force: true })
    cy.xpath("//p[contains(text(),'LOGOUT')]").click()
    
})

it ('Verify CREATE PRODUCT PopUp is displayed by clicking +CREATE PRODUCT button', function (){

  cy.visit(Cypress.env('url_StagMovley')) 
    
  const loginPage=new LoginPage()
  
  loginPage.getEmailField().type(this.data.Customer_Useremail)
  loginPage.getPassField().type(this.data.Customer_Userpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)

    //Product Creation Pop Up
     cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root').should('be.visible').click()
     cy.get('#customized-dialog-title').should('be.visible')
  
})

it ('Verify Create Product PopUp is displayed and have following on it', function (){
  
  /*
  •Title as "Create New Product"
  •Pop Up cross button
  •Product Name Feild with Tittle "Product Name"
  •Document Upload Feild with Doc Upload Icon and Text 
  •Cancel Button
  •Create Product Button
  */

   //Title as "Create New Product"
   cy.get('h2 ').should('be.visible')
   cy.get('h2').should('have.text', 'Create New Product')
   cy.log('Title is Verified : Create New Product')

   //Pop Up cross button
   cy.get('h2 button svg path ').should('be.visible')
   cy.log('Cross PopUp is available')

   //Product Name Feild with Tittle "Product Name"
   cy.get('div label').should('be.visible')
   cy.get('h2').should('have.text', 'Create New Product')
   cy.log('Product Name Feild Title is Verified : Product Name')

   //Document Upload Feild with Doc Upload Icon and Text
   //cy.get('div div:nth-child(2)  button span span').scrollIntoView().should('be.visible')
   //cy.log('Document Upload Button is visible')

   cy.get('div div:nth-child(2)  p span').should('have.text', 'Browse File ')
   cy.get('div div:nth-child(2)  p:nth-child(3)').should('have.text', 'Browse File or drag and drop to add product questionnaire PDF, DOC, DOCX (max. 50MB)')
   cy.log('Browse File Button is visible')
   cy.log('Browse File text is visible')

   //Cancel and Create Product Button 
   cy.xpath("//button[contains(text(),'Cancel')]").should('have.text', 'Cancel')
   cy.xpath("//button[contains(text(),'Create Product')]").should('have.text', 'Create ProductCreate Product')

})

 it ('Verify that Product is created with Valid Product Name and Docs Uploading file should be Docx', function (){

    //Pre-Requsite are Loging into the system
   

  //Product Creation
  cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root').should('be.visible').click()
  cy.get('#name').should('be.visible').type(this.data.ProductName)
   //File Upload 
   const fixtureFile = 'P50Pro.docx';
   cy.get('[alt="UploadIcon-button"]').selectFile(fixtureFile, { action: 'drag-drop' })
   cy.wait(2000)
   cy.xpath("//div[@class='MuiDialogActions-root MuiDialogActions-spacing css-14b29qc']//button[@type='button'][contains(text(),'Create Product')]").should('be.visible').click({ force: true })
   cy.wait(10000)

   //Searching a Product in Product Table
  cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductName))
  {
    cy.log('Test is Passed.')
     // cy.get('tr td:nth-child(1)').eq(index).click ({force: true})
  }
}) 

})

it ('Verify that Product is not created with Valid Product Name and Invalid Docs Uploading file should ', function (){

  //Pre-Requsite are Loging into the system

    //Product Creation Pop Up
     cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root').should('be.visible').click()
     cy.get('#customized-dialog-title').should('be.visible')
    cy.get('#name').should('be.visible').type(this.data.ProductName)
 //File Upload 
 const fixtureFile = 'debug.log';
 cy.get('[alt="UploadIcon-button"]').selectFile(fixtureFile, { action: 'drag-drop' })
 cy.wait(2000)
 cy.xpath("//div[@class='MuiDialogActions-root MuiDialogActions-spacing css-14b29qc']//button[@type='button'][contains(text(),'Create Product')]").should('be.visible').click({ force: true })
 cy.wait(3000)
 cy.xpath("//span[contains(text(),'Name and document are required')]").should('have.text', 'Name and document are required')

})

it ('Verify that Product is not created without entering the Required fields', function (){

  //Pre-Requsite are Loging into the system


    //Product Creation Pop Up
     cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root').should('be.visible').click()
     cy.get('#customized-dialog-title').should('be.visible')
    
 cy.xpath("//div[@class='MuiDialogActions-root MuiDialogActions-spacing css-14b29qc']//button[@type='button'][contains(text(),'Create Product')]").should('be.visible').click({ force: true })
 cy.wait(3000)
 cy.xpath("//span[contains(text(),'Name and document are required')]").should('have.text', 'Name and document are required')
 
})

it ('Verify that Product is not created by clicking on the CANCEL button', function (){

  //Pre-Requsite are Loging into the system

    //Product Creation
  cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root').should('be.visible').click()
  cy.get('#name').should('be.visible').type(this.data.ProductName)
   //File Upload 
   const fixtureFile = 'P50Pro.docx';
   cy.get('[alt="UploadIcon-button"]').selectFile(fixtureFile, { action: 'drag-drop' })
   cy.wait(2000)
   cy.xpath("//button[contains(text(),'Cancel')]").should('be.visible').click({ force: true })
   cy.wait(10000)

   //Searching a Product in Product Table
  cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductName))
  {
    cy.log('Test is Failed.')
     // cy.get('tr td:nth-child(1)').eq(index).click ({force: true})
  }
}) 

})

it ('Verify that Table have a header which consist of following columns :Product with Sorting Button, SharePoint URL',function() {

  //Pre-Requsite are Loging into the system
 
  cy.get('tr th').each(($e1, index, $list) => {
  const t= $e1.text()
  if (t == 'Product')
  {
    cy.log (t)
    cy.break
  }
  }) 
  
  cy.get('tr th').each(($e1, index, $list) => {
    const t= $e1.text()
    if (t == 'SharePoint URL')
    {
      cy.log (t)
      cy.break
    }
    }) 
  
    const logOutPage=new LogOutPage()
    cy.wait(10000)
    cy.get('.MuiAvatar-root').click({ force: true })
    cy.xpath("//p[contains(text(),'LOGOUT')]").click()
    
})


it ('Verify Table have a header which consist of following columns;', function (){
    //Adding Test 
cy.xpath("//button[contains(text(),'Add Test')]").click()
cy.get('#industry').click()

//Test Type Logic 
if (this.data.testType === 'Visual Inspection'){
 cy.xpath("//li[contains(text(), 'Visual Inspection')]").click()
}
else if (this.data.testType === 'Weights and Measurement'){
 cy.xpath("//li[contains(text(), 'Weights and Measurement')]").click()
}
else if (this.data.testType === 'Barcode'){
 cy.xpath("//li[contains(text(), 'Barcode')]").click()
}

cy.get('#name').type(this.data.testName)
cy.get('#instructions').type(this.data.testInstructions)
cy.get('#expectedResults').type(this.data.expectedResults)

  //Video File Upload 
  const fixtureVideoFile = 'pexels-thirdman-5538262.mp4';
  cy.get('[alt="UploadIcon-button"]').selectFile(fixtureVideoFile, { action: 'drag-drop' })
  cy.wait(10000)
  cy.xpath("//button[contains(text(), 'Save Test')]").click()
  cy.wait(30000)

  //Updating an existing Test

  cy.xpath("//p[contains(text(),'Visual Inspection')]").should('be.visible')
  cy.xpath("//span[contains(text(),'Required')]").should('be.visible')
  cy.xpath("//span[contains(text(),'Visual Inspection')]").should('be.visible')
 
  cy.xpath("//img[@alt='edit-image']").click() 
  cy.get('#name').type(this.data.testNameUpdate)
  cy.xpath("//button[contains(text(), 'Save Test')]").click()
  cy.wait(5000)

  //Calculating count of Test 
  let countOfElements = 0;
  cy.xpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1rjpx0t"]').then($elements => {
    countOfElements = $elements.length;
  });
  if (countOfElements === cy.xpath('//div[@class="MuiGrid-root MuiGrid-container css-1hhpvzq"]/div/div').text())
  {
    cy.log("Yes, the count is equal.")
  }
  

   //Book an Inspection
   cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiList-root > :nth-child(2) > .MuiTypography-root').click({force: true})
  // cy.xpath("//p[contains(text(),'Inspections')]").click()
   cy.xpath("//button[contains(text(),'Book New Inspection')]").click()
   cy.get('#products').click()

   //Selecting First Option in the List (Need to apply Each Logic if products are more than 1)
   cy.get('#products-option-0').click()
   cy.xpath("//input[@value= 'New Inspection']").click()
   cy.get('.css-skuxnc > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
   cy.selectDate(this.data.Inspection_ShippingDate)
   cy.wait(500)

   //Toogle button Logic 
   //cy.xpath("//span [@class = 'MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1p5ir8b']").click()
   cy.xpath("//input[@class = 'PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3']").click()
  
   //Selecting Date Range
   cy.get('.css-c3007u > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
   cy.selectDate(this.data.Inspection_PreStartDate)
   cy.wait(500)
   cy.get('.css-c3007u > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
   cy.selectDate(this.data.Inspection_PreEndDate)
   cy.wait(500)
   cy.get('#comment').type('Please make sure it should be done on mentioned dates.')
   cy.xpath("//button[contains(text(), 'Submit Inspection')]").click()
   cy.wait(20000)

})

it ('Verify that All created products are displayed on the Products main page', function (){

    //Pre-Requsite are Loging into the system
    cy.visit(Cypress.env('url_StagMovley')) 
    
    const loginPage=new LoginPage()
    
    loginPage.getEmailField().type(this.data.Customer_Useremail)
    loginPage.getPassField().type(this.data.Customer_Userpass)
    loginPage.getLoginButton().click()
    cy.wait(3000)

    let countOfProduct = 0 
    //Searching a Product in Product Table
    cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {

        countOfProduct = countOfProduct + 1
    const text=$e1.text()
    cy.log (text)

        if (index+1 === countOfProduct){
            cy.log('Test is Passed, Becasue the Count of Product ='+countOfProduct+'.')
        }
    })

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()

})

it ('MovleyUser_Login', function (){

  cy.visit(Cypress.env('url_MovleyAdmin')) 
  const loginPage=new LoginPage()
 
  loginPage.getEmailField().type(this.data.MovleyUser_email)
  loginPage.getPassField().type(this.data.MovleyUserpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)
})



it ('Movley User LogOut', function (){

  
})

it ('CustomerUser: Status Email Verification, Login and Status Verfication in Inspection Section and Apply CRUD Operation ', function (){

  cy.visit(Cypress.env('url_Yopmail'))

  cy.get('#login').type(this.data.emailAddress)
  cy.xpath("//i[@class= 'material-icons-outlined f36']").click()
  cy.wait(10000)

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
  })
})
  cy.wait(2000)

  //Login 
  const loginPage=new LoginPage()
  loginPage.getEmailField().type(this.data.emailAddress)
  loginPage.getPassField().type(this.data.CustomerUser_pass)
  loginPage.getLoginButton().click()
  cy.wait(3000)

  cy.xpath("//p[contains(text(),'Inspections')]").click()
  cy.wait(5000)

 //Searching Inspection in Inspection Table
 cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(inspectionNumberHelping))
  {
    cy.get('tr td:nth-child(3)').eq(index).should('have.text',this.data.InspectionStatus )
    cy.log ("Inspection Status is verified by Customer User.")
  }
}) 
})

it ('Customer User LogOut', function (){

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()
})

it ('CustomerUser:  Adding Test', function (){

  cy.visit(Cypress.env('url_MovleyAdmin')) 
  
  //Login 
  const loginPage=new LoginPage()
  loginPage.getEmailField().type('mj@yopmail.com')
  loginPage.getPassField().type('root1234')
  loginPage.getLoginButton().click()
  cy.wait(3000)

   //Searching a Product in Product Table
  cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes('Dragon Fruit'))
  {
      cy.get('tr td:nth-child(1)').eq(index).click ({force: true})
  }
}) 

  //Calculating count of Test 
  
  cy.xpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1rjpx0t"]').then($elements => {
     const countOfElements  = $elements.length;
    cy.log('Count of Test is:'+countOfElements )

    cy.xpath('//div[@class="MuiGrid-root MuiGrid-container css-1hhpvzq"]/div/div').then($elements => {
      const testcount = $elements.text();
      cy.log('Count of Actual Test is:'+testcount )

      if (countOfElements == testcount )
        {
           cy.log("Yes, the count is equal.")
          }
        })
      })

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiToolbar-root > .MuiGrid-container > .MuiGrid-root > .MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()

})

}})


