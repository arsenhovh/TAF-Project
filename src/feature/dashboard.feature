Feature: Check Dashboard Functionality
  Background:
    Given I navigate on the login page and login


  Scenario Template: Check that user can add dashboard

    When I click add new dashboard page
    When I fill <dashboardName> and <descriptionText> in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name <dashboardName>

    Examples:
      |dashboardName           | descriptionText           |
      |Dashboard               | Dashboard description     |
      |DashboardWithNumber11   | Another dashboard         |
      |DashboardWithoutDes     |                           |



  Scenario Outline: Check that user can delete newly added dashboard
    When I click add new dashboard page
    When I fill <dashboardName> and <descriptionText> in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name <dashboardName>
    When I delete dashboard
    Then I expect to not dashboard
    Examples:  |dashboardName | descriptionText           |
               |Dashboard     | Dashboard description     |
               |Dashboard22   | Another dashboard         |

  Scenario: Check that user can edit newly add dashboard
    When I click add new dashboard page
    When I fill Dashboard45 and someText in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name "description"
    When I click add edit button
    When I fill Dashboard45Edit and someTextEdit in name and description field
    Then I expect to see newly added dashboard with name descriptionEdit

