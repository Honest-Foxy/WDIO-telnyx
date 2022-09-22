class Page {

    async openPage(url) {
        await browser.url(url);
    }

    async getElement(element) {
        return await $(element);
    }

    async clickElement(element, flag = true) {
        if (flag) {
            await this.scrollTo(element);
            await this.waitUntilElementDisplated(element);
        }
        await (await this.getElement(element)).click();
    }

    async getElementByIndex(element, index) {
        return (await $$(element))[index];
    }

    async isElementClickableByIndex(element, index) {
        return await (await this.getElementByIndex(element, index)).isClickable();
    }

    async isElementDisplayed(element, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        return await (await this.getElement(element)).isDisplayed();
    }

    async isElementClickable(element) {
        return await (await this.getElement(element)).isClickable();
    }

    async waitUntilElementDisplated(element) {
        await browser.waitUntil(
            async () => await (await this.getElement(element)).isDisplayed(),
            {
                timeout: 30000,
                timeoutMsg: 'expected element should be displayed after 30s'
            }
        )
    }

    async setValue(element, value, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        await (await this.getElement(element)).setValue(value);
    }

    async scrollTo(element) {
        await (await this.getElement(element)).scrollIntoView();
    }

    async getAttr(element, attribute) {
        return await (await this.getElement(element)).getAttribute(attribute);
    }

    async openByHref(element) {
        await this.openPage(await this.getAttr(element, 'href'));
    }

    async isElementEnabled(element) {
        return await (await this.getElement(element)).isEnabled();
    }

}
module.exports = new Page();