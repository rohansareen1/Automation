$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestSampleAPI.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature File Description : To Test Sample API..It Fetch users data from API and store in File"
    }
  ],
  "line": 3,
  "name": "Testing Users Data Sample API",
  "description": "",
  "id": "testing-users-data-sample-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TestAPI"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "API Test : Fetch users data from API and store name, username and email",
  "description": "",
  "id": "testing-users-data-sample-api;api-test-:-fetch-users-data-from-api-and-store-name,-username-and-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "users data API is requested",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Response Code should be returned as \"\u003cResponseCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Number of Records should be returned as \"\u003cNumberOfRecords\u003e\"",
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
  "id": "testing-users-data-sample-api;api-test-:-fetch-users-data-from-api-and-store-name,-username-and-email;",
  "rows": [
    {
      "cells": [
        "ResponseCode",
        "NumberOfRecords"
      ],
      "line": 10,
      "id": "testing-users-data-sample-api;api-test-:-fetch-users-data-from-api-and-store-name,-username-and-email;;1"
    },
    {
      "cells": [
        "200",
        "10"
      ],
      "line": 11,
      "id": "testing-users-data-sample-api;api-test-:-fetch-users-data-from-api-and-store-name,-username-and-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3760682200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "API Test : Fetch users data from API and store name, username and email",
  "description": "",
  "id": "testing-users-data-sample-api;api-test-:-fetch-users-data-from-api-and-store-name,-username-and-email;;2",
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
  "line": 5,
  "name": "users data API is requested",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Response Code should be returned as \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Number of Records should be returned as \"10\"",
  "matchedColumns": [
    1
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
  "duration": 10517552300,
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
  "duration": 7098200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "APIParamSteps.numberOfRecordsShouldBeReturnedAs(String)"
});
formatter.result({
  "duration": 556247900,
  "status": "passed"
});
formatter.match({
  "location": "APIParamSteps.usersDataIsStoredInTestDataFile()"
});
formatter.result({
  "duration": 2133935800,
  "status": "passed"
});
formatter.after({
  "duration": 1329600,
  "status": "passed"
});
});