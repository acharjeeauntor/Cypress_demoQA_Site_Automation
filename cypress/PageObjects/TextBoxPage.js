/// <reference types="cypress"/>

export class TextBoxPage {
    enterFullName(name) {
        cy.findElementByXpath("//input[@id='userName']").clear().type(name)
    }
    enterEmail(email) {
        const emailField = cy.findElementByXpath("//input[@id='userEmail']")
        emailField.clear().type(email)
    }
    enterCurrentAddress(cAddress) {
        cy.get('#currentAddress').clear().type(cAddress)
    }
    enterPermanentAddress(pAddress) {
        cy.findElementById("permanentAddress").clear().type(pAddress)
    }
    clickSubmitButton() {
        cy.get("#submit").click()
    }



}