# WebdriverIO + Appium - Native Demo App (Automação Mobile)

Projeto de automação de testes mobile utilizando WebdriverIO e Appium para testar o aplicativo nativo de demonstração do WebdriverIO.

## 🎯 Início Rápido

**Novo no projeto?** Comece aqui:

- 📖 **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Guia completo passo a passo para configurar o ambiente (recomendado para iniciantes)
- ⚡ **[QUICK_START.md](./QUICK_START.md)** - Guia rápido com comandos diretos (para usuários experientes)

---

## 📋 Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Relatórios](#relatórios)
- [BrowserStack](#browserstack)
- [CI/CD](#cicd)
- [Cenários de Teste](#cenários-de-teste)

## 🚀 Tecnologias Utilizadas

- **Linguagem**: JavaScript (Node.js)
- **Framework de Automação**: WebdriverIO v8
- **Biblioteca de Automação Mobile**: Appium v2
- **Framework de Testes**: Mocha
- **Biblioteca de Asserções**: Chai
- **Relatórios**: Allure Report
- **CI/CD**: GitLab CI/CD
- **Cloud Testing**: BrowserStack (opcional)
- **Controle de Versão**: Git

## 📦 Pré-requisitos

### Requisitos Gerais

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Para Testes Android

- Java JDK 11 ou superior
- Android Studio
- Android SDK
- Emulador Android configurado ou dispositivo físico

### Para Testes iOS (apenas macOS)

- Xcode (versão 14 ou superior)
- Xcode Command Line Tools
- iOS Simulator
- Homebrew (recomendado)

## 🔧 Instalação

### 1. Clone o repositório

\`\`\`bash
git clone <seu-repositorio>
cd webdriverio-appium-mobile-automation
\`\`\`

### 2. Instale as dependências

\`\`\`bash
npm install
\`\`\`

### 3. Instale o Appium globalmente

\`\`\`bash
npm install -g appium
\`\`\`

### 4. Instale os drivers do Appium

Para Android:
\`\`\`bash
appium driver install uiautomator2
\`\`\`

Para iOS:
\`\`\`bash
appium driver install xcuitest
\`\`\`

### 5. Verifique a instalação do Appium

\`\`\`bash
appium driver list
\`\`\`

> **💡 Dica**: Para instruções detalhadas de instalação e configuração, consulte o [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## ⚙️ Configuração do Ambiente

### Configuração Android

1. **Instale o Android Studio** e configure o Android SDK

2. **Configure as variáveis de ambiente**:

\`\`\`bash
# Adicione ao seu ~/.bashrc, ~/.zshrc ou equivalente
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
# export ANDROID_HOME=$HOME/Android/Sdk  # Linux
# export ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk  # Windows

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
\`\`\`

3. **Crie um emulador Android**:

\`\`\`bash
# Liste os AVDs disponíveis
avdmanager list avd

# Crie um novo AVD (se necessário)
avdmanager create avd -n "Android_Emulator" -k "system-images;android-33;google_apis;x86_64"
\`\`\`

4. **Inicie o emulador**:

\`\`\`bash
emulator -avd Android_Emulator
\`\`\`

### Configuração iOS (macOS apenas)

1. **Instale o Xcode** pela App Store

2. **Instale as Command Line Tools**:

\`\`\`bash
xcode-select --install
\`\`\`

3. **Aceite a licença do Xcode**:

\`\`\`bash
sudo xcodebuild -license accept
\`\`\`

4. **Verifique os simuladores disponíveis**:

\`\`\`bash
xcrun simctl list devices
\`\`\`

> **💡 Dica**: Para instruções detalhadas de configuração do ambiente Android e iOS, consulte o [SETUP_GUIDE.md](./SETUP_GUIDE.md)

### Adicione os Aplicativos

Você precisa dos seguintes arquivos:
- `android.wdio.native.app.v1.0.8.apk` (para testes Android)
- `ios.simulator.wdio.native.app.v1.0.8.zip` (para testes iOS)

Crie uma pasta `apps` na raiz do projeto e adicione os arquivos:

\`\`\`bash
# Crie a pasta apps
mkdir apps

# Copie o APK do Android
cp /caminho/para/android.wdio.native.app.v1.0.8.apk ./apps/

# Extraia e copie o app do iOS
unzip ios.simulator.wdio.native.app.v1.0.8.zip
cp -r WebDriverIOTestApp.app ./apps/
\`\`\`

Estrutura esperada:
\`\`\`
apps/
├── android.wdio.native.app.v1.0.8.apk
└── WebDriverIOTestApp.app/
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
webdriverio-appium-mobile-automation/
├── config/                          # Configurações do WebdriverIO
│   ├── wdio.base.conf.js           # Configuração base
│   ├── wdio.shared.conf.js         # Configuração compartilhada
│   ├── wdio.android.conf.js        # Configuração Android
│   ├── wdio.ios.conf.js            # Configuração iOS
│   ├── wdio.browserstack.android.conf.js
│   └── wdio.browserstack.ios.conf.js
├── test/
│   ├── pageobjects/                # Page Objects (padrão POM)
│   │   ├── base.page.js           # Classe base
│   │   ├── login.page.js          # Page Object de Login
│   │   ├── signup.page.js         # Page Object de Cadastro
│   │   ├── forms.page.js          # Page Object de Formulários
│   │   ├── home.page.js           # Page Object Home
│   │   └── webview.page.js        # Page Object WebView
│   ├── specs/                      # Casos de teste
│   │   ├── 01-login.spec.js
│   │   ├── 02-signup.spec.js
│   │   ├── 03-forms.spec.js
│   │   └── 04-navigation.spec.js
│   └── data/                       # Dados de teste (data-driven)
│       ├── users.json
│       └── forms.json
├── apps/                           # Aplicativos mobile
│   ├── android.wdio.native.app.v1.0.8.apk
│   └── WebDriverIOTestApp.app/
├── allure-results/                 # Resultados dos testes (gerado)
├── allure-report/                  # Relatório Allure (gerado)
├── screenshots/                    # Screenshots (gerado)
├── logs/                           # Logs do Appium (gerado)
├── .gitlab-ci.yml                  # Pipeline CI/CD
├── .gitignore
├── package.json
└── README.md
\`\`\`

## 🧪 Executando os Testes

### Inicie o servidor Appium

Em um terminal separado:

\`\`\`bash
appium
\`\`\`

O Appium iniciará na porta 4723 por padrão.

### Execute os testes

**Android**:
\`\`\`bash
npm run test:android
\`\`\`

**iOS**:
\`\`\`bash
npm run test:ios
\`\`\`

**BrowserStack Android** (requer configuração):
\`\`\`bash
npm run test:browserstack:android
\`\`\`

**BrowserStack iOS** (requer configuração):
\`\`\`bash
npm run test:browserstack:ios
\`\`\`

## 📊 Relatórios

### Allure Report

Após executar os testes, gere o relatório Allure:

\`\`\`bash
npm run allure:report
\`\`\`

Isso irá:
1. Gerar o relatório a partir dos resultados
2. Abrir automaticamente o relatório no navegador

Para apenas gerar o relatório sem abrir:

\`\`\`bash
npm run allure:generate
\`\`\`

Para abrir um relatório já gerado:

\`\`\`bash
npm run allure:open
\`\`\`

### Screenshots

Screenshots são capturados automaticamente:
- Em caso de falha de teste
- Salvos na pasta `screenshots/`
- Incluídos no relatório Allure

## ☁️ BrowserStack

### Configuração

1. **Crie uma conta** no [BrowserStack](https://www.browserstack.com/)

2. **Configure as variáveis de ambiente**:

\`\`\`bash
export BROWSERSTACK_USERNAME="seu_username"
export BROWSERSTACK_ACCESS_KEY="sua_access_key"
\`\`\`

3. **Faça upload dos aplicativos**:

\`\`\`bash
# Android
curl -u "USERNAME:ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@apps/android.wdio.native.app.v1.0.8.apk"

# iOS
curl -u "USERNAME:ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@apps/ios.simulator.wdio.native.app.v1.0.8.zip"
\`\`\`

4. **Configure a URL do app**:

\`\`\`bash
export BROWSERSTACK_APP_URL_ANDROID="bs://seu_app_id_android"
export BROWSERSTACK_APP_URL_IOS="bs://seu_app_id_ios"
\`\`\`

5. **Execute os testes**:

\`\`\`bash
npm run test:browserstack:android
npm run test:browserstack:ios
\`\`\`

## 🔄 CI/CD

### GitLab CI/CD

O projeto inclui um pipeline GitLab CI/CD configurado (`.gitlab-ci.yml`) com os seguintes estágios:

#### Estágios

1. **test**: Executa os testes
   - `test:android` - Testes Android em emulador
   - `test:ios` - Testes iOS em simulador (requer runner macOS)
   - `test:browserstack:android` - Testes Android no BrowserStack (manual)
   - `test:browserstack:ios` - Testes iOS no BrowserStack (manual)

2. **report**: Gera relatórios
   - `generate:report` - Gera relatório Allure

#### Configuração no GitLab

1. **Adicione as variáveis de ambiente** em Settings > CI/CD > Variables:
   - `BROWSERSTACK_USERNAME`
   - `BROWSERSTACK_ACCESS_KEY`
   - `BROWSERSTACK_APP_URL_ANDROID`
   - `BROWSERSTACK_APP_URL_IOS`

2. **Configure os runners**:
   - Runner Linux para testes Android
   - Runner macOS para testes iOS (com tag `macos`)

3. **Artefatos**:
   - Screenshots e relatórios são salvos como artefatos
   - Disponíveis por 30 dias após a execução

## 📝 Cenários de Teste

### CT01 - Login com credenciais válidas
**Objetivo**: Validar login bem-sucedido  
**Passos**: Preencher email e senha válidos, clicar em Login  
**Resultado Esperado**: Mensagem de sucesso exibida

### CT02 - Login com email vazio
**Objetivo**: Validar mensagem de erro  
**Passos**: Deixar email vazio, preencher senha, clicar em Login  
**Resultado Esperado**: Mensagem de erro exibida

### CT03 - Login com senha vazia
**Objetivo**: Validar mensagem de erro  
**Passos**: Preencher email, deixar senha vazia, clicar em Login  
**Resultado Esperado**: Mensagem de erro exibida

### CT04 - Login com credenciais inválidas
**Objetivo**: Validar rejeição de credenciais incorretas  
**Passos**: Preencher email e senha inválidos, clicar em Login  
**Resultado Esperado**: Mensagem de erro exibida

### CT05 - Cadastro com dados válidos
**Objetivo**: Validar cadastro bem-sucedido  
**Passos**: Preencher todos os campos corretamente, clicar em Sign Up  
**Resultado Esperado**: Mensagem de sucesso exibida

### CT06 - Cadastro com senhas diferentes
**Objetivo**: Validar validação de confirmação de senha  
**Passos**: Preencher senhas diferentes, clicar em Sign Up  
**Resultado Esperado**: Mensagem de erro exibida

### CT07 - Cadastro com email inválido
**Objetivo**: Validar validação de formato de email  
**Passos**: Preencher email inválido, clicar em Sign Up  
**Resultado Esperado**: Mensagem de erro exibida

### CT08 - Cadastro com senha fraca
**Objetivo**: Validar rejeição de senha que não atende requisitos mínimos  
**Passos**: Preencher email válido, senha fraca (ex.: apenas letras), clicar em Sign Up  
**Resultado Esperado**: Mensagem de erro exibida informando senha fraca

### CT09 - Cadastro com email já existente
**Objetivo**: Validar tentativa de cadastro com email duplicado  
**Passos**: Preencher email já cadastrado, senha válida, clicar em Sign Up  
**Resultado Esperado**: Mensagem de erro exibida informando email já existente

### CT10 - Cadastro com campos obrigatórios vazios
**Objetivo**: Validar obrigatoriedade dos campos no cadastro  
**Passos**: Deixar email e senha vazios, clicar em Sign Up  
**Resultado Esperado**: Mensagem de erro exibida indicando obrigatoriedade dos campos

### CT11 - Preenchimento de formulário de texto
**Objetivo**: Validar entrada de texto no formulário  
**Passos**: Acessar Forms, preencher campo de texto com um valor (ex.: "Teste automatizado") e salvar/confirmar  
**Resultado Esperado**: Texto exibido/gravado corretamente

### CT12 - Alternância de switch
**Objetivo**: Validar mudança de estado do switch  
**Passos**: Acessar Forms, ativar o switch e verificar estado; desativar e verificar novamente  
**Resultado Esperado**: Estado alterado corretamente nas duas direções

### CT13 - Interação com botões Active/Inactive
**Objetivo**: Validar resposta dos botões Active e Inactive  
**Passos**: Acessar Forms, clicar no botão Active e validar comportamento (ex.: confirmação), clicar no Inactive se aplicável  
**Resultado Esperado**: Botões respondem corretamente aos cliques e ações esperadas ocorrem


## 🐛 Troubleshooting

### Appium não inicia
\`\`\`bash
# Verifique se a porta 4723 está livre
lsof -i :4723

# Mate o processo se necessário
kill -9 <PID>
\`\`\`

### Emulador Android não conecta
\`\`\`bash
# Liste dispositivos conectados
adb devices

# Reinicie o ADB server
adb kill-server
adb start-server
\`\`\`

### Simulador iOS não encontrado
\`\`\`bash
# Liste simuladores disponíveis
xcrun simctl list devices

# Abra o simulador
open -a Simulator
\`\`\`

### Erro de permissões no macOS
\`\`\`bash
# Dê permissões ao terminal
System Preferences > Security & Privacy > Privacy > Automation
\`\`\`

> **💡 Dica**: Para soluções detalhadas de problemas comuns, consulte a seção de Troubleshooting no [SETUP_GUIDE.md](./SETUP_GUIDE.md#8-troubleshooting)

## 📚 Recursos Adicionais

- [Documentação WebdriverIO](https://webdriver.io/)
- [Documentação Appium](https://appium.io/)
- [Documentação Allure](https://docs.qameta.io/allure/)
- [BrowserStack App Automate](https://www.browserstack.com/app-automate)
- [Guia de Configuração Completo](./SETUP_GUIDE.md)
- [Guia de Início Rápido](./QUICK_START.md)

## 👥 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido para automação de testes mobile com WebdriverIO + Appium** 🚀
