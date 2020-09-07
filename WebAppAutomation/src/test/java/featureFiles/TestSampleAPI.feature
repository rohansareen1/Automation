  # Feature File Description : To Test Sample API..It Fetch users data from API and store in File
  @TestAPI
  Feature:  Testing Users Data Sample API
    Scenario Outline: API Test : Fetch users data from API and store name, username and email
      Given users data API is requested
      Then Response Code should be returned as "<ResponseCode>"
      Then Number of Records should be returned as "<NumberOfRecords>"
      Then users data is stored in Test Data file
      Examples:
        | ResponseCode |NumberOfRecords|
        | 200          |10            |

