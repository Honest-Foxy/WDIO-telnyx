const mainPage = require('../pageObjects/main.page');
const assert = require("assert");

describe('Main page check', async () => {

    beforeEach(async function () {
        await mainPage.openMainPage();
    });

    it('Should check are footer links clickable', async () => {
        assert.ok(await mainPage.areFooterLinksClickable());
    })

    it('Should check quotes switcher', async () => {
        assert.ok(await mainPage.isQuote1Displayed());
        await mainPage.clickRightSwitcher();
        assert.ok(await mainPage.isQuote2Displayed());
        await mainPage.clickLeftSwitcher();
        assert.ok(await mainPage.isQuote1Displayed());
    })

    it('Should check are labels chanching', async () => {
        assert.ok(await mainPage.isConnectivityLabelDisplayed());
        assert.ok(await mainPage.isVoiceLabelDisplayed());
        assert.ok(await mainPage.isMessagingLabelDisplayed());
        assert.ok(await mainPage.isNetworkingLabelDisplayed());
        assert.ok(await mainPage.isWirelessLabelDisplayed());
    })

})