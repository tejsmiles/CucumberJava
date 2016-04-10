package com.goeuro.bddAutomation;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

import org.junit.runner.RunWith;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(jsonReport = "target/reports/cucumber.json",
        retryCount = 1,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        usageReport = false,
        toPDF = true,
        screenShotLocation= "target/reports",
        outputFolder = "target/reports/final/")
@CucumberOptions(
		strict = false, 
		features="src/test/resources",
		plugin = { "pretty",
				"html:target/reports/cucumber",
        		"json:target/reports/cucumber.json", 
				"pretty:target/reports/cucumber-pretty.txt",
			    "usage:target/reports/cucumber-usage.json", 
			    "junit:target/reports/cucumber-results.xml"}, 
        tags = { "~@ignore" })
public class bddRunner {

}
