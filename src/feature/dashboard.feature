Feature: Check Dashboard Functionality

  Background:
    Given I navigate on the login page and login

  Scenario: Check that user can add dashboard
    When I click add new dashboard page
    When I fill "description" and "someText" in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name "description"
    Then I delete all dashboard

  Scenario: Check that user can delete newly added dashboard
    When I click add new dashboard page
    When I fill "description" and "someText" in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name "description"
    When I delete dashboard
    Then I expect to not dashboard

  Scenario: Check that user can edit newly add dashboard
    When I click add new dashboard page
    When I fill "description" and "someText" in name and description field
    When I click add save button
    Then I expect to see newly added dashboard with name "description"
    When I click add edit button
    When I fill "descriptionEdit" and "someTextEdit" in name and description field
    Then I expect to see newly added dashboard with name "descriptionEdit"
    Then I delete all dashboard

