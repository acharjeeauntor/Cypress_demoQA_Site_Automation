/// <reference types="cypress"/>
import { ProgressBarPage } from "../../PageObjects/Wedgets/ProgressPage"

before(() => {
    cy.visit("progress-bar")
  })
  
  describe('Test Progress Page', () => {
  
    it("Verify Progress Bar is working propely or not", () => {
        const progressBar = new ProgressBarPage()
        progressBar.verifyProgressBar()
  
    })
  
  
  })
  