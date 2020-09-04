$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestSampleAPI.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature File Description : To Test Register User Scenario and Activity PopUp"
    }
  ],
  "line": 3,
  "name": "Creating Test Data",
  "description": "",
  "id": "creating-test-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TestAPI"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test Data Creation : Fetch users data from API and store name and username",
  "description": "",
  "id": "creating-test-data;test-data-creation-:-fetch-users-data-from-api-and-store-name-and-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "users data API is requested",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Response Code should be returned as \"\u003cResponseCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "users data is stored in Test Data file",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "creating-test-data;test-data-creation-:-fetch-users-data-from-api-and-store-name-and-username;",
  "rows": [
    {
      "cells": [
        "ResponseCode"
      ],
      "line": 10,
      "id": "creating-test-data;test-data-creation-:-fetch-users-data-from-api-and-store-name-and-username;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 11,
      "id": "creating-test-data;test-data-creation-:-fetch-users-data-from-api-and-store-name-and-username;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1733141800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Data Creation : Fetch users data from API and store name and username",
  "description": "",
  "id": "creating-test-data;test-data-creation-:-fetch-users-data-from-api-and-store-name-and-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TestAPI"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "users data API is requested",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Response Code should be returned as \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "users data is stored in Test Data file",
  "keyword": "Then "
});
formatter.match({
  "location": "APIParamSteps.usersDataAPIIsRequested()"
});
formatter.result({
  "duration": 2312713400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 37
    }
  ],
  "location": "APIParamSteps.responseCodeShouldBeReturnedAs(String)"
});
formatter.result({
  "duration": 6494500,
  "status": "passed"
});
formatter.match({
  "location": "APIParamSteps.usersDataIsStoredInTestDataFile()"
});
formatter.result({
  "duration": 1311337500,
  "status": "passed"
});
formatter.after({
  "duration": 325400,
  "status": "passed"
});
});