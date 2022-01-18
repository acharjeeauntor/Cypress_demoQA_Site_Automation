/// <reference types="cypress"/>

import { UploadDownloadPage } from "../../PageObjects/ElementPages/UploadDownloadPage"

before(() => {
    cy.visit("upload-download")
})

describe('Test UploadDownloadPage Feature', () => {

    it("Verify Download is working properly or not", () => {
        const uploadDownload = new UploadDownloadPage()
        const uploadImageFile = "sampleFile.jpeg"
        uploadDownload.downloadFile()
        cy.verifyDownload(uploadImageFile);

    })

    it("Verify Upload is working properly or not", () => {
        const uploadDownload = new UploadDownloadPage()
        const imageFile = "demoPic.jpg"
        uploadDownload.uploadFile(imageFile)
        cy.get("#uploadedFilePath").should('contain',imageFile)
    })

})
