/// <reference types="cypress"/>

import { TextBoxPage } from "../../PageObjects/TextBoxPage";
describe('Test Text Box Feature',()=>{
    before(()=>{
        cy.visit("text-box")
    })
    it("Verify Text box is working properly or not using valid and invalid input",()=>{
        const textBox = new TextBoxPage()
        textBox.enterFullName("Auntor")
        textBox.enterEmail("acharj@gmail.com")
        textBox.enterCurrentAddress("uttora")
        textBox.enterPermanentAddress("Pathrail")
        textBox.clickSubmitButton()

        cy.xpath("//p[@id='name']").should('contain','Auntor')
        cy.xpath("//p[@id='email']").should('contain','acharj@gmail.com')
        cy.xpath("//p[@id='currentAddress']").should('contain','uttora')
        cy.xpath("//p[@id='permanentAddress']").should('contain','Pathrail')


    })
})