package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    final static Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//li[contains(text(),'Need an account?')]")
    WebElement loginPageText;

    @FindBy(xpath = "//input[@id='field-username']")
    WebElement emailIdField;

    @FindBy(xpath = "//input[@id='field-password']")
    WebElement passwordField;

    @FindBy(xpath = "//div[contains(text(),'Please try again, your username/email or password ')]")
    WebElement errorMessage;

    @FindBy(xpath = "//div[@class='geetest_radar']")
    WebElement verifyBtn;

    public String getTextFromLoginPage(){
        return getTextFromElement(loginPageText);
    }
    public void enterEmailId(String email) {
        log.info("Entering emailId : " + email + " To emailId field : " + emailIdField.toString());
        sendTextToElement(emailIdField, email);
    }
    public void enterPassword(String password) {
        log.info("Entering password : " + password + " to password field : " + passwordField.toString());
        sendTextToElement(passwordField, password);
    }
    public String getErrorMessage(){
        return getTextFromElement(errorMessage);
    }
    public void acceptVerification(){
        clickOnElement(verifyBtn);
    }
}
