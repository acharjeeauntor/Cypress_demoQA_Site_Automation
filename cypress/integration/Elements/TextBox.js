/// <reference types="cypress"/>

import { TextBoxPage } from "../../PageObjects/TextBoxPage";
describe('Test Text Box Feature',()=>{
    before(()=>{
        cy.visit("text-box")                   
    })


    beforeEach(()=>{
        cy.fixture('testData').as('data')
    })

it("Verify Placeholders are visiable or not",()=>{
   cy.findElementByXpath("//input[@id='userName']").invoke('attr','placeholder').should('eq','Full Name')
   cy.findElementByXpath("//input[@id='userEmail']").invoke('attr','placeholder').should('eq','name@example.com')
   cy.get("#currentAddress").invoke('attr','placeholder').should('eq','Current Address')

})

    it("Verify Text box is working properly or not using valid and invalid input",function(){
        //cy.log(this.data.fullname)
        const textBox = new TextBoxPage()
        textBox.enterFullName(this.data.textBoxData.fullname)
        textBox.enterEmail(this.data.textBoxData.email)
        textBox.enterCurrentAddress(this.data.textBoxData.currentAddress)
        textBox.enterPermanentAddress(this.data.textBoxData.permanentAddress)
        textBox.clickSubmitButton()

        cy.xpath("//p[@id='name']").should('contain',this.data.textBoxData.fullname)
        cy.xpath("//p[@id='email']").should('contain',this.data.textBoxData.email)
        cy.xpath("//p[@id='currentAddress']").should('contain',this.data.textBoxData.currentAddress)
        cy.xpath("//p[@id='permanentAddress']").should('contain',this.data.textBoxData.permanentAddress)


    })
})