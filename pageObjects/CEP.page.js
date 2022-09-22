const page = require('./page');
const nocBtn = 'a[href*="custom-support-call-center"]';
const eseBtn = 'a[href*="sip-trunking-get-started"]';
const ddcBtn = 'a[href*="joinslack"]';
const title = '//h1';
const slackEmailInput = 'input[name="email"]';
const closeAndDenyBtn = '[aria-label="close and deny"]';
const learnMoreBtn = '//a[text()="Learn More"]';
const contactUsBtn = '//a[text()="Contact Us"]';
const checkOutBtn = '//a[text()="Check out the tools"]';
const seePortal = '//a[text()="See the Portal"]';

class CEPPage {

    async openMainPage() {
        await page.openPage('/solutions/customer-engagement-platforms');
        await browser.pause(1000);
        if (await page.isElementDisplayed(closeAndDenyBtn, false)) {
            await page.clickElement(closeAndDenyBtn);
        }
    }

    async getTitle() {
        return await page.getElement(title)
    }

    async clickNOCBtn() {
        await page.openByHref(nocBtn);
    }

    async clickESEBtn() {
        await page.openByHref(eseBtn);
    }

    async clickDDCBtn() {
        await page.openByHref(ddcBtn);
    }

    async isInputEnabled() {
        return await page.isElementEnabled(slackEmailInput);
    }

    async clickLearnMoreBtn() {
        await page.clickElement(learnMoreBtn);
    }

    async clickContactUsBtn() {
        await page.clickElement(contactUsBtn);
    }

    async clickCheckOutBtn() {
        await page.clickElement(checkOutBtn);
    }

    async clickSeeProductBtn() {
        await page.clickElement(seePortal);
    }

}
module.exports = new CEPPage();