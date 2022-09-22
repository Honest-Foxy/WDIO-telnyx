const cepPage = require('../pageObjects/CEP.page');
const talkExpert = require('../pageObjects/talkToExpert.page');
const assert = require("assert");
const randomstring = require("randomstring");
const website = `http://www.${randomstring.generate(6)}.com/`;
const email = `${randomstring.generate(9)}@gmail.com`;
const name = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})

describe('Customer Engagement Platforms page check', async () => {

    beforeEach(async function () {
        await cepPage.openMainPage();
    });

    it('Should check custom support call center page title', async () => {
        await cepPage.clickNOCBtn();
        await expect(await cepPage.getTitle()).toHaveTextContaining('Voice API: How We Built a Custom Support Call Center')
    })

    it('Should check sip trunking get started page title', async () => {
        await cepPage.clickESEBtn();
        await expect(await cepPage.getTitle()).toHaveTextContaining('Getting Started with Telnyx SIP Trunking')
    })

    it('Should check joinslack page email input', async () => {
        await cepPage.clickDDCBtn();
        assert.ok(await cepPage.isInputEnabled());
    })

    it('Should fill talk to an expert form', async () => {
        await cepPage.clickLearnMoreBtn();
        await talkExpert.selectOptionReason(1);
        await talkExpert.enterFirstName(name);
        await talkExpert.enterLastName(name);
        await talkExpert.enterEmail(email);
        await talkExpert.enterWebsite(website);
        await talkExpert.selectOptionInteres(1);
        await talkExpert.clickSubmitBtn();
        await expect(await talkExpert.getMessage()).toHaveTextContaining('Thanks for Reaching Out!')
    })

    it('Should fill talk to an expert form', async () => {
        await cepPage.clickContactUsBtn();
        await talkExpert.selectOptionReason(2);
        await talkExpert.enterFirstName(name);
        await talkExpert.enterLastName(name);
        await talkExpert.enterEmail(email);
        await talkExpert.enterWebsite(website);
        await talkExpert.clickSubmitBtn();
        await expect(await talkExpert.getMessage()).toHaveTextContaining('Thanks for Reaching Out!')
    })

    it('Should check twilio migration guide page title', async () => {
        await cepPage.clickCheckOutBtn();
        await expect(await cepPage.getTitle()).toHaveTextContaining('Move from Twilio to Telnyx: Migration Guide')
    })

    it('Should check sign up page title', async () => {
        await cepPage.clickSeeProductBtn();
        await expect(await cepPage.getTitle()).toHaveTextContaining('Create a free account')
    })

})