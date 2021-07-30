package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement loginLink;


    public void clickOnLoginLink(){
        log.info("Click on the login Link : "+ loginLink.toString());

        clickOnElement(loginLink);
        driver.manage().getCookies();
    }
}
