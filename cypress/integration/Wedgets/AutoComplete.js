/// <reference types="cypress"/>
import { AutoCompletePage } from "../../PageObjects/Wedgets/AutoCompletePage"

before(() => {
    cy.visit("auto-complete")
  })
  
  describe('Test Auto Complete', () => {
  
    it("Verify Multiple input Auto Complete", () => {
        const autoComplete = new AutoCompletePage()
        autoComplete.verifyMultipleInput()
  
    })
  
    it("Verify Single input Auto Complete",  ()=> {
        const autoComplete = new AutoCompletePage()
        autoComplete.verifySingleInput()
  
    })
  
  })
  