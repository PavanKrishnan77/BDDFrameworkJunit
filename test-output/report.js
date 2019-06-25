$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Pavan_JavaPractice/Automation/BDDFrameworkJUnit/src/main/java/com/crm/qa/Features/LoginFeature_1.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login",
  "description": "",
  "id": "crm-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Logging in Normally - Taking UserName and Password from Property file"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "crm-login;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User enters username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_1.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12693541232,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 48548875,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_enters_username_and_password()"
});
formatter.result({
  "duration": 5746329211,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_is_on_home_page()"
});
formatter.result({
  "duration": 11285619,
  "status": "passed"
});
});