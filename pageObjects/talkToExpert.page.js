const page = require('./page');
const reasonSelector = '#Reason_for_Contact__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput = '#Email';
const websiteInput = '#Website';
const submitBtn = '[type="submit"]';
const message = 'main>div>h1';
const interesSelector = '#Use_Case_Form__c';

class TalkExpert {

    async selectOptionReason(index) {
        await (await page.getElement(reasonSelector)).selectByIndex(index);
    }

    async selectOptionInteres(index) {
        await (await page.getElement(interesSelector)).selectByIndex(index);
    }

    async enterFirstName(value) {
        await page.setValue(firstNameInput, value);
    }

    async enterLastName(value) {
        await page.setValue(lastNameInput, value);
    }

    async enterEmail(email) {
        await page.setValue(emailInput, email);
    }

    async enterWebsite(site) {
        await page.setValue(websiteInput, site);
    }

    async clickSubmitBtn() {
        await page.clickElement(submitBtn);
    }

    async getMessage() {
        return await page.getElement(message);
    }

}
module.exports = new TalkExpert();