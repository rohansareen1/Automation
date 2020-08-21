  # Feature File Description : To Test Web App Scenarios
  @TestingApp
  Feature:  Test Web Application to add two numbers

    Scenario Outline: SC #1 Add Two Numbers with correct expected Result
      Given user is on Home Page of Web Application
      When user enters first number as "<FirstNumber>"
      When user enters second number as "<SecondNumber>"
      When user clicks on Sum Button
      Then result of addition should be displayed as "<SumResult>"
      Examples:
        | FirstNumber | SecondNumber | SumResult |
        | 4           | 6            | 10        |
        | 8.2         | 7.1          | 15.3      |
        | 30          | 50           | 80        |
# Working Fine -
    Scenario Outline: SC #2 Add Two Numbers with Incorrect expected Result
      Given user is on Home Page of Web Application
      When user enters first number as "<FirstNumber>"
      When user enters second number as "<SecondNumber>"
      When user clicks on Sum Button
      Then result of addition should be displayed as "<SumResult>"
      Examples:
        | FirstNumber | SecondNumber | SumResult |
        | 8           | 7            | 19        |
        | 5.3         | 9.3          | 12.8      |

      #Pushing Test Code