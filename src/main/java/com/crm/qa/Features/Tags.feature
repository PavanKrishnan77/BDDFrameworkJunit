@Tags
Feature: Tags in Cucumber
  Description: To Test Tags Concept

  @SmokeTest @RegressionTest
  Scenario: Verify Login
    Given This is a Valid Login Test

  @SanityTest @RegressionTest
  Scenario: Verify Logout
    Given This is a Valid Logout Test

  @RegressionTest
  Scenario: Verify Search
    Given This is a Search Test

  @End2EndTest
  Scenario: Verify Advanced Search
    Given This is Advanced Search Test
