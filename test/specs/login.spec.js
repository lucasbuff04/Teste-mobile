// tests/login.spec.js
const LoginPage = require('../pages/login.page');
const logger = require('loglevel');

describe('Login - Cenários de Teste', () => {
    let loginPage;

    before(async () => {
        loginPage = new LoginPage(browser);
    });

    it('CT01 - Deve realizar login com credenciais válidas', async () => {
        logger.info("Acessando login");
        await loginPage.acessarLogin();
        logger.info("Preenchendo email e senha válidos");
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('senha1234');
        await loginPage.clicarAcessar();
        logger.info("Validando sucesso de login");
        await loginPage.validarMensagemSucesso();
    });

    it('CT02 - Deve exibir erro ao tentar login com email vazio', async () => {
        logger.info("Acessando login");
        await loginPage.acessarLogin();
        logger.info("Email vazio, preenchendo apenas senha");
        await loginPage.preencherEmail('');
        await loginPage.preencherSenha('senha1234');
        await loginPage.clicarAcessar();
        logger.info("Validando mensagem de erro de email");
        await loginPage.validarMensagemErroEmail();
    });

    it('CT03 - Deve exibir erro ao tentar login com senha vazia', async () => {
        logger.info("Acessando login");
        await loginPage.acessarLogin();
        logger.info("Senha vazia, preenchendo apenas email");
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('');
        await loginPage.clicarAcessar();
        logger.info("Validando mensagem de erro de senha");
        await loginPage.validarMensagemErroSenha();
    });

    it('CT04 - Deve exibir erro ao tentar login com credenciais inválidas', async () => {
        logger.info("Acessando login");
        await loginPage.acessarLogin();
        logger.info("Preenchendo email e senha inválidos");
        await loginPage.preencherEmail('usuario@test.com');
        await loginPage.preencherSenha('senhaErrada');
        await loginPage.clicarAcessar();
        logger.info("Validando mensagem de credenciais inválidas");
        await loginPage.validarMensagemCredenciaisInvalidas();
    });
});
