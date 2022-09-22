const mainPage = require('../pageObjects/main.page');
const signUpPage = require('../pageObjects/signUp.page');
const assert = require("assert");
const randomstring = require("randomstring");
const validEmail1 = `${randomstring.generate(9)}@gmail.com`;
const validEmail2 = `${randomstring.generate(9)}@gmail.com`;
const validEmail3 = `${randomstring.generate(9)}@gmail.com`;
const validEmail4 = `${randomstring.generate(9)}@gmail.com`;
const name = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})
const validPassword = `${randomstring.generate(10)}*G6`;
const invalidEmail = randomstring.generate(9);
const invalidPassword = randomstring.generate({
    length: 9,
    charset: 'alphabetic',
    capitalization: 'lowercase'
});

describe('Sing up check', async () => {

    beforeEach(async function () {
        await mainPage.openMainPage();
    });

    it('Should sign up with invalid data from header', async () => {
        await mainPage.clickSignUpHeaderBtn();
        await signUpPage.enterEmail(invalidEmail);
        await signUpPage.enterPassword(invalidPassword);
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isEmailErrorDisplayed());
        assert.ok(await signUpPage.isNameErrorDisolayed());
        assert.ok(await signUpPage.isPasswordErrorDisplayed());
    })

    it('Should sign up with valid data from header', async () => {
        await mainPage.clickSignUpHeaderBtn();
        await signUpPage.enterEmail(validEmail1);
        await signUpPage.enterName(name);
        await signUpPage.enterPassword(validPassword);
        await signUpPage.clickAgreeCheckBox();
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isErrorMessageDisplayed());
    })

    it('Should sign up with valid data from banner', async () => {
        await mainPage.clickTryForFreeBtn();
        await signUpPage.enterEmail(validEmail2);
        await signUpPage.enterName(name);
        await signUpPage.enterPassword(validPassword);
        await signUpPage.clickAgreeCheckBox();
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isErrorMessageDisplayed());
    })

    it('Should sign up with valid data from footer banner', async () => {
        await mainPage.clickStartFreeTrialBtn();
        await signUpPage.enterEmail(validEmail3);
        await signUpPage.enterName(name);
        await signUpPage.enterPassword(validPassword);
        await signUpPage.clickAgreeCheckBox();
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isErrorMessageDisplayed());
    })

    it('Should sign up with valid data from footer', async () => {
        await mainPage.clickSignUpFooterBnt();
        await signUpPage.enterEmail(validEmail4);
        await signUpPage.enterName(name);
        await signUpPage.enterPassword(validPassword);
        await signUpPage.clickAgreeCheckBox();
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isErrorMessageDisplayed());
    })

})