$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hooks.feature");
formatter.feature({
  "line": 2,
  "name": "Hooks in Cucumber",
  "description": "Description: Hooks Concept in Cucumber",
  "id": "hooks-in-cucumber",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HooksConcept"
    }
  ]
});
formatter.before({
  "duration": 738936,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add new Customer",
  "description": "",
  "id": "hooks-in-cucumber;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Add Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User fills the Customer Details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "New Customer is Added",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Add_Customer_Page()"
});
formatter.result({
  "duration": 286976301,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_fills_the_Customer_Details()"
});
formatter.result({
  "duration": 578927,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.new_Customer_is_Added()"
});
formatter.result({
  "duration": 123156,
  "status": "passed"
});
formatter.after({
  "duration": 117558,
  "status": "passed"
});
formatter.before({
  "duration": 902211,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Edit Customer",
  "description": "",
  "id": "hooks-in-cucumber;edit-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on Edit Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User Edits Customer Details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Customer details are Updated",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Edit_Customer_Page()"
});
formatter.result({
  "duration": 143215,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_Edits_Customer_Details()"
});
formatter.result({
  "duration": 122223,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.customer_details_are_Added()"
});
formatter.result({
  "duration": 132019,
  "status": "passed"
});
formatter.after({
  "duration": 128754,
  "status": "passed"
});
formatter.before({
  "duration": 401190,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete Customer",
  "description": "",
  "id": "hooks-in-cucumber;delete-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is on Delete Customer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User deletes Customer",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Customer is Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksTest.user_is_on_Delete_Customer_Page()"
});
formatter.result({
  "duration": 126422,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.user_deletes_Customer()"
});
formatter.result({
  "duration": 125955,
  "status": "passed"
});
formatter.match({
  "location": "HooksTest.customer_is_Deleted()"
});
formatter.result({
  "duration": 127821,
  "status": "passed"
});
formatter.after({
  "duration": 97965,
  "status": "passed"
});
});