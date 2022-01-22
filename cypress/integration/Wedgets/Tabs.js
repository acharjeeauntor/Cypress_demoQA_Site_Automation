/// <reference types="cypress"/>
import { TabsPage } from "../../PageObjects/Wedgets/TabsPage"

before(() => {
    cy.visit("tabs")
  })
  
  describe('Test Tab Page', () => {
  
    it("Verify Tabs is working propely or not", () => {
        const tabPage = new TabsPage()
        tabPage.verifyWhatTab()
        tabPage.verifyOriginTab()
        tabPage.verifyUseTab()
  
    })
  
  
  })
  