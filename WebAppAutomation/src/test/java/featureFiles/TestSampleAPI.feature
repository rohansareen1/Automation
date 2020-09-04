  # Feature File Description : To Test Register User Scenario and Activity PopUp
  @TestAPI
  Feature:  Creating Test Data

    Scenario Outline: Test Data Creation : Fetch users data from API and store name and username
      Given users data API is requested
      Then Response Code should be returned as "<ResponseCode>"
      Then users data is stored in Test Data file
      Examples:
        | ResponseCode |
        | 200          |

