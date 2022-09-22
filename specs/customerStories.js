const mainPage = require('../pageObjects/main.page');
const customerStoriesPage = require('../pageObjects/customerStories.page');
const signUpPage = require('../pageObjects/signUp.page');
const assert = require("assert");
const randomstring = require("randomstring");
const email = `${randomstring.generate(9)}@gmail.com`;
const name = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})
const password = `${randomstring.generate(10)}!A1`;

describe('Customer stories page check', async () => {

    it('Should check Custoer stories page', async () => {
        await mainPage.openMainPage();
        await mainPage.clickCustomerStoriesBtn();
        assert.ok(await customerStoriesPage.isLabelDisplayed());
        assert.ok(await customerStoriesPage.areLinksClickable());
    })

    it('Should fill registration form', async () => {
        await customerStoriesPage.clickTryItFreeBtn();
        await signUpPage.enterEmail(email);
        await signUpPage.enterName(name);
        await signUpPage.enterPassword(password);
        await signUpPage.clickAgreeCheckBox();
        await signUpPage.clickCreateAccountBnt();
        assert.ok(await signUpPage.isErrorMessageDisplayed());
    })

})