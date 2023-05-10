class CustUserProductPage
{

    //Pendo Pop Up
    getPendoPopUpCloseBtn01()
    {
        return cy.get('#pendo-close-guide-8ec1ca75')
    }

    getPendoPopUpCloseBtn02()
    {
        return cy.get('#pendo-close-guide-28ac8efb')
    }
    
    //Product-Creation Pop Up
    getCreateProductBtn()
    {
        return cy.get('.css-5rpb2d > :nth-child(1) > .MuiGrid-root > .MuiButtonBase-root')
    }

    getCreateNewProductPopUpName()
    {
        return cy.get('#name')
    }

    getCreateNewProductPopUpCreateBtn()
    {
        return cy.xpath("//div[@class='MuiDialogActions-root MuiDialogActions-spacing css-14b29qc']//button[@type='button'][contains(text(),'Create Product')]")
    }

    //Product-General Section (Product Information)
    getAddPhotoPopUp_ImageUploadBtn()
    {
        return cy.xpath("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk']")
    }

    getAddPhotoPopUp_ImageUploadHiddenBtn()
    {
        return cy.xpath('//input[@accept= "application/file,.jpeg,.png,.jpg"]')
    }

    getAddPhotoPopUp_AddPhotoBtn()
    {
        return cy.xpath('//body/div[2]/div[3]/div[1]/div[2]/button[2]')
    }

    getProductSKU()
    {
        return cy.xpath('//input[@name= "sku"]')
    }

    getProductBrand()
    {
        return cy.xpath('//input[@name= "brand"]')
    }

    getProductDescription()
    {
        return cy.xpath('//textarea[@name= "description"]')
    }

    getProductBarCode()
    {
        return cy.xpath('//input[@name= "barCode"]')
    }

    getProductURL()
    {
        return cy.xpath('//input[@name= "productUrl"]')
    }

    //General Section - Product Photos
    getProductColor()
    {
        return cy.xpath('//input[@name= "colors"]')
    }

    getProductAddProductPhotoBtn()
    {
        return cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root')
    }

    getProductColorAddPhotoBtn()
    {
        return cy.get(':nth-child(9) > .MuiGrid-root > .MuiButtonBase-root')
    }

     //General - Logo Section
     getProductLogoToogleBtnOnStatus()
     {
         return cy.xpath('//span[@class="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked css-1p5ir8b"]')
     }
 
     getProductLogoPlacement()
     {
         return cy.xpath('//input[@name= "logo"]')
     }

     getProductLogoAddPhotoBtn()
    {
        return cy.get(':nth-child(13) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root')
    }
 
    getProductLogoToogleBtnOn()
    {
        return cy.xpath("//span[@class='MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1p5ir8b']")
    }
    
     //General - Dimensions Section 
     getProductDimensions()
     {
         return cy.get(':nth-child(19) > .MuiFormControl-root > .MuiInputBase-root')
     }
 
     getProductDimensionsAddPhotoBtn()
     {
         return cy.get(':nth-child(18) > .MuiGrid-root > .MuiButtonBase-root')
     }

     getProductDimensions_ImageUploadHiddenBtn()
     {
         return cy.get('[alt="UploadIcon-button"]')
     }

     getProductDimensions_AddPhotoBtn()
     {
         return cy.get('.css-1o2z39q')
     }
     
      //General - Additional Product Information
      getProductMaterials()
      {
          return cy.xpath('//input[@name= "material"]')
      }
  
      getProductSupplierprice()
      {
          return  cy.xpath('//input[@name= "supplierPrice"]')
      }
 
      getProductSellingPrice()
      {
          return cy.xpath('//input[@name= "sellingPrice"]')
      }
 
      getProductSalesChannels()
      {
          return cy.xpath('//input[@name= "saleChannels"]')
      }
     
     // Product - Update Button
     getProductUpdateBtn()
      {
          return cy.xpath("//button[contains(text(), 'Update')]")
      }

      getProductTable()
      {
          return cy.get('tr td:nth-child(1)')
      }

         //Packaging Section
      getPackagingTileFromSideMenu()
      {
          return cy.xpath("//p[contains (text(), 'Packaging')]")
      }

      getProductPackTypeDropDown()
      {
          return cy.get('#type')
      }

      getProductPackTypeDropDownOpt1()
      {
          return cy.xpath('//ul/li[contains (text(), "Bulk (no packaging)")]')
      }

      getProductOutPackAddPhotoBtn()
      {
          return cy.get(':nth-child(5) > .MuiButtonBase-root')
      }

      getProductOutPackUploadPhotoBtn()
      {
          return cy.get('[alt="UploadIcon-button"]')
      }

      getProductOutPackUploadPhoto_HideBtn()
      {
          return cy.xpath('//input[@accept= "application/file,.jpeg,.png,.jpg"]')
      }

      getProductOutPackAddPhoto_SaveBtn()
      {
          return cy.xpath('//body/div[2]/div[3]/div[1]/div[2]/button[2]')
      }

      getProductInnerPackAddPhotoBtn()
      {
          return cy.get(':nth-child(10) > .MuiButtonBase-root')
      }

      getProductInnerPackUploadPhotoBtn()
      {
          return cy.get('[alt="UploadIcon-button"]')
      }

      getProductInnerPackUploadPhoto_HideBtn()
      {
          return cy.xpath('//input[@accept= "application/file,.jpeg,.png,.jpg"]')
      }

      getProductInnerPackAddPhoto_SaveBtn()
      {
          return cy.xpath('//body/div[2]/div[3]/div[1]/div[2]/button[2]')
      }

      getProductAddInsertBtn()
      {
          return cy.get(':nth-child(14) > .MuiButtonBase-root')
      }

      getProductAddInsertNameField()
      {
          return cy.xpath("//label[contains(text(), 'Insert Name')]")
      }

      getProductAddInsertDescField()
      {
          return cy.xpath("//label[contains(text(), 'Insert Description')]")
      }

      getProductAddInsertMaterialField()
      {
          return cy.xpath("//label[contains(text(), 'Insert Material')]")
      } 

      getProductPackagingUpdateBtn()
      {
          return cy.get(':nth-child(17) > .MuiButtonBase-root')
      } 

      getFactoryTileFromSideMenu()
      {
          return cy.get(':nth-child(4) > .MuiGrid-container > .MuiGrid-root > .MuiList-root > :nth-child(3) > .MuiTypography-root')
      }  

      getProductAddFactoryBtn()
      {
          return cy.xpath("//button[contains(text(), 'Add Factory')]")
      } 

      getProductCreateFactoryToogleEnabled()
      {
          return cy.xpath("//span[contains(text(), 'Create new factory')]")
      } 

      getProductFactoryNameField()
      {
          return cy.xpath("//input[@id='factoryName']")
      } 

       getProductFactoryEngAddressField()
      {
          return cy.xpath("//input[@id='englishAddress']")
      } 

       getProductFactoryChineseAddressField()
      {
          return cy.xpath("//input[@id='chineseAddress']")
      } 

       getProductFactoryContactNameField()
      {
          return cy.xpath("//input[@id='contactName']")
      } 

       getProductFactoryContactEmailField()
      {
          return cy.xpath("//input[@id='contactEmail']")
      }

       getProductFactoryContactPhoneNuField()
      {
          return cy.xpath("//input[@id='contactPhoneNumber']")
      } 

       getProductFactoryContactWeChatField()
      {
          return cy.xpath("//input[@id='contactWeChat']")
      }

      getProductFactorySaveBtn()
      {
          return cy.xpath('//button[contains (text(), "Save Factory")]')
      }

      getRefDocTileFromSideMenu()
      {
          return cy.xpath("//p[contains (text(), 'Reference Documents')]")
      }

      getProductRefDocAddPhotoBtn()
      {
          return cy.xpath('//button[contains (text(), "Add Document")]')
      }

      getProductRefDocUploadPhotoBtn()
      {
          return cy.xpath('//input[@accept= "image/jpeg,.jpg,.jpeg,image/png,.png,video/mp4,.mp4,application/msword,.docx,.doc,.pdf,application/vnd.ms-powerpoint,application/vnd.ms-excel"]')
      }

      getProductRefDocAddPhoto_SaveBtn()
      {
          return cy.xpath('//body/div[2]/div[3]/div[1]/div[2]/button[2]')
      }

      getDefectTileFromSideMenu()
      {
          return cy.xpath("//p[contains (text(), 'Visual Defects')]")
      }

      getProductDefectAddBtn()
      {
          return cy.xpath('//button[contains (text(), "Add Visual Defect")]')
      }

      getProductDefectNameField()
      {
          return cy.get("#name")
      }

      getProductDefectDescField()
      {
          return cy.get("#description")
      }

        getProductDefectDropDown()
      {
          return cy.get("#type")
      }

       getProductDefectDropDownOpt1()
      {
          return cy.xpath("//ul/li[contains (text(), 'Minor')]")
      }

        getProductDefectSaveBtn()
      {
          return cy.xpath('//button[contains (text(), "Save Visual Defect")]')
      }

      getTestTileFromSideMenu()
      {
          return cy.get(':nth-child(6) > .MuiTypography-root')
      }

      getProductTestAddBtn()
      {
          return cy.xpath("//button[contains(text(),'Add Test')]")
      }

      getProductTestTypeDropDown()
      {
          return cy.get('#type')
      }

      getProductTestTypeDropDownOpt()
      {
          return cy.xpath('//li [contains (text(), "Weights and Measurement")]')
      }

        getProductTestNameField()
      {
          return cy.get('#name')
      }

       getProductTestInstructionField()
      {
          return cy.get('#instructions')
      }

       getProductTestExpectedResultField()
      {
          return cy.get('#expectedResults')
      }

      getProductTestUploadPhotoBtn()
      {
          return cy.get('[alt="UploadIcon-button"]')
      }

      getProductTestSaveBtn()
      {
          return cy.xpath("//button [contains (text(), 'Save Test')]")
      }


}

export default  CustUserProductPage;


