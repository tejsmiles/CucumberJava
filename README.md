
#Project Set up 

##Pre-requisite

Eclipse maven project with configured to include selenium jar.

##Usage

bddRunner Class is the initiation point and is executed as JUnit test

#Test Report

target/reports/final contains reports in html and pdf formats

Reports generated are:
* Results Coverage Report (html and pdf)
* Feature Overview Report (html and pdf)
* Test Results Report (html and pdf)

#Screenshots

final screenshots are stored in the folder target/reports/final/target


#Notes for improvement
* Currently base URL is hard-coded to http://goeuro.de. This can be configured to be read from commandline
* Scenarios Data can be easily parameterized to include various routes.
* Currently the tests verify the sorting for first result page of all 3 modes. This can be extended to include all the pages listed.
* Test suites can be easily configured using tags
* Currently, firefox webdriver is configured for simplicity of configurations. More webdrivers can be configured including headless browsers.
