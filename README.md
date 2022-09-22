# WDIO-telnyx
Automation testing some parts of Telnyx site using WebdriverIO

# Requirements
Node.js version 14^

# Install
```
git clone https://github.com/Honest-Foxy/WDIO-telnyx
```
```
npm install
```

# Run
It possible to run on Chrome, Firefox and MicrosoftEdge
```
npm rum test:chrome:headless
```
```
npm run test:firefox:headless
```
```
npm run test:edge:headless
```

For run only one test (check the CEP page)
```
npm run test:chrome:headless:spec
```
You can change this test in the package.json