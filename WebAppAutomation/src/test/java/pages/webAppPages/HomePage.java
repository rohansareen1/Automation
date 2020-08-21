package pages.webAppPages;
/*
File Name : HomePage
Description : It contains all the objects and methods for Home Page
 */
import common.CommonMethods;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import steps.Hook;

public class HomePage extends Hook {

    CommonMethods commonMethods = new CommonMethods();
    Hook hook = new Hook();

    WebElement txtBoxNumber1 = driver.findElement(By.id("num1"));
    WebElement txtBoxNumber2 = driver.findElement(By.id("num2"));
    WebElement btnSum = driver.findElement(By.xpath("//button[@type='submit']"));
    WebElement lableResult = driver.findElement(By.xpath("//p[contains(text(),'Sum:')]"));

    //  ***** All Elements Defined ******

    // Function to check whether Home page is displayed or not
    public void fnIsHomePageDisplayed() {
        Assert.assertTrue(txtBoxNumber1.isEnabled());
        Assert.assertTrue(txtBoxNumber2.isEnabled());
        Assert.assertTrue(btnSum.isEnabled());
        Assert.assertTrue(lableResult.isEnabled());
        commonMethods.fnLogInfo("Testing App Home Page is displayed");
    }

    // Function to Enter First Number
    public void fnEnterFirstNumber(String strFirstNumber) {
        txtBoxNumber1.clear();
        txtBoxNumber1.sendKeys(strFirstNumber);
        commonMethods.fnLogInfo("First Number is entered");
    }

    // Function to Enter Second Number
    public void fnEnterSecondNumber(String strFirstNumber) {
        txtBoxNumber2.clear();
        txtBoxNumber2.sendKeys(strFirstNumber);
        commonMethods.fnLogInfo("Second Number is entered");
    }

    // Function to Click on Sum Button
    public void fnClickOnSumButton() {
        btnSum.click();
        commonMethods.fnLogInfo("Sum Button is Clicked");
    }

    // Function to verify the result
    public void fnVerifyResult(String strExpectedResult) {
        WebElement lableResult = driver.findElement(By.xpath("//p[contains(text(),'Sum:')]"));
        String strActualString = lableResult.getText();
        String strActualResult[] = strActualString.split(":"); //Split to get number from actual result string
        commonMethods.fnLogInfo("Expected Result : " + strExpectedResult);
        commonMethods.fnLogInfo("Actual Result :" + strActualResult[1].trim());
        Assert.assertEquals(strExpectedResult, strActualResult[1].trim()); //Make Test fail if it is not matched
    }

}
