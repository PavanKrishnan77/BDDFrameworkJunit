package com.crm.qa.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features = {"D:\\Pavan_JavaPractice\\Automation\\BDDFrameworkJUnit\\src\\main\\java\\com\\crm\\qa\\Features\\LoginFeature_1.feature"}, //Path of the Feature Files.
glue= {"com.crm.qa.StepDefinitions"}, //Path of the Step Definition Files.
format = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"}, //To Generate Output in Different types of Reports.
monochrome = true, //To display Console Output in Very Readable Format.
strict = true, //It will check if any step is not defined in Step Definition File. if Missed it will stop an execution.
dryRun=false) //Checks whether all steps in future file has got methods in Step Definition File or No.

public class TestRunnerClass 
{
	
}
