/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable quotes */
/// <reference types="Cypress" />
import 'cypress-iframe'
import 'cypress-file-upload'
import LoginPage from "../../support/stagPageObjects/LoginPage"
import LogOutPage from "../../support/stagPageObjects/LogOutPage"
import MovleyU_CustomersPage from "../../support/stagPageObjects/MovleyU_CustomersPage"
import YopMailPage from "../../support/stagPageObjects/YopMailPage"
import CustUserProductPage from '../../support/stagPageObjects/CustUserProductPage'
import CustUserAccVPage from "../../support/stagPageObjects/CustUserAccVPage"


var inspectionNumberHelping 
let inspectNum = 0

const loginPage=new LoginPage()
const logOutPage=new LogOutPage()

describe('Movley End to End Happy Sceanrio (Sever Name)', function() 
{
      beforeEach(function() {

        //Loading Data from Fixtures File which will be used in this Test Suite
        cy.fixture('MovleyUserData').then(function(data)
        {
            this.data=data
        })   
      
      })

      after(function() {

        //Log Out on Exisitng the Suite
        cy.wait(5000)
        logOutPage.getProfileMenu().click({ force: true })
        logOutPage.getLogoutButton().click()
        cy.wait(3000)
      
      })
{

it ('MovleyUser_Login', function (){

    cy.visit(Cypress.env('url_StagMovley')) 
    
      loginPage.getEmailField().type(this.data.MovleyUser_email)
      loginPage.getPassField().type(this.data.MovleyUserpass)
      loginPage.getLoginButton().click()
      cy.wait(3000)
   
  
})

it('Customer Creation by Movley User',function() {
  
  const movUser = new MovleyU_CustomersPage()

  movUser.getAddCustomerBtn().click()
  movUser.getManageCPopUpCompanyName().type(this.data.companyName)
  movUser.getManageCPopUpUserFN().type(this.data.firstName)
  movUser.getManageCPopUpUserLN().type(this.data.lastName)
  movUser.getManageCPopUpUserEmailAddress().type(this.data.emailAddress)
  movUser.getManageCPopUpSaveBtn().click({ force: true })

})

it ('Movley User LogOut', function (){
  
  cy.wait(5000)
  logOutPage.getProfileMenu().click({ force: true })
  logOutPage.getLogoutButton().click()
  cy.wait(3000)
  
})

it ('Customer User: Email Verification, Password Creation, and Login  ', function (){
  
  const yopMailPage = new YopMailPage()
  const custUserAccVPage = new CustUserAccVPage()
  
  cy.visit(Cypress.env('url_Yopmail'))
  
  yopMailPage.getYopmailInboxField().type(this.data.emailAddress)
  yopMailPage.getYopmailInboxArrowBtn().click()
 
  
  yopMailPage.getYopmailInbox().then($iframe => {
    
    const iframe1 = $iframe.contents()
    const myInput1 = iframe1.find('#mail > div > center > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table:nth-child(6) > tbody > tr > td > table > tbody > tr > td > a')
    cy.wrap(myInput1).should('have.attr', 'href')
    .then((href) => {
        cy.forceVisit(href)
    })

})
    custUserAccVPage.getPass().type(this.data.CustomerUser_pass)
    custUserAccVPage.getConfirmPass().type(this.data.CustomerUser_confrim_pass)
    custUserAccVPage.getBtn().click()
    cy.wait(2000)
  
  
  //Login 
  loginPage.getEmailField().type(this.data.emailAddress)
  loginPage.getPassField().type(this.data.CustomerUser_pass)
  loginPage.getLoginButton().click()
  cy.wait(5000)

})

it ('CustomerUser: Product Creation, Adding Test and Booking an Inspection', function (){ 

  const custUserProductPage = new CustUserProductPage()
  

  //custUserProductPage.getPendoPopUpCloseBtn01().click({ force: true })
  //custUserProductPage.getPendoPopUpCloseBtn02().click({ force: true })
  
  //Product Creation
  custUserProductPage.getCreateProductBtn().should('be.visible').click()
  custUserProductPage.getCreateNewProductPopUpName().should('be.visible').type(this.data.ProductName)
  custUserProductPage.getCreateNewProductPopUpCreateBtn().should('be.visible').click({ force: true })
  cy.wait(10000)

  //Adding Product Information

  //General Information Section
  //Product Image Upload 
  const fixtureFile = 'images.jpg'
  custUserProductPage.getAddPhotoPopUp_ImageUploadBtn().click()
  cy.wait(3000)
  custUserProductPage.getAddPhotoPopUp_ImageUploadHiddenBtn().selectFile(fixtureFile, {force:true})
  cy.wait(2000)
  custUserProductPage.getAddPhotoPopUp_AddPhotoBtn().should('be.visible').click()
  cy.wait(5000)

   //General Information Section
   custUserProductPage.getProductSKU().type('12345')
   custUserProductPage.getProductBrand().type('Xi')
   custUserProductPage.getProductDescription().type('This is the best smart watch equiped with latest chips and technology.')
   custUserProductPage.getProductBarCode().type('987654321')
   custUserProductPage.getProductURL().type('https://google.com')
   
   //Product Photo and Color Section
   
   custUserProductPage.getProductAddProductPhotoBtn().click({force:true})
   custUserProductPage.getAddPhotoPopUp_ImageUploadHiddenBtn().selectFile(fixtureFile, {force:true})
   cy.wait(2000)
   custUserProductPage.getAddPhotoPopUp_AddPhotoBtn().click()
   cy.wait(5000)

   //Color Section
   custUserProductPage.getProductColor().type('Black')
   custUserProductPage.getProductColorAddPhotoBtn().click()
   custUserProductPage.getAddPhotoPopUp_ImageUploadHiddenBtn().selectFile(fixtureFile, {force:true})
   cy.wait(2000)
   custUserProductPage.getAddPhotoPopUp_AddPhotoBtn().should('be.visible').click()
   cy.wait(5000)

   //Logo Logic
   
   if (custUserProductPage.getProductLogoToogleBtnOnStatus())
   {
   }
   else {
    
    custUserProductPage.getProductLogoToogleBtnOn().click()
   }

   custUserProductPage.getProductLogoPlacement().type('Panerai')
   custUserProductPage.getProductLogoAddPhotoBtn().click()

    custUserProductPage.getAddPhotoPopUp_ImageUploadHiddenBtn().selectFile(fixtureFile, {force:true})
    cy.wait(2000)
    custUserProductPage.getAddPhotoPopUp_AddPhotoBtn().should('be.visible').click()
    cy.wait(5000)
   
   //Dimensions
   custUserProductPage.getProductDimensions().type('Length : 7cm and Width: 3cm')
   custUserProductPage.getProductDimensionsAddPhotoBtn().click()
   custUserProductPage.getProductDimensions_ImageUploadHiddenBtn().selectFile(fixtureFile, { action: 'drag-drop' })
   cy.wait(3000)
   custUserProductPage.getProductDimensions_AddPhotoBtn().click({ force: true })
   
   //Additional Product Information
   custUserProductPage.getProductMaterials().type('Latest AI chip')
   custUserProductPage.getProductSupplierprice().type('100')
   custUserProductPage.getProductSellingPrice().type('100')
   custUserProductPage.getProductSalesChannels().type('Amazon')
   custUserProductPage.getProductUpdateBtn().click()

   //Clicking on Product Tile from Side Menu
  cy.xpath("//p[contains (text(), 'Products')]").click()

   //Searching a Product in Product Table
  custUserProductPage.getProductTable().each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductName))
  {
    custUserProductPage.getProductTable().eq(index).click ({ force: true })
  }
}) 

   cy.wait(5000)
   
   //Packaging Section
   custUserProductPage.getPackagingTileFromSideMenu().click()

   //Type Dropdwon
   custUserProductPage.getProductPackTypeDropDown().click()
   //Logic for dropdown option should be written here 
   custUserProductPage.getProductPackTypeDropDownOpt1().click()

   //Outer Packaging 
   custUserProductPage.getProductOutPackAddPhotoBtn().click()
   custUserProductPage.getProductOutPackUploadPhotoBtn().click()
   //File Upload
   custUserProductPage.getProductOutPackUploadPhoto_HideBtn().selectFile(fixtureFile, {force:true})
   cy.wait(2000)
   custUserProductPage.getProductOutPackAddPhoto_SaveBtn().should('be.visible').click()
   cy.wait(5000)

   //Inner Packaging 
   custUserProductPage.getProductInnerPackAddPhotoBtn().click()
   custUserProductPage.getProductInnerPackUploadPhotoBtn().click()
    //File Upload
    custUserProductPage.getProductInnerPackUploadPhoto_HideBtn().selectFile(fixtureFile, {force:true})
    cy.wait(2000)
    custUserProductPage.getProductInnerPackAddPhoto_SaveBtn().should('be.visible').click()
    cy.wait(5000)

//Insert 
   custUserProductPage.getProductAddInsertBtn().click()
   custUserProductPage.getProductAddInsertNameField().next().type("Mr/Mrs Client Name")
   custUserProductPage.getProductAddInsertDescField().next().type("Greeting Message")
   custUserProductPage.getProductAddInsertMaterialField().next().type("Hello this is special packaging")

   custUserProductPage.getProductPackagingUpdateBtn().click()


   //Factories Section
   custUserProductPage.getFactoryTileFromSideMenu().click()
   custUserProductPage.getProductAddFactoryBtn().click()
   //creating new factory
   custUserProductPage.getProductCreateFactoryToogleEnabled().prev().click()
   custUserProductPage.getProductFactoryNameField().type("MJ Group")
   custUserProductPage.getProductFactoryEngAddressField().type("104-East Chowing")
   custUserProductPage.getProductFactoryEngAddressField().type("104-East Chowing")
   custUserProductPage.getProductFactoryEngAddressField().type("104-East Chowing")
   custUserProductPage.getProductFactoryChineseAddressField().type("所在城市：市区-塘沽区  州/省/地区：天津  电话号码 13052853054(mobil32  国家代码 +86  国家 中国")
   custUserProductPage.getProductFactoryContactNameField().type("Junaid")
   custUserProductPage.getProductFactoryContactEmailField().type("m@yopmail.com")
   custUserProductPage.getProductFactoryContactPhoneNuField().type("+923225551955")
   custUserProductPage.getProductFactoryContactWeChatField().type("+923225551955")
   custUserProductPage.getProductFactorySaveBtn().click()
   cy.wait(10000)
   cy.xpath("//p[contains (text(), 'Packaging')]").click()

   //Reference Documents Section
   custUserProductPage.getRefDocTileFromSideMenu().click()

   //Adding Doc
   custUserProductPage.getProductRefDocAddPhotoBtn().click()
    //File Upload
   custUserProductPage.getProductRefDocUploadPhotoBtn().selectFile(fixtureFile, {force:true})
   cy.wait(2000)
   custUserProductPage.getProductRefDocAddPhoto_SaveBtn().should('be.visible').click()
   cy.wait(5000)
   

   //Visual Defects Section
   custUserProductPage.getDefectTileFromSideMenu().click()

   //Adding Doc
   custUserProductPage.getProductDefectAddBtn().click()
   custUserProductPage.getProductDefectNameField().type("Scratches")
   custUserProductPage.getProductDefectDescField().type("This should be observe carefully")

   //Drop Down
   custUserProductPage.getProductDefectDropDown().click()
   //Logic
   custUserProductPage.getProductDefectDropDownOpt1().click()
   custUserProductPage.getProductDefectSaveBtn().click()

//Adding Test 
custUserProductPage.getTestTileFromSideMenu().click()
custUserProductPage.getProductTestAddBtn().click()
custUserProductPage.getProductTestTypeDropDown().click()
cy.wait(2000)
custUserProductPage.getProductTestTypeDropDownOpt().click() // (Visual Inspection, Weights and Measurements, Barcode, Custom)
custUserProductPage.getProductTestNameField().type(" Test 02")
custUserProductPage.getProductTestInstructionField().type("This is the isntructions.")
custUserProductPage.getProductTestExpectedResultField().type("This is the Expected Results.")
   
//File Upload 
 const fixtureFileTestDocUpload = 'images.jpg';
 custUserProductPage.getProductTestUploadPhotoBtn().selectFile(fixtureFileTestDocUpload, { action: 'drag-drop' })
 cy.wait(2000)
 custUserProductPage.getProductTestSaveBtn().should('be.visible').click({ force: true })
   cy.wait(20000)

   /*
//Update Test Sceanrio
//Test Type Logic 
if (this.data.testType === 'Visual Inspection'){
 cy.xpath("//p[contains(text(), 'Visual Inspection')]").click()
}
else if (this.data.testType === 'Weights and Measurement'){
  
 cy.xpath("//p[contains(text(),'Weights and Measurement Test 02')]").should('be.visible').next().click()
 cy.xpath('//p[contains(text(), "Edit")]').click()
}
else if (this.data.testType === 'Barcode'){
 cy.xpath("//p[contains(text(), 'Barcode')]").click()
}
else {
  cy.xpath("//p[contains(text(), 'Custom')]").click()
}

cy.get('#name').clear()
cy.get('#name').type(this.data.testName)
cy.get('#instructions').type(this.data.testInstructions)
cy.get('#expectedResults').type(this.data.expectedResults)

  //Video File Upload 
  const fixtureVideoFile = 'pexels-thirdman-5538262.mp4';
  cy.get('[alt="UploadIcon-button"]').selectFile(fixtureVideoFile, { action: 'drag-drop' })
  cy.wait(10000)
  cy.xpath("//button[contains(text(), 'Save Test')]").click()
  cy.wait(30000)

  //Deleting a Test
  if (this.data.testType === 'Visual Inspection'){
    cy.xpath("//p[contains(text(), 'Visual Inspection')]").click()
   }
   else if (this.data.testType === 'Weights and Measurement'){
    cy.xpath('//p[contains (text(), "Water Proof")]').next().click()
    cy.xpath('//p[contains(text(), "Remove")]').click()
    cy.xpath('//button[contains(text(), "Delete")]').click()
    
   }
   else if (this.data.testType === 'Barcode'){
    cy.xpath("//p[contains(text(), 'Barcode')]").click()
   }
   else {
     cy.xpath("//p[contains(text(), 'Custom')]").click()
   }

   //Verifying the Required Test 

  cy.xpath("//p[contains(text(),'Visual Inspection')]").should('be.visible')
  cy.xpath("//span[contains(text(),'Required')]").should('be.visible')
  cy.xpath("//span[contains(text(),'Visual Inspection')]").should('be.visible')
  cy.wait(5000)

  /*
  //Calculating count of Test 
  let countOfElements = 0;
  cy.xpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1rjpx0t"]').then($elements => {
    countOfElements = $elements.length;
  })

  let alpha = cy.xpath('//h6[contains(text(),"Tests")]').next()
  cy.log(alpha) 
 
  if (countOfElements === alpha)
  {
    cy.log("Yes, the count is equal.")
  }
  */
   //Book an Inspection
   cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiList-root > :nth-child(2) > .MuiTypography-root').click({ force: true })
   cy.wait(10000)
   // cy.xpath("//p[contains(text(),'Inspections')]").click()
   cy.xpath("//button[contains(text(),'Book New Inspection')]").click()

   //Selecting Date Range
   cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
   cy.selectDate(this.data.Inspection_ShippingDate)
   cy.wait(500)
   cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
   cy.selectDate(this.data.Inspection_PreStartDate)
   cy.wait(500)
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
   cy.selectDate(this.data.Inspection_PreEndDate)
   cy.wait(500)
   cy.get('#comment').type('Please make sure it should be done on mentioned dates.')
   cy.xpath("//button[contains(text(), 'Continue')]").click()
   cy.wait(10000)

   cy.xpath("//body/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/span[1]/input[1]").click()
   cy.xpath('//p[contains (text(), "Search products...")]').click()

   cy.xpath('//ul/li').each(($e1, index, $list) => {
    const text=$e1.text()
    cy.log (text)
    if(text.includes(this.data.ProductName))
    {
        cy.xpath('//ul/li['+[index+1]+']/div/div[4]/div/div/button').click ({ force: true })
    }
   }) 
   
   cy.get('#unit').type('10')
   cy.xpath("//button[contains(text(), 'Continue')]").click()
  cy.xpath('//button[contains(text(), "Submit Inspection")]').click({ multiple: true })
  
  cy.wait(1000)

    //Searching a Inspection in Inspection Table
    cy.get('tr td:nth-child(1) p').each(($e1, index, $list) => {
      const text=$e1.text()
      if (text > inspectNum ) { 
        inspectNum = text
      }
      cy.log(text)
    }) 

  cy.log('Inspection Booking Nu is:'+inspectNum)
   
   /*
   cy.wait(10000)
   cy.xpath('//ul/div[2]/div/p[contains(text(), "Products")]').click()

   //Selecting First Option in the List (Need to apply Each Logic if products are more than 1)
   cy.get('#products-option-0').click()
   cy.xpath("//input[@value= 'New Inspection']").click()
   cy.get('.css-skuxnc > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
   cy.selectDate(this.data.Inspection_ShippingDate)
   cy.wait(500)

   //Toogle button Logic 
   //cy.xpath("//span [@class = 'MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1p5ir8b']").click()
   cy.xpath("//input[@class = 'PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3']").click()
  
   */
})

it ('Customer User LogOut', function (){

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()
})

it ('MovleyUser_Login', function (){

  loginPage.getEmailField().type(this.data.MovleyUser_email)
  loginPage.getPassField().type(this.data.MovleyUserpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)

})

it.skip('As a Movley User, Updating the Product and Inspection',function() {

  cy.visit(Cypress.env('url_MovleyAdmin')) 
  const loginPage=new LoginPage()
 
  loginPage.getEmailField().type(this.data.MovleyUser_email)
  loginPage.getPassField().type(this.data.MovleyUserpass)
  loginPage.getLoginButton().click()
  cy.wait(3000)
  
  cy.xpath("//p[contains (text(), 'Inspections')]").click()
  cy.wait(5000)

  let getText =0
  let shouldBreak = false;

  cy.log(inspectNum)
  cy.get('ul li').each(($e1, index1, $list) => {

    //Searching an Inspection in Inspection List
    cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {

    const text=$e1.text()
    cy.log (text)
    //inspectNum
    if(text === '116')
      {
      cy.get('tr td:nth-child(1)').eq(index).click({ force: true })

      //Updating the Inspection Status
      cy.get('#inspectionStatus').click({ force: true })
      cy.xpath("//ul/li[5]").click({ force: true })
      cy.get("#inspectionStatus") .then(($value) => {
      getText = $value.text()
      if (getText ==="Pass")
      {
        cy.log(getText)
      }
      //Updating Inspection Date
      cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.selectDate(this.data.Inspection_Date)
      cy.wait(500)
      cy.xpath("//button[contains (text(), 'Update')]").click()
      cy.wait(5000)
      shouldBreak = true
      cy.wait(500)
      return

    })
      }

     /* else if( index == Cypress.$($list).length )
      {
        
      }*/
    }) 

    cy.wait(2000)
    if (shouldBreak) {
      return
    } 
      cy.get('ul li:nth-child('+[++index1]+')').click()
      cy.wait(15000)
  })

cy.wait(10000)
  cy.xpath("//p[contains(text(),'Products')]").click({ force: true })
  cy.wait(8000)

//Searching a Product in Product Table
cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductName))
  {
      cy.get('tr td:nth-child(3) div button').eq(index).click ({ force: true })
  }
}) 
  
//Updating the link against the product
cy.xpath("//p[contains(text(),'Manage SharePoint Link')]").click()
cy.get('#sharepoint').type(this.data.ProductSharePointURL)
cy.xpath("//button[contains(text(),'Update')]").click()

//Verifying the link is pasted against the product
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductSharePointURL))
  {
    if (cy.get('tr td:nth-child(1)').eq(index).should('have.text',this.data.ProductName ))
    {
      cy.log ("The Link is addedd successfully.")
    } 
  }
}) 

cy.xpath("//p[contains(text(),'Inspections')]").click()
cy.wait(5000)

//Searching Inspection in Inspection Table
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.companyName))
  {
    inspectionNumberHelping = cy.get('tr td:nth-child(1)').eq(index).text
    cy.log("Hello Faraz Bhi")
    cy.log(inspectionNumberHelping)
    cy.get('tr td:nth-child(1)').eq(index).click()
  }
}) 

//Updating Inspection Status
cy.get("#inspectionStatus").click()
cy.xpath("//li[contains(text(),'"+this.data.InspectionStatus+"')]").click()

//Updating Result Docs 
cy.get('#reportUrl').type(this.data.ResultDocURL)
cy.xpath("//button[contains(text(), 'Update')]").click()

//Verifying the Product Listing have URL in Inspection Section
cy.xpath("//p[contains(text(), 'Products')]").click()

//Verifying the link is pasted against the product
cy.get('tr td:nth-child(2) ').each(($e1, index, $list) => {
  const text=$e1.text()
  cy.log (text)
  if(text.includes(this.data.ProductSharePointURL))
  {
    if (cy.get('tr td:nth-child(1)').eq(index).should('have.text',this.data.ProductName ))
    {
      cy.log ("The Link is addedd successfully it is verified in Inspection Section as well.")
    } 
  }
}) 

})

it.skip ('Movley User LogOut', function (){

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()
})

it.skip ('CustomerUser: Status Email Verification, Login and Status Verfication in Inspection Section and Apply CRUD Operation ', function (){

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

it.skip ('Customer User LogOut', function (){

  const logOutPage=new LogOutPage()

  cy.wait(10000)
  cy.get('.MuiAvatar-root').click({ force: true })
  cy.xpath("//p[contains(text(),'LOGOUT')]").click()
})

//dont include this in this suite
it.skip ('CustomerUser:  Adding Test', function (){

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
      cy.get('tr td:nth-child(1)').eq(index).click ({ force: true })
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


