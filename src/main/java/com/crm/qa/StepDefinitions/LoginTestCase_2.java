package com.crm.qa.StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.crm.qa.BaseClass.TestBase;
import com.crm.qa.Pages.HomePage;
import com.crm.qa.Pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestCase_2 extends TestBase
{
	WebDriver driver;
	LoginPage login;
	HomePage homePage;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable
	{
		initialization();
	}

	@When("^Title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable 
	{
		login = new LoginPage();
		String loginPageTitle = login.validateLoginPageTitle();
		Assert.assertEquals(loginPageTitle, "CRMPRO - CRM software for customer relationship management, sales, and support.");
	}

	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
	public void user_enters_and_and_click_on_login_button(String Username, String Password) throws Throwable 
	{
		login.login(Username, Password);
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Throwable 
	{
		homePage = new HomePage();
		String homePageTitle = homePage.verifyHomePageTitle();
		Assert.assertEquals(homePageTitle, "CRMPRO"); 
	}
}
