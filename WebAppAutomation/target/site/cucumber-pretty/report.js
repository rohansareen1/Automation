$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestingApp.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature File Description : To Test Web App Scenarios"
    }
  ],
  "line": 3,
  "name": "Test Web Application to add two numbers",
  "description": "",
  "id": "test-web-application-to-add-two-numbers",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "SC #1 Add Two Numbers with correct expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters first number as \"\u003cFirstNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters second number as \"\u003cSecondNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "result of addition should be displayed as \"\u003cSumResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;",
  "rows": [
    {
      "cells": [
        "FirstNumber",
        "SecondNumber",
        "SumResult"
      ],
      "line": 12,
      "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;1"
    },
    {
      "cells": [
        "4",
        "6",
        "10"
      ],
      "line": 13,
      "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;2"
    },
    {
      "cells": [
        "8.2",
        "7.1",
        "15.3"
      ],
      "line": 14,
      "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;3"
    },
    {
      "cells": [
        "30",
        "50",
        "80"
      ],
      "line": 15,
      "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7453161300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "SC #1 Add Two Numbers with correct expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters first number as \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters second number as \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "result of addition should be displayed as \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebAppSteps.userIsOnHomePageOfWebApplication()"
});
formatter.result({
  "duration": 324376900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "WebAppSteps.userEntersFirstNumberAs(String)"
});
formatter.result({
  "duration": 86313100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "WebAppSteps.userEntersSecondNumberAs(String)"
});
formatter.result({
  "duration": 68911800,
  "status": "passed"
});
formatter.match({
  "location": "WebAppSteps.userClicksOnSumButton()"
});
formatter.result({
  "duration": 99735800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 43
    }
  ],
  "location": "WebAppSteps.resultOfAdditionShouldBeDisplayedAs(String)"
});
formatter.result({
  "duration": 33360400,
  "status": "passed"
});
formatter.after({
  "duration": 2290400,
  "status": "passed"
});
formatter.before({
  "duration": 1001263800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "SC #1 Add Two Numbers with correct expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters first number as \"8.2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters second number as \"7.1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "result of addition should be displayed as \"15.3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebAppSteps.userIsOnHomePageOfWebApplication()"
});
formatter.result({
  "duration": 87038400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8.2",
      "offset": 29
    }
  ],
  "location": "WebAppSteps.userEntersFirstNumberAs(String)"
});
formatter.result({
  "duration": 72846800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.1",
      "offset": 30
    }
  ],
  "location": "WebAppSteps.userEntersSecondNumberAs(String)"
});
formatter.result({
  "duration": 80172400,
  "status": "passed"
});
formatter.match({
  "location": "WebAppSteps.userClicksOnSumButton()"
});
formatter.result({
  "duration": 86453100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.3",
      "offset": 43
    }
  ],
  "location": "WebAppSteps.resultOfAdditionShouldBeDisplayedAs(String)"
});
formatter.result({
  "duration": 33870600,
  "status": "passed"
});
formatter.after({
  "duration": 3104400,
  "status": "passed"
});
formatter.before({
  "duration": 1002261000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "SC #1 Add Two Numbers with correct expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#1-add-two-numbers-with-correct-expected-result;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters first number as \"30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters second number as \"50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "result of addition should be displayed as \"80\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebAppSteps.userIsOnHomePageOfWebApplication()"
});
formatter.result({
  "duration": 84608500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 29
    }
  ],
  "location": "WebAppSteps.userEntersFirstNumberAs(String)"
});
formatter.result({
  "duration": 77236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "WebAppSteps.userEntersSecondNumberAs(String)"
});
formatter.result({
  "duration": 80223400,
  "status": "passed"
});
formatter.match({
  "location": "WebAppSteps.userClicksOnSumButton()"
});
formatter.result({
  "duration": 85032600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 43
    }
  ],
  "location": "WebAppSteps.resultOfAdditionShouldBeDisplayedAs(String)"
});
formatter.result({
  "duration": 37659600,
  "status": "passed"
});
formatter.after({
  "duration": 7793400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "# Working Fine"
    }
  ],
  "line": 17,
  "name": "SC #2 Add Two Numbers with Incorrect expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters first number as \"\u003cFirstNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters second number as \"\u003cSecondNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "result of addition should be displayed as \"\u003cSumResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;",
  "rows": [
    {
      "cells": [
        "FirstNumber",
        "SecondNumber",
        "SumResult"
      ],
      "line": 24,
      "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;;1"
    },
    {
      "cells": [
        "8",
        "7",
        "19"
      ],
      "line": 25,
      "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;;2"
    },
    {
      "cells": [
        "5.3",
        "9.3",
        "12.8"
      ],
      "line": 26,
      "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1001361700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "SC #2 Add Two Numbers with Incorrect expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters first number as \"8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters second number as \"7\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "result of addition should be displayed as \"19\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebAppSteps.userIsOnHomePageOfWebApplication()"
});
formatter.result({
  "duration": 76112800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 29
    }
  ],
  "location": "WebAppSteps.userEntersFirstNumberAs(String)"
});
formatter.result({
  "duration": 82352600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 30
    }
  ],
  "location": "WebAppSteps.userEntersSecondNumberAs(String)"
});
formatter.result({
  "duration": 100554600,
  "status": "passed"
});
formatter.match({
  "location": "WebAppSteps.userClicksOnSumButton()"
});
formatter.result({
  "duration": 98796800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 43
    }
  ],
  "location": "WebAppSteps.resultOfAdditionShouldBeDisplayedAs(String)"
});
formatter.result({
  "duration": 47788000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c1[9]\u003e but was:\u003c1[5]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pages.webAppPages.HomePage.fnVerifyResult(HomePage.java:65)\r\n\tat steps.WebAppSteps.resultOfAdditionShouldBeDisplayedAs(WebAppSteps.java:41)\r\n\tat ✽.Then result of addition should be displayed as \"19\"(TestingApp.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 561341300,
  "status": "passed"
});
formatter.before({
  "duration": 1001461500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "SC #2 Add Two Numbers with Incorrect expected Result",
  "description": "",
  "id": "test-web-application-to-add-two-numbers;sc-#2-add-two-numbers-with-incorrect-expected-result;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestingApp"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is on Home Page of Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters first number as \"5.3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters second number as \"9.3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sum Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "result of addition should be displayed as \"12.8\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WebAppSteps.userIsOnHomePageOfWebApplication()"
});
formatter.result({
  "duration": 73743900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5.3",
      "offset": 29
    }
  ],
  "location": "WebAppSteps.userEntersFirstNumberAs(String)"
});
formatter.result({
  "duration": 73528500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.3",
      "offset": 30
    }
  ],
  "location": "WebAppSteps.userEntersSecondNumberAs(String)"
});
formatter.result({
  "duration": 68582300,
  "status": "passed"
});
formatter.match({
  "location": "WebAppSteps.userClicksOnSumButton()"
});
formatter.result({
  "duration": 89027700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.8",
      "offset": 43
    }
  ],
  "location": "WebAppSteps.resultOfAdditionShouldBeDisplayedAs(String)"
});
formatter.result({
  "duration": 26470900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c1[2.8]\u003e but was:\u003c1[4.6]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pages.webAppPages.HomePage.fnVerifyResult(HomePage.java:65)\r\n\tat steps.WebAppSteps.resultOfAdditionShouldBeDisplayedAs(WebAppSteps.java:41)\r\n\tat ✽.Then result of addition should be displayed as \"12.8\"(TestingApp.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 480889200,
  "status": "passed"
});
});