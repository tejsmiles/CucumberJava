package com.goeuro.bddAutomation;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		 features="src/test/resources",
	     plugin = {"pretty", "html:target/reports/cucumber"}
	)
public class bddRunner {

}
