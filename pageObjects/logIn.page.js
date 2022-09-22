const page = require('./page');
const emailInput = 'input[name="email"]:not([required])';
const passwordInput = 'input[name="password"]';
const logInBtn = '//button[text()="Log in"]';
const emailError = '[class*="TextField__ErrorMessage"]';
const forgotPasswordBtn = 'a[href="/#/login/password-reset"]';
const emailForgotPasswordInput = 'input[name="email"]';
const resetPassswordBtn = 'button[type="submit"]';
const successMessage = 'svg[type="success"]';

class LogInPage {

    async enterEmail(email) {
        await page.setValue(emailInput, email)
    }

    async enterPassword(password) {
        await page.setValue(passwordInput, password);
    }

    async enterEmailForgotPasswordInput(email) {
        await page.setValue(emailForgotPasswordInput, email)
    }

    async clickLogInBtn() {
        await page.clickElement(logInBtn);
    }

    async clickResetPasswordBtn() {
        await page.clickElement(resetPassswordBtn);
    }

    async isEmailErrorDisplayed() {
        return await page.isElementDisplayed(emailError);
    }

    async isSuccessMessageDisplayed() {
        return await page.isElementDisplayed(successMessage);
    }

    async clickForgotPasswordBtn() {
        await page.clickElement(forgotPasswordBtn);
    }

}
module.exports = new LogInPage();