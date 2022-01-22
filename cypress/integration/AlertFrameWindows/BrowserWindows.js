/// <reference types="cypress"/>

import { BrowserWindowsPage } from "../../PageObjects/AlertFrameWindowsPages/BrowserWindowsPage"

beforeEach(() => {
    cy.visit("browser-windows")
})


describe('Test Browser Windows Feature', () => {
    const browserWindows = new BrowserWindowsPage()

    it("Verify Browser new Tab is working properly or not", () => {

        browserWindows.verifyNewTab()
    })

    it("Verify Browser new Window is working properly or not", () => {
        browserWindows.verifyNewWinddow()
    })

})