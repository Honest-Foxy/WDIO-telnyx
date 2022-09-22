const page = require('./page');
const closeAndDenyBtn = '[aria-label="close and deny"]';
const customerStoriesBnt = 'a[href*="/customer-stories/lightspeed"]';
const footerLinks = 'footer li';
const leftSwitcher = 'button[aria-label="Slide 1"]';
const rightSwitcher = 'button[aria-label="Slide 2"]';
const quote1 = 'ul[style*="--active-index:0"]';
const quote2 = 'ul[style*="--active-index:1"]';
const signUpHeaderBtn = 'header li [href="/sign-up"]';
const logInHeaderBtn = '(//a[contains(text(),"Log In")])[1]';
const logInFooterBtn = '//span[contains(text(),"Log In")]/../..';
const emailInput = '[type="email"]';
const tryForFreeBtn = '[type="submit"]';
const startYourFreeTrialBtn = 'main a[href="/sign-up"]';
const signUpFooterBtn = 'footer li [href="/sign-up"]';
const connectivityLable = '//span[text()="Connectivity"]';
const voiceLable = '//span[text()="Voice"]';
const messagingLable = '//span[text()="Messaging"]';
const networkingLable = '//span[text()="Networking"]';
const wirelessLable = '//span[text()=" made"]/../span[text()="Wireless"]';

class MainPage {

    async openMainPage() {
        await page.openPage('/');
        await browser.pause(1000);
        if (await page.isElementDisplayed(closeAndDenyBtn, false)) {
            await page.clickElement(closeAndDenyBtn);
        }
    }

    async clickCustomerStoriesBtn() {
        await page.clickElement(customerStoriesBnt);
    }

    async areFooterLinksClickable() {
        let flag = true;
        for (let i = 0; i < 33; i++) {
            flag = await page.isElementClickableByIndex(footerLinks, i) ? flag : false;
        }
        return flag
    }

    async isQuote1Displayed() {
        return await page.isElementDisplayed(quote1);
    }

    async isQuote2Displayed() {
        return await page.isElementDisplayed(quote2);
    }

    async clickLeftSwitcher() {
        await page.clickElement(leftSwitcher);
    }

    async clickRightSwitcher() {
        await page.clickElement(rightSwitcher);
    }

    async clickSignUpHeaderBtn() {
        await page.clickElement(signUpHeaderBtn, false);
    }

    async enterEmail() {
        await page.setValue(emailInput);
    }

    async clickTryForFreeBtn() {
        await page.clickElement(tryForFreeBtn);
    }

    async clickStartFreeTrialBtn() {
        await page.clickElement(startYourFreeTrialBtn);
    }

    async clickSignUpFooterBnt() {
        await page.clickElement(signUpFooterBtn);
    }

    async clickLogInHeaderBtn() {
        await page.clickElement(logInHeaderBtn, false);
    }

    async clickLogInFooterBtn() {
        await page.openByHref(logInFooterBtn);
    }

    async isConnectivityLabelDisplayed() {
        return await page.isElementDisplayed(connectivityLable);
    }

    async isVoiceLabelDisplayed() {
        return await page.isElementDisplayed(voiceLable);
    }

    async isMessagingLabelDisplayed() {
        return await page.isElementDisplayed(messagingLable);
    }

    async isNetworkingLabelDisplayed() {
        return await page.isElementDisplayed(networkingLable);
    }

    async isWirelessLabelDisplayed() {
        return await page.isElementDisplayed(wirelessLable);
    }

}
module.exports = new MainPage();