/// <reference types="cypress"/>

const fullNameLocator ="//input[@id='userName']"
const emailLocator = "//input[@id='userEmail']"
const currentAddressLocator="#currentAddress"
const permanentAddressLocator="permanentAddress"


export class TextBoxPage {

    enterFullName(name) {
        cy.findElementByXpath(fullNameLocator).clear().type(name)
    }
    enterEmail(email) {
        const emailField = cy.findElementByXpath(emailLocator)
        emailField.clear().type(email)
    }
    enterCurrentAddress(cAddress) {
        cy.get(currentAddressLocator).clear().type(cAddress)
    }
    enterPermanentAddress(pAddress) {
        cy.findElementById(permanentAddressLocator).clear().type(pAddress)
    }
    clickSubmitButton() {
        cy.get("#submit").click()
    }



}