package com.crm.qa.StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.crm.qa.BaseClass.TestBase;
import com.crm.qa.Pages.HomePage;
import com.crm.qa.Pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageTest extends TestBase
{
	WebDriver driver;
	LoginPage login;
	HomePage homePage;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable
	{
		initialization();
	}

	@When("^Title of Login Page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable 
	{
		login = new LoginPage();
		String loginPageTitle = login.validateLoginPageTitle();
		Assert.assertEquals(loginPageTitle, "CRMPRO - CRM software for customer relationship management, sales, and support.");
	}

//	Below Method is for LoginPage @SmokeTest Scenario.
//	@Then("^User enters username and password and click on login button$")
//	public void user_enters_username_and_password() throws Throwable 
//	{
//		login.login(property.getProperty("Username"), property.getProperty("Password"));
//	}
	
//	Below Method is for LoginPage @SanityTest Scenario.
	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
	public void user_enters_and_and_click_on_login_button(String Username, String Password) throws Throwable 
	{
		login.login(Username, Password);
	}

	@Then("^User is on Home Page$")
	public void user_is_on_home_page() throws Throwable 
	{
		homePage = new HomePage();
		String homePageTitle = homePage.verifyHomePageTitle();
		Assert.assertEquals(homePageTitle, "CRMPRO"); 
	}
}
