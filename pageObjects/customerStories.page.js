const page = require('./page');
const label = 'h1[class]';
const links = 'main a[href]';
const tryItFreeBtn = '//a[contains(text(),"Try it Free")]';

class CustomerSrories {

    async isLabelDisplayed() {
        return await page.isElementDisplayed(label)
    }

    async areLinksClickable() {
        let flag = true;
        for (let i = 0; i < 19; i++) {
            flag = await page.isElementClickableByIndex(links, i) ? flag : false;
        }
        return flag
    }

    async clickTryItFreeBtn() {
        await page.clickElement(tryItFreeBtn);
    }

}
module.exports = new CustomerSrories();