@HooksConcept
Feature: Hooks in Cucumber
  Description: Hooks Concept in Cucumber

  Scenario: Add new Customer
    Given User is on Add Customer Page
    When User fills the Customer Details
    Then New Customer is Added
    
    Scenario: Edit Customer
    Given User is on Edit Customer Page
    When User Edits Customer Details
    Then Customer details are Updated
    
    Scenario: Delete Customer
    Given User is on Delete Customer Page
    When User deletes Customer
    Then Customer is Deleted
