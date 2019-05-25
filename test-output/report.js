$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Pavan_JavaPractice/Automation/BDDFramework/src/main/java/com/crm/qa/Features/LoginFeature_2.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login",
  "description": "",
  "id": "crm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Logging in Using Scenario Outline - Achieving Data Driven Approach"
    },
    {
      "line": 4,
      "value": "#Taking UserName and Password from Feature file"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "crm-login;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 13,
      "id": "crm-login;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 14,
      "id": "crm-login;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 14858505903,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 53930192,
  "status": "passed"
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
  "location": "LoginTestCase_2.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 6869187352,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 52956140,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 22653590674,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 24157232,
  "status": "passed"
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
  "location": "LoginTestCase_2.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 6107178362,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 7275999,
  "status": "passed"
});
});