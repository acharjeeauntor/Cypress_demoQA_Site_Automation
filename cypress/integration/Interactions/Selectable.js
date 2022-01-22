/// <reference types="cypress"/>
import { SelectablePage } from "../../PageObjects/Interactions/SelectablePage"

before(() => {
    cy.visit("selectable")
  })
  
  describe('Test Selectable ', () => {
    const selectablePage = new SelectablePage()
  
    it("Verify list select is working properly or not", () => {
        selectablePage.selectListItem()
  
    })
    it("Verify Grid select is working properly or not", () => {
      selectablePage.selectGridItem()

  })
  
  })
  