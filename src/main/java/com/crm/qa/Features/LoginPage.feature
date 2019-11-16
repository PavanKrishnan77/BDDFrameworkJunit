@CRMLoginTest
Feature: CRM Application Login Test

  #Without Examples Keyword
  #Logging in Normally - Taking UserName and Password from Property File
  #@SmokeTest
  #Scenario: Free CRM Login Test
    #Given User is already on Login Page
    #When Title of Login Page is Free CRM
    #Then User enters username and password and click on login button
    #Then User is on Home Page
    
  #Logging in Using Scenario Outline - Achieving Data Driven Approach
  @SanityTest
  Scenario Outline: Free CRM Login Test 
  Given User is already on Login Page
  When Title of Login Page is Free CRM
  Then User enters "<Username>" and "<Password>" and click on login button
  Then User is on Home Page

  Examples: 
      | Username   | Password  |
      | pavanreddy | Saibaba77 |
      | pavanreddy | Saibaba77 |
