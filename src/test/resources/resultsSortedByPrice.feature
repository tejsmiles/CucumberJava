Feature: sorting by price - cheapest 
	As a user
	I want the results to be sorted by price
	So that I can decide on a price-efficient option
	
Scenario: 1. Cheapest first sorting of Train results 
	Given I search for route from "Berlin, Deutschland" to "Prag, Tschechien" on "20/04/2016"
	 When I sort by cheapest price
	  And I select results for "train"
	 Then I should see a price sorted options with cheapest first

Scenario: 2. Cheapest first sorting of Flight results 

Scenario: 3. Cheapest first sorting of Bus results 