# ⚡ Quick Start - Guia Rápido
## 🎯 Checklist Rápido

\`\`\`bash
# 1. Verificar pré-requisitos
node --version        # v18+
java -version         # JDK 11+
adb --version         # Android SDK instalado
echo $ANDROID_HOME    # Variável configurada

# 2. Instalar Appium e drivers
npm install -g appium
appium driver install uiautomator2

# 3. Verificar configuração
appium-doctor --android

# 4. Configurar projeto
npm install
mkdir apps

# 5. Adicionar apps de teste
cp android.wdio.native.app.v1.0.8.apk ./apps/
cp -r WebDriverIOTestApp.app ./apps/

# 6. Iniciar Appium (Terminal 1)
appium

# 7. Iniciar emulador (Terminal 2)
emulator -avd Pixel_6_API_33  # Android

# 8. Executar testes (Terminal 3)
npm run test:android

# 9. Ver relatório
npm run report
\`\`\`

---

## 🚀 Comandos Principais

### Testes

\`\`\`bash
# Android
npm run test:android                                    # Todos os testes
npm run test:android -- --spec=test/specs/login.spec.js  # Teste específico


### Relatórios

\`\`\`bash
npm run report              # Gerar e abrir relatório Allure
npm run allure:generate     # Apenas gerar
npm run allure:open         # Apenas abrir
npm run allure:clean        # Limpar relatórios antigos
\`\`\`

### Desenvolvimento

\`\`\`bash
npm run lint                # Verificar código
npm run lint:fix            # Corrigir problemas automaticamente
\`\`\`

---

## 📱 Emuladores

### Android

\`\`\`bash
# Listar AVDs
emulator -list-avds

# Iniciar
emulator -avd NOME_DO_AVD

# Dispositivos conectados
adb devices

# Instalar app manualmente
adb install apps/android.wdio.native.app.v1.0.8.apk
\`\`\`

---

## 🔧 Troubleshooting Rápido

### Appium não inicia
\`\`\`bash
# Verificar se porta 4723 está livre
netstat -ano | findstr :4723

# Matar processo
kill -9 PID
\`\`\`

### Emulador não conecta
\`\`\`bash
# Reiniciar ADB
adb kill-server
adb start-server
adb devices
\`\`\`

### Testes falhando
\`\`\`bash
# Ver logs do Appium
appium --log-level debug

# Ver logs do dispositivo
adb logcat  # Android
\`\`\`

### Limpar ambiente
\`\`\`bash
# Limpar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpar relatórios
npm run allure:clean
\`\`\`

---

## 📁 Estrutura do Projeto

\`\`\`
webdriverio-appium-native-demo/
├── apps/                           # Apps de teste (APK/APP)
├── config/                         # Configurações WebdriverIO
│   ├── wdio.android.conf.js       # Config Android local
│   ├── wdio.ios.conf.js           # Config iOS local
│   └── wdio.browserstack.*.conf.js # Config BrowserStack
├── test/
│   ├── pageobjects/               # Page Objects
│   ├── specs/                     # Cenários de teste
│   ├── data/                      # Dados de teste (JSON)
│   └── utils/                     # Utilitários
├── allure-results/                # Resultados dos testes
├── allure-report/                 # Relatório HTML
└── screenshots/                   # Screenshots de falhas
\`\`\`

---

## 🌐 BrowserStack (Opcional)

1. Crie conta: https://www.browserstack.com/
2. Pegue suas credenciais em Account > Settings
3. Configure variáveis de ambiente:

\`\`\`bash
export BROWSERSTACK_USERNAME="seu_usuario"
export BROWSERSTACK_ACCESS_KEY="sua_chave"
\`\`\`

4. Faça upload dos apps:

\`\`\`bash
curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@apps/android.wdio.native.app.v1.0.8.apk"
\`\`\`

5. Copie o `app_url` retornado e adicione ao `.env`:

\`\`\`
BROWSERSTACK_APP_URL_ANDROID=bs://abc123...
\`\`\`

6. Execute:

\`\`\`bash
npm run test:browserstack:android
\`\`\`

---

## 🔄 CI/CD GitLab

O projeto já vem com `.gitlab-ci.yml` configurado. Para usar:

1. Faça push do projeto para o GitLab
2. Configure as variáveis no GitLab CI/CD Settings:
   - `BROWSERSTACK_USERNAME`
   - `BROWSERSTACK_ACCESS_KEY`
   - `BROWSERSTACK_APP_URL_ANDROID`
   - `BROWSERSTACK_APP_URL_IOS`

3. O pipeline executará automaticamente em cada push

---
