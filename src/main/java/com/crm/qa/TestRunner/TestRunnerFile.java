package com.crm.qa.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
		(features = {"D:\\Automation_Workspace\\BDDFrameworkJunit\\src\\main\\java\\com\\crm\\qa\\Features\\LoginFeature_2.feature"}, 
		glue= {"com.crm.qa.StepDefinitions"}, 
		plugin = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"}, 
		monochrome = true, 
		strict = true,
		dryRun=false)

public class TestRunnerFile 
{
	
}
