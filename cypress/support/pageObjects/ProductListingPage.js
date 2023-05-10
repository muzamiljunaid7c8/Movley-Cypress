class ProductListingPage
{


    getProductTitle()
    {
        return cy.xpath('//p[contains(text(),"Awesome")]')
    }
    
    getProductMaterialTitle()
    {
        return cy.xpath('//p[contains(text(),"Product Material")]')
    }
    
    getProductMaterial()
    {
        return cy.xpath('//p[contains(text(),"Metal, ")]')
    }
    
    getProductColorsTitle()
    {
        return cy.xpath('//p[contains(text(),"Product Colors")]')
    }
    
    getProductColors()
    {
        return 
    }
    
    getLogoPlacementTitle()
    {
        return cy.xpath('//p[contains(text(),"Logo Placement")]')
    }
    
    getLogoPlacement()
    {
        return cy.xpath('//p[contains(text(),"Backside of watch face")]')
    }

    getProductDimensionsTitle()
    {
        return cy.xpath('//p[contains(text(),"Product Dimensions")]')
    }
    
    getProductDimensions()
    {
        return cy.xpath('//p[contains(text(),"Wrist circumference: 5.9 – 7.1 inch; Watch case size:  1.3 – 1.7 inch")]')
    }
    
    getProductSalesChannelTitle()
    {
        return cy.xpath('//p[contains(text(),"Product Sales Channel")]')
    }
    
    getProductSalesChannel()
    {
        return cy.xpath('//p[contains(text(),"Amazon, ")]')
    }
    
    getSupplierPriceTitle()
    {
        return cy.xpath('//p[contains(text(),"Supplier Price")]')
    }
    
    getSupplierPrice()
    {
        return cy.get(':nth-child(2) > :nth-child(3) > .css-l6t4c8')
    }
    
    getTargetCustomerSellPriceTitle()
    {
        return cy.xpath('//p[contains(text(),"Target Customer Sell Price")]')
    }
    
    getTargetCustomerSellPrice()
    {
        return cy.get(':nth-child(4) > .css-l6t4c8')
    }
    
    getRiskToleranceTitle()
    {
        return cy.xpath('//p[contains(text(),"Risk Tolerance")]')
    }
    
    getRiskTolerance()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > .MuiGrid-root')
    }
    
    }

export default ProductListingPage;
