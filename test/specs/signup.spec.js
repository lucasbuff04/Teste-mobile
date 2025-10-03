const CadastroPage = require('../pages/cadastro.page');
const logger = require('loglevel');

describe('Cadastro - Cenários CT05 a CT07', () => {
    let cadastroPage;

    before(async () => {
        cadastroPage = new CadastroPage(browser);
    });

    it('CT05 - Deve realizar cadastro com dados válidos', async () => {
        await cadastroPage.acessarCadastro();
        await cadastroPage.preencherEmail('novo@usuario.com');
        await cadastroPage.preencherSenha('senha1234');
        await cadastroPage.preencherConfirmSenha('senha1234');
        await cadastroPage.clicarCadastrar();
        await cadastroPage.validarCadastroSucesso();
    });

    it('CT06 - Deve exibir erro quando senhas não coincidem', async () => {
        await cadastroPage.acessarCadastro();
        await cadastroPage.preencherEmail('novo@usuario.com');
        await cadastroPage.preencherSenha('senha1234');
        await cadastroPage.preencherConfirmSenha('senha4321');
        await cadastroPage.clicarCadastrar();
        await cadastroPage.validarErroSenhaDiferente();
    });

    it('CT07 - Deve exibir erro ao tentar cadastro com email inválido', async () => {
        await cadastroPage.acessarCadastro();
        await cadastroPage.preencherEmail('emailinvalido');
        await cadastroPage.preencherSenha('senha1234');
        await cadastroPage.preencherConfirmSenha('senha1234');
        await cadastroPage.clicarCadastrar();
        await cadastroPage.validarErroEmailInvalido();
    });

    it('CT08 - Deve exibir erro para senha fraca', async () => {
        await cadastroPage.acessarCadastro()
        await cadastroPage.preencherEmail('usuarioforca@test.com')
        await cadastroPage.preencherSenha('abcdef') 
        await cadastroPage.preencherConfirmSenha('abcdef')
        await cadastroPage.clicarCadastrar()
        await cadastroPage.validarErroSenhaFraca() 
    });

    it('CT09 - Deve exibir erro ao tentar cadastrar email já existente', async () => {
        await cadastroPage.acessarCadastro()
        await cadastroPage.preencherEmail('usuario_existente@test.com')
        await cadastroPage.preencherSenha('SenhaValida123!')
        await cadastroPage.preencherConfirmSenha('SenhaValida123!')
        await cadastroPage.clicarCadastrar()
        await cadastroPage.validarErroEmailExistente()
    });

    it('CT10 - Deve validar campos obrigatórios no cadastro', async () => {
        await cadastroPage.acessarCadastro()
        await cadastroPage.preencherEmail('')
        await cadastroPage.preencherSenha('')
        await cadastroPage.preencherConfirmSenha('')
        await cadastroPage.clicarCadastrar()
        await cadastroPage.validarErroCampoObrigatorioEmail()
        await cadastroPage.validarErroCampoObrigatorioSenha()
    })
});
