// pages/login.page.js
const { $ } = require('webdriverio');
const { waitForElementVisible } = require('../utils/waits');

class LoginPage {
    constructor(driver) {
        this.driver = driver;

        this.LOGIN_PAGE = $('~Login');
        this.EMAIL_INPUT = $('~input-email');
        this.PASSWORD_INPUT = $('~input-password');
        this.LOGIN_ACCESS_BUTTON = $('android=new UiSelector().className("android.view.ViewGroup").instance(16)');
        this.SUCCESS_LOGIN_MESSAGE = $('#android:id/content');
        this.FAIL_EMAIL_MESSAGE = $('android=new UiSelector().text("Please enter a valid email address")');
        this.FAIL_PASSWORD_MESSAGE = $('android=new UiSelector().text("Please enter at least 8 characters")');
        this.FAIL_CREDENTIALS_MESSAGE = $('android=new UiSelector().text("Invalid credentials")'); // placeholder se existir
    }

    async acessarLogin() {
        await waitForElementVisible(this.LOGIN_PAGE);
        await this.LOGIN_PAGE.click();
    }

    async preencherEmail(email) {
        await waitForElementVisible(this.EMAIL_INPUT);
        await this.EMAIL_INPUT.setValue(email);
    }

    async preencherSenha(senha) {
        await waitForElementVisible(this.PASSWORD_INPUT);
        await this.PASSWORD_INPUT.setValue(senha);
    }

    async clicarAcessar() {
        await waitForElementVisible(this.LOGIN_ACCESS_BUTTON);
        await this.LOGIN_ACCESS_BUTTON.click();
    }

    async validarMensagemSucesso() {
        await waitForElementVisible(this.SUCCESS_LOGIN_MESSAGE);
    }

    async validarMensagemErroEmail() {
        await waitForElementVisible(this.FAIL_EMAIL_MESSAGE);
    }

    async validarMensagemErroSenha() {
        await waitForElementVisible(this.FAIL_PASSWORD_MESSAGE);
    }

    async validarMensagemCredenciaisInvalidas() {
        await waitForElementVisible(this.FAIL_CREDENTIALS_MESSAGE);
    }
}

module.exports = LoginPage;
