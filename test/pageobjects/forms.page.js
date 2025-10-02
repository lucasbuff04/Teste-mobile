// pages/form.page.js
const { $ } = require('webdriverio');
const { waitForElementVisible } = require('../utils/waits');

class FormPage {
    constructor(driver) {
        this.driver = driver;

        this.FORMS_PAGE = $('~Forms');
        this.FORMS_INPUT_FIELD = $('~text-input');
        this.FORMS_VALIDATION_TEXT = $('android=new UiSelector().text("TESTE TEXTO INPUT")');
        this.SWITCH_BUTTON = $('~switch');
        this.SWITCH_OFF_VALIDATION = $('android=new UiSelector().text("Click to turn the switch OFF")');
        this.SWITCH_ON_VALIDATION = $('android=new UiSelector().text("Click to turn the switch ON")');
        this.DROPDOWN_INPUT = $('~Dropdown');
        this.DROPDOWN_OPTION = $('android=new UiSelector().text("webdriver.io is awesome")');
        this.BUTTON_ACTIVE = $('~button-Active');
        this.BUTTON_ACTIVE_OK = $('#android:id/button1');
    }

    async acessarForms() {
        await waitForElementVisible(this.FORMS_PAGE);
        await this.FORMS_PAGE.click();
    }

    async escreverTexto(textoInput) {
        await waitForElementVisible(this.FORMS_INPUT_FIELD);
        await this.FORMS_INPUT_FIELD.setValue(textoInput);
    }

    async validarTexto() {
        await waitForElementVisible(this.FORMS_VALIDATION_TEXT);
    }

    async desativarSwitch() {
        await waitForElementVisible(this.SWITCH_BUTTON);
        await this.SWITCH_BUTTON.click();
    }

    async validarSwitchDesligado() {
        await waitForElementVisible(this.SWITCH_OFF_VALIDATION);
    }

    async ativarSwitch() {
        await waitForElementVisible(this.SWITCH_BUTTON);
        await this.SWITCH_BUTTON.click();
    }

    async validarSwitchAtivado() {
        await waitForElementVisible(this.SWITCH_ON_VALIDATION);
    }

    async acessarDropdown() {
        await waitForElementVisible(this.DROPDOWN_INPUT);
        await this.DROPDOWN_INPUT.click();
    }

    async dropdownOpcao1() {
        await waitForElementVisible(this.DROPDOWN_OPTION);
        await this.DROPDOWN_OPTION.click();
    }

    async botaoActive() {
        await waitForElementVisible(this.BUTTON_ACTIVE);
        await this.BUTTON_ACTIVE.click();
    }

    async activeOk() {
        await waitForElementVisible(this.BUTTON_ACTIVE_OK);
        await this.BUTTON_ACTIVE_OK.click();
    }
}

module.exports = FormPage;
