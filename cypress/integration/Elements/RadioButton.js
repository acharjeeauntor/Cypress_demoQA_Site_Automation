/// <reference types="cypress"/>
import { RadioButtonPage } from "../../PageObjects/ElementPages/RadioButtonPage";

before(() => {
    cy.visit("radio-button")
    
})


describe('Test Radio button Feature', ()=>{

    it("Verify No Radio button is disabled or not", () => {
        cy.get("#noRadio").should('be.disabled')

    })

    it("Verify Yes & Impressive Radio button can be checked or not", ()=>{
       const radioButton = new RadioButtonPage()
       radioButton.checkYesRadioBtn()
       cy.get(".text-success").should('contain','Yes')
       radioButton.checkImpressiveRadioBtn()
       cy.get(".text-success").should('contain','Impressive')
    })

})