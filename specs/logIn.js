const mainPage = require('../pageObjects/main.page');
const logInPage = require('../pageObjects/logIn.page');
const assert = require("assert");
const randomstring = require("randomstring");
const invalidData = randomstring.generate(9);
const email = `${randomstring.generate(9)}@gmail.com`;

describe('Log In', async () => {

    beforeEach(async function () {
        await mainPage.openMainPage();
    });

    it('Should log in from header invalid data', async () => {
        await mainPage.clickLogInHeaderBtn();
        await logInPage.enterEmail(invalidData);
        await logInPage.enterPassword(invalidData);
        await logInPage.clickLogInBtn();
        assert.ok(await logInPage.isEmailErrorDisplayed());
    })

    it('Should log in from footer invalid data', async () => {
        await mainPage.clickLogInFooterBtn();
        await logInPage.enterEmail(invalidData);
        await logInPage.enterPassword(invalidData);
        await logInPage.clickLogInBtn();
        assert.ok(await logInPage.isEmailErrorDisplayed());
    })

    it('Should fill forgot password form', async () => {
        await mainPage.clickLogInHeaderBtn();
        await logInPage.clickForgotPasswordBtn();
        await logInPage.enterEmailForgotPasswordInput(email);
        await logInPage.clickResetPasswordBtn();
        assert.ok(await logInPage.isSuccessMessageDisplayed());
    })
})