package resources;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class GlobalData {

    // This file contains the global data which is used by many files in framework
    public static Properties globalprop = new Properties();
    public static int iTotalNumberOfScenarios=0;
    public static int iPassedNumberOfScenarios=0;
    public static int iFailedNumberOfScenarios=0;
    public static int iSkippedNumberOfScenarios=0;
    public static int iImplicitWaitTime;
    public static String strPlatformName;
    public static String strHTMLResultsFile;
    public static String strTestDataFile;
    public static String strAPIBaseURL;

    //load config properties
    public void fnLoadProperties(){
        try (InputStream input = new FileInputStream("src/main/resources/config.properties")) {
            globalprop.load(input);
            strPlatformName=globalprop.getProperty("PLATFORM_NAME");
            strHTMLResultsFile=globalprop.getProperty("HTMLResultsFile");
            strTestDataFile =globalprop.getProperty("TestDataFile");
            iImplicitWaitTime =Integer.valueOf(globalprop.getProperty("implicitWaitTime"));
            strAPIBaseURL=globalprop.getProperty("APIBaseURL");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
