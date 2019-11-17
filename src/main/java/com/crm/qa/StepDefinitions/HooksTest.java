package com.crm.qa.StepDefinitions;

import com.crm.qa.BaseClass.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksTest extends TestBase
{
	@Before
	public void setUp()
	{
		System.out.println("Launch the Browser");
		System.out.println("Enter Url and Open the Application");
	}
	
	@Given("^User is on Add Customer Page$")
	public void user_is_on_Add_Customer_Page() throws Throwable 
	{
	   System.out.println("User is on Add Customer Page");
	}

	@When("^User fills the Customer Details$")
	public void user_fills_the_Customer_Details() throws Throwable 
	{
		System.out.println("User fills the Customer Details");
	}

	@Then("^New Customer is Added$")
	public void new_Customer_is_Added() throws Throwable 
	{
		System.out.println("New Customer is Added");
	}

	@Given("^User is on Edit Customer Page$")
	public void user_is_on_Edit_Customer_Page() throws Throwable 
	{
		System.out.println("User is on Edit Customer Page");
	}

	@When("^User Edits Customer Details$")
	public void user_Edits_Customer_Details() throws Throwable
	{
		System.out.println("User Edits Customer Details");
	}

	@Then("^Customer details are Updated$")
	public void customer_details_are_Added() throws Throwable 
	{
		System.out.println("Customer details are Updated");
	}

	@Given("^User is on Delete Customer Page$")
	public void user_is_on_Delete_Customer_Page() throws Throwable 
	{
		System.out.println("User is on Delete Customer Page");
	}

	@When("^User deletes Customer$")
	public void user_deletes_Customer() throws Throwable 
	{
		System.out.println("User deletes Customer");
	}

	@Then("^Customer is Deleted$")
	public void customer_is_Deleted() throws Throwable 
	{
		System.out.println("Customer is Deleted");
	}
	
	@After
	public void tearDown()
	{
		System.out.println("Browser is Closed");
	}
}
