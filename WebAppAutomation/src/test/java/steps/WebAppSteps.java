package steps;
/*
File Name : WebAppSteps
Description : It contains the steps definition of the Web Apps
 */

import common.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.webAppPages.HomePage;

public class WebAppSteps {
    HomePage homePage = new HomePage();
    CommonMethods commonMethods = new CommonMethods();

    @Given("^user is on Home Page of Web Application$")
    public void userIsOnHomePageOfWebApplication() {
        homePage.fnIsHomePageDisplayed();
    }

    @When("^user enters first number as \"([^\"]*)\"$")
    public void userEntersFirstNumberAs(String strFirstNumber) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homePage.fnEnterFirstNumber(strFirstNumber);
    }

    @When("^user enters second number as \"([^\"]*)\"$")
    public void userEntersSecondNumberAs(String strSecondNumber) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homePage.fnEnterSecondNumber(strSecondNumber);
    }

    @When("^user clicks on Sum Button$")
    public void userClicksOnSumButton() {
        homePage.fnClickOnSumButton();
    }

    @Then("^result of addition should be displayed as \"([^\"]*)\"$")
    public void resultOfAdditionShouldBeDisplayedAs(String strExpectedResult) throws Throwable {
        homePage.fnVerifyResult(strExpectedResult);
    }
}
