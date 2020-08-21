/*
File Name : CommonMethods.java
Description : It contains the general common functions which can be used in any automation
 */
package common;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import resources.GlobalData;

import java.io.*;

public class CommonMethods {
    GlobalData globalData = new GlobalData();
    //public static FileWriter writer;
    public String strResultsFile = GlobalData.strHTMLResultsFile;

    public static final Logger logger = LogManager.getLogger(CommonMethods.class);

    public static void fnLogInfo(String strToLog) {
        logger.info(strToLog);
    }  //log info

    public static void fnLogWarn(String strToLog) {
        logger.warn(strToLog);
    } //log warning

    public static void fnLogError(String strToLog) {
        logger.error(strToLog);
    } //log Error

    public static void fnLogDebug(String strToLog) {
        logger.debug(strToLog);
    } //log Debug Message


    //This method is to create the results summary file
    public  FileWriter fnCreateFile(String strFile) throws IOException {
        try {
            File checkFileLocation = new File(strFile);
            Boolean flagFileExist = checkFileLocation.exists();
            // Delete the file if it already exist
            if (flagFileExist) {
                checkFileLocation.delete();
            }
            FileWriter writer = new FileWriter(strFile, true);
            return writer;
        } catch (Exception e) {
            Assert.assertTrue("File could not be created : " + e.getMessage(), 1 == 2);
            return  null;
        }
    }

    //This method is used to write the results in summary file
    public  void fnWriteIntoFile(FileWriter writer,String strResults) throws IOException {
        try {
           // writer.write("\r\n");   // write new line
            writer.write(strResults);
        }
        catch (IOException e) {
        Assert.assertTrue("Results could not be writtne due to exception :  " + e.getMessage(), 1 == 2);
        }
    }

}
