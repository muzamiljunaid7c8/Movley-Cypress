// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
import '@shelex/cypress-allure-plugin';

import 'cypress-file-upload';


Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        })

})


Cypress.Commands.add("searchProductTable", (movleyProductName) => { 
    cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
        const text=$e1.text()
    
        cy.log (text)
        if(text.includes(movleyProductName))
        {
            cy.get('tr td:nth-child(1)').eq(index).click ({force: true})
        }
    }) 
})


Cypress.Commands.add("searchInInspectionTable", (inspectionID) => { 
    cy.get('tr td:nth-child(1)').each(($e1, index, $list) => {
        const text=$e1.text()
    
        cy.log (text)
        if(text.includes(inspectionID))
        {
            cy.get('tr td:nth-child(1)').eq(index).click ({force: true})
        }
    }) 
})

Cypress.Commands.add("selectDate", (Date) => { 
   
    cy.xpath('//div[@role="row"]/button').each(($e1, index, $list) => {
    const text=$e1.text()
    cy.log (text)
    if(text===Date)
    {
        cy.xpath('//div[@role="row"]/button').eq(index).click ({force: true})
        return false
    }})

    /*
    const  col = 7
    for (let i = 1; i <= col; i += 1) {    // nth-child is 1-based not 0-based

        cy.get("[class='MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1fxcd66']:nth-child("+i+")")
        .each(($e1, index, $list) => {
        const text=$e1.text()
        cy.log (text)
        if(text===Date)
        {
            cy.get("[class='MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1fxcd66']:nth-child("+i+")").eq(index).click ({force: true})
            return false
            
        }
    }) */

/*
const  col = 7
//Get the coloumn of Calander in this case the last column (1 to 7)
//The last index is representing the weekdays (SMTWTFS)
for (let i = 1; i <= col; i += 1) {    // nth-child is 1-based not 0-based
    cy.get("[class='MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1fxcd66']:nth-child("+i+")")
    .each(($e1, index, $list) => {
    const text=$e1.text()
    cy.log (text)
    if(text==="27")
    {
        cy.get("[class='MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-1fxcd66']:nth-child("+i+")").eq(index).click ({force: true})
    }
}) 
   // cy.get(`.ab-test-switch__buttons > :nth-child(${i})`)  
   //   .click()   
    }
*/
})

Cypress.Commands.add("searchInCustomerTable" ,(customerTableAttribute, ColumnNumber) => { 
    cy.get('tr td:nth-child('+ColumnNumber+')').each(($e1, index, $list) => {
        const text=$e1.text()
    
        cy.log (text)
        if(text.includes(customerTableAttribute))
        {
            return false
        }
    }) 
})


Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

require ('cypress-xpath')