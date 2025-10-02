// pages/cadastro.page.js
const { $ } = require('webdriverio');
const { waitForElementVisible } = require('../utils/waits');

class CadastroPage {
    constructor(driver) {
        this.driver = driver;

        this.CADASTRO_PAGE = $('~Cadastro');
        this.EMAIL_INPUT = $('~input-email');
        this.PASSWORD_INPUT = $('~input-password');
        this.CONFIRM_PASSWORD_INPUT = $('~input-confirm-password');
        this.REGISTER_BUTTON = $('~button-register');
        this.SUCCESS_MESSAGE = $('android=new UiSelector().text("Cadastro realizado com sucesso")');
        this.ERROR_PASSWORD_MISMATCH = $('android=new UiSelector().text("As senhas não coincidem")');
        this.ERROR_EMAIL_INVALID = $('android=new UiSelector().text("Email inválido")');
    }

    async acessarCadastro() {
        await waitForElementVisible(this.CADASTRO_PAGE);
        await this.CADASTRO_PAGE.click();
    }

    async preencherEmail(email) {
        await waitForElementVisible(this.EMAIL_INPUT);
        await this.EMAIL_INPUT.setValue(email);
    }

    async preencherSenha(senha) {
        await waitForElementVisible(this.PASSWORD_INPUT);
        await this.PASSWORD_INPUT.setValue(senha);
    }

    async preencherConfirmSenha(senha) {
        await waitForElementVisible(this.CONFIRM_PASSWORD_INPUT);
        await this.CONFIRM_PASSWORD_INPUT.setValue(senha);
    }

    async clicarCadastrar() {
        await waitForElementVisible(this.REGISTER_BUTTON);
        await this.REGISTER_BUTTON.click();
    }

    async validarCadastroSucesso() {
        await waitForElementVisible(this.SUCCESS_MESSAGE);
    }

    async validarErroSenhaDiferente() {
        await waitForElementVisible(this.ERROR_PASSWORD_MISMATCH);
    }

    async validarErroEmailInvalido() {
        await waitForElementVisible(this.ERROR_EMAIL_INVALID);
    }
}

module.exports = CadastroPage;
