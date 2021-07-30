package com.virgingames.stepdefs;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MyStepdefs {
    @Given("^I am on virgin game home page$")
    public void iAmOnVirginGameHomePage() {

    }

    @When("^I click on Login Link$")
    public void iClickOnLoginLink() throws InterruptedException {

        Thread.sleep(5000);
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully with title \"([^\"]*)\"$")
    public void iShouldNavigateToLoginPageSuccessfullyWithTitle(String expectedText) {
        Assert.assertTrue(new LoginPage().getTextFromLoginPage().contains(expectedText));
    }
}
