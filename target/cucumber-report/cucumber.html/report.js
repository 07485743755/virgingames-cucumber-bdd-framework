$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login in to virgin game website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3763786500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on virgin game home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully with title \"Need an account?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnVirginGameHomePage()"
});
formatter.result({
  "duration": 100452100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 5249998300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Need an account?",
      "offset": 57
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfullyWithTitle(String)"
});
formatter.result({
  "duration": 10124899400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(text(),\u0027Need an account?\u0027)]\"}\n  (Session info: chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7FSFVSR\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\Nidhi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58941}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b12457314cbab3aa501b1885aaa3452f\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(text(),\u0027Need an account?\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.virgingames.utility.Utility.getTextFromElement(Utility.java:52)\r\n\tat com.virgingames.pages.LoginPage.getTextFromLoginPage(LoginPage.java:29)\r\n\tat com.virgingames.stepdefs.MyStepdefs.iShouldNavigateToLoginPageSuccessfullyWithTitle(MyStepdefs.java:24)\r\n\tat ???.Then I should navigate to login page successfully with title \"Need an account?\"(src/test/java/resources/featureFile/login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 317788100,
  "status": "passed"
});
});