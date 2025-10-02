exports.config = {
    runner: 'local',
    path: '/',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        platformVersion: '16',
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2',
        app: 'C:\\Users\\conta\\OneDrive\\Área de Trabalho\\finalTest\\android.wdio.native.app.v1.0.8.apk',
        noReset: true
    }],

    logLevel: 'info',

    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Hook para tirar screenshot em caso de falha
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    // Hook para logar informações do ambiente
    before: async function(capabilities, specs) {
        const deviceInfo = await browser.execute('mobile: deviceInfo', []);
        console.log('INFO DO AMBIENTE:', deviceInfo);
    }
};
