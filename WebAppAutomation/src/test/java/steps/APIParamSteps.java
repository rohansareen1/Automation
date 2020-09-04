package steps;

import common.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import resources.GlobalData;

import java.io.FileWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class APIParamSteps {

    Hook hook = new Hook();

    public static Map<String, String> headerMap = new HashMap<>();
    public static Map<String, String> parameterMap = new HashMap<>();
    public static Response response;
    FileWriter testDataFileWriter;


    CommonMethods commonMethods = new CommonMethods();
    StringBuffer stringBufferTestData = new StringBuffer();


    @Given("^users data API is requested$")
    public void usersDataAPIIsRequested() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String StrAPIRequestURL = GlobalData.strAPIBaseURL;
        RequestSpecification httpRequest= RestAssured.given();
        response = httpRequest.headers("Content-Type", ContentType.JSON, "Accept", ContentType.JSON)
                .when().get(StrAPIRequestURL)
                .then().contentType(ContentType.JSON).extract().response();
        commonMethods.fnLogInfo("Status Code :" + response.getStatusCode());
      //  commonMethods.fnLogInfo("Response is  :" + response.prettyPrint());

    }

    @Then("^Response Code should be returned as \"([^\"]*)\"$")
    public void responseCodeShouldBeReturnedAs(String strStatusCode) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals(strStatusCode,String.valueOf(response.getStatusCode()));
    }

    @Then("^users data is stored in Test Data file$")
    public void usersDataIsStoredInTestDataFile() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        RestAssured.defaultParser = Parser.JSON;
        List<String> jsonResponse = response.jsonPath().getList("$");
        commonMethods.fnLogInfo("Size of Response Elements " + jsonResponse.size());
        String usernames = response.jsonPath().getString("username");
        stringBufferTestData.append("Name,UserName,Email\n");
        for (int i=0;i<jsonResponse.size();i++){
            String strName = response.jsonPath().getString("name["+i+"]");
            String strUserName = response.jsonPath().getString("username["+i+"]");
            String strEmail = response.jsonPath().getString("email["+i+"]");

            stringBufferTestData.append(strName+","+strUserName+","+strEmail+"\n");
            commonMethods.fnLogInfo("List is : " + stringBufferTestData.toString());

            testDataFileWriter=commonMethods.fnCreateFile(GlobalData.strTestDataFile);
            commonMethods.fnWriteIntoFile(testDataFileWriter,stringBufferTestData.toString());
            testDataFileWriter.close();
        }
    }
}
