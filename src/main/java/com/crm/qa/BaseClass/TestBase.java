package com.crm.qa.BaseClass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.crm.qa.Utilities.TestUtility;
import com.crm.qa.Utilities.WebEventListener;

public class TestBase
{
	public static WebDriver driver; 
	public static Properties property; //Making public So that we can use in all Child Classes.
	public static EventFiringWebDriver e_driver;
	public static WebEventListener eventListener;
	
	//Using Base Class we are achieving Inheritance Concept from Java
	public TestBase() //Constructor to read data from property file.
	{
		try 
		{
			property = new Properties();
			FileInputStream ip = new FileInputStream("D:\\Pavan_JavaPractice\\Automation\\BDDFrameworkJUnit\\src\\main\\java\\com\\crm\\qa\\Configuration\\Configuration.properties");
			property.load(ip);
		} 
		catch (FileNotFoundException e)
		{
			e.printStackTrace();
		} 
		catch (IOException e) 
		{
			e.printStackTrace();
		}
	}
	
	public static void initialization() //Read the properties from Configuration File
	{
		String broswerName = property.getProperty("Browser");
		
		if(broswerName.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
		else if(broswerName.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","./Drivers/geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
		
		e_driver = new EventFiringWebDriver(driver);
		//Now create object of EventListerHandler to register it with EventFiringWebDriver.
		eventListener = new WebEventListener();
		e_driver.register(eventListener);
		driver = e_driver;
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtility.Page_Load_TimeOut, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtility.Implicit_Wait, TimeUnit.SECONDS);
		
		driver.get(property.getProperty("Url"));
	}
}
