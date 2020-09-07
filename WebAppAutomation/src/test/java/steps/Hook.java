package steps;

/*
File Name : Hook
Description : It contains the code which is executed before and after execution like setting up driver, storing test restuls
 */

import common.CommonMethods;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import resources.GlobalData;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

// This class is used to run Before and After Method
public class Hook {

    public static WebDriver driver;

    private Scenario scenario;
    CommonMethods commonMethods = new CommonMethods();
    GlobalData globalData = new GlobalData();
    FileWriter htmlFileWriter;
    Boolean flagTestDataCreationScenario  = false;

    // Install the App and create the html results file
    @Before
    public void setup(Scenario scenario) throws Exception {

        this.scenario = scenario;
        commonMethods.fnLogInfo("********** Scenario START : " + scenario.getName() +" **********");
        if (scenario.getName().contains("API Test")){
            flagTestDataCreationScenario = true;
        }

        globalData.fnLoadProperties();
        Thread.sleep(1000);
        // Initialize the driver only when it is first scenario and it is not API Test. It is like BeforeSute condition

        if ((GlobalData.iTotalNumberOfScenarios == 0 ) && (!(flagTestDataCreationScenario))) {
            fnSetupDriver(GlobalData.globalprop.getProperty("AppBaseURL"));
        }
        htmlFileWriter=commonMethods.fnCreateFile(GlobalData.strHTMLResultsFile);
    }
    // After completion of Execution, take snapshot if failed and close driver
    @After
    public void tearDown() throws IOException {

        System.out.println("Browser is closed");
        commonMethods.fnLogInfo("############# Scenario END : " + scenario.getName() +" #############");

//        if (!(scenario.getName().contains("API Test"))) {
            commonMethods.fnLogInfo("$$$$$$$$$$$$$ Scenario STATUS : " + scenario.getStatus() + " $$$$$$$$$$$$$");
            GlobalData.iTotalNumberOfScenarios = GlobalData.iTotalNumberOfScenarios + 1;
            // Take Snapshot if test case is failed and it is not API Test
            if ((!scenario.getStatus().contains("passed")) && (!(scenario.getName().contains("API Test")))) {
                byte[] screenshot = ((TakesScreenshot) this.driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
                fnGetScreenshot();
                commonMethods.fnLogInfo("Snapshot Taken for : " + scenario.getName());
                GlobalData.iFailedNumberOfScenarios = GlobalData.iFailedNumberOfScenarios + 1;
            } else {
                GlobalData.iPassedNumberOfScenarios = GlobalData.iPassedNumberOfScenarios + 1;
            }

            // Write the results in resultant html file
            StringBuffer stringBufferResults = new StringBuffer();
            stringBufferResults.append("\n<!DOCTYPE html>");
            stringBufferResults.append("\n<html>");
            stringBufferResults.append("\n<body>");
            stringBufferResults.append("\n<h2 style=\"color:brown;\">*************** Test Results Summary START ***************</h2>");
            stringBufferResults.append("\n\n<h3 style=\"color:brown;\">Total Number of Executed Scenarios : " + GlobalData.iTotalNumberOfScenarios + "</h3>");
            stringBufferResults.append("\n<h3 style=\"color:brown;\">Total Number of Passed Scenarios     : " + GlobalData.iPassedNumberOfScenarios + "</h3>");
            stringBufferResults.append("\n<h3 style=\"color:brown;\">Total Number of Failed Scenarios     : " + GlobalData.iFailedNumberOfScenarios + "</h3>");
            stringBufferResults.append("\n<h3 style=\"color:brown;\">Total Number of Skipped Scenarios    : " + GlobalData.iSkippedNumberOfScenarios + "</h3>");
            stringBufferResults.append("\n\n<h2 style=\"color:brown;\">*************** Test Results Summary END ***************</h2>");

            stringBufferResults.append("\n</body>");
            stringBufferResults.append("\n</html>");
            commonMethods.fnWriteIntoFile(htmlFileWriter, stringBufferResults.toString());

            htmlFileWriter.close();
            commonMethods.fnLogInfo("results are written");
//            driver.close();
//            driver.quit();
//        }
    }

    // Function to Take screenshot
    public void fnGetScreenshot() throws IOException {
        File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyyy_HHmmss");
        Date date = new Date();
        String strDateTime = formatter.format(date);
        FileUtils.copyFile(file, new File("target\\Screenshots\\" + strDateTime + "Screenshot.jpg"));
    }


     // Function to Setup the Driver
    public static void fnSetupDriver(String strAppLocationURL) throws IOException, InterruptedException {
        String strChromeDriverLocation = "src\\main\\resources\\chromeDriver\\chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", strChromeDriverLocation);
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(GlobalData.iImplicitWaitTime, TimeUnit.SECONDS);
        driver.get(strAppLocationURL);
        System.out.println("Home Page URL is opened : " + strAppLocationURL);
    }
}
