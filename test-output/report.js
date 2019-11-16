$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "CRM Application Login Test",
  "description": "",
  "id": "crm-application-login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Logging in Normally - Taking UserName and Password from Property File"
    },
    {
      "line": 6,
      "value": "#@SmokeTest"
    },
    {
      "line": 7,
      "value": "#Scenario: Free CRM Login Test"
    },
    {
      "line": 8,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 9,
      "value": "#When Title of Login Page is Free CRM"
    },
    {
      "line": 10,
      "value": "#Then User enters username and password and click on login button"
    },
    {
      "line": 11,
      "value": "#Then User is on Home Page"
    },
    {
      "line": 13,
      "value": "#Logging in Using Scenario Outline - Achieving Data Driven Approach"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 22,
      "id": "crm-application-login-test;free-crm-login-test;;1"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 23,
      "id": "crm-application-login-test;free-crm-login-test;;2"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 24,
      "id": "crm-application-login-test;free-crm-login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SanityTest"
    },
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanreddy",
      "offset": 13
    },
    {
      "val": "Saibaba77",
      "offset": 30
    }
  ],
  "location": "LoginPageTest.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "crm-application-login-test;free-crm-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SanityTest"
    },
    {
      "line": 1,
      "name": "@CRMLoginTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanreddy",
      "offset": 13
    },
    {
      "val": "Saibaba77",
      "offset": 30
    }
  ],
  "location": "LoginPageTest.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});