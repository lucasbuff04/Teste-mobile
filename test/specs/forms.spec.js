// tests/form.spec.js
const LoginPage = require('../pages/login.page');
const FormPage = require('../pages/form.page');
const logger = require('loglevel');

describe('Form - Cenários CT08 a CT10', () => {
    let loginPage;
    let formPage;

    before(async () => {
        loginPage = new LoginPage(browser);
        formPage = new FormPage(browser);
    });

    it('CT08 - Deve preencher campo de texto e validar resultado', async () => {
        await loginPage.acessarLogin();
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('senha1234');
        await loginPage.clicarAcessar();
        await loginPage.validarMensagemSucesso();

        await formPage.acessarForms();
        await formPage.escreverTexto('Teste automatizado');
        await formPage.validarTexto();
    });

    it('CT09 - Deve alternar switch e validar mudança de estado', async () => {
        await loginPage.acessarLogin();
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('senha1234');
        await loginPage.clicarAcessar();
        await loginPage.validarMensagemSucesso();

        await formPage.acessarForms();
        await formPage.ativarSwitch();
        await formPage.validarSwitchAtivado();
        await formPage.desativarSwitch();
        await formPage.validarSwitchDesligado();
    });

    it('CT10 - Deve validar interação com botões Active/Inactive', async () => {
        await loginPage.acessarLogin();
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('senha1234');
        await loginPage.clicarAcessar();
        await loginPage.validarMensagemSucesso();

        await formPage.acessarForms();
        await formPage.botaoActive();
        await formPage.activeOk();
    });
});
