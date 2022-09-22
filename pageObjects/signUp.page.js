const page = require('./page');
const emailInput = '#email';
const nameInput = '#full_name';
const passwordInput = '#password';
const agreeCheckBox = '[aria-labelledby="terms-label"]';
const createAccountBtn = '[type="submit"]';
const signUpMessage = 'main>div>h1';
const emailError = '#email_error';
const nameError = '#full_name_error';
const passwordErrors = '#password_requirements';
const errorMessage = '[aria-label="signup-form_error"]';

class SignUpPage {

    async enterEmail(email) {
        await page.setValue(emailInput, email)
    }

    async enterName(name) {
        await page.setValue(nameInput, name);
    }

    async enterPassword(password) {
        await page.setValue(passwordInput, password);
    }

    async clickAgreeCheckBox() {
        await page.clickElement(agreeCheckBox);
    }

    async clickCreateAccountBnt() {
        await page.clickElement(createAccountBtn);
    }

    async isEmailErrorDisplayed() {
        return await page.isElementDisplayed(emailError);
    }

    async isPasswordErrorDisplayed() {
        return await page.isElementDisplayed(passwordErrors);
    }

    async isNameErrorDisolayed() {
        return await page.isElementDisplayed(nameError);
    }

    async isErrorMessageDisplayed() {
        return await page.isElementDisplayed(`${errorMessage},${signUpMessage}`);
    }

}
module.exports = new SignUpPage();