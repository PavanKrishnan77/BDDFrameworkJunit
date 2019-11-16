package com.crm.qa.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
		(features = {"src/main/java/com/crm/qa/Features"}, 
		glue= {"com.crm.qa.StepDefinitions"}, 
		plugin = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"}, 
		monochrome = true, 
		strict = true,
		dryRun=true,
		tags={"@SanityTest"})
		//tags={"@SanityTest, @SmokeTest"})

public class TestRunnerFile 
{
	
}
