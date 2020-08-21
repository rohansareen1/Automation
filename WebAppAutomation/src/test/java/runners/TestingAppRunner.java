
//Purpose of this file to run the TestingApp scenarios and save cucumber.json
package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
        features = {"src/test/java/featureFiles"}
//       , format = {"pretty", "html:target/cucumber", "json:target/cucumber-reports/TestingAppRunner.json"}
        , format = {"html:target/site/cucumber-pretty", "json:target/cucumber.json"}
        , tags = {"@TestingApp"}
        , glue = {"steps"})

public class TestingAppRunner {

}

