$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resultsSortedByPrice.feature");
formatter.feature({
  "line": 1,
  "name": "sorting by price - cheapest",
  "description": "As a user\nI want the results to be sorted by price\nSo that I can decide on a price-efficient option",
  "id": "sorting-by-price---cheapest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2955648588,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1. Cheapest first sorting of Train results",
  "description": "",
  "id": "sorting-by-price---cheapest;1.-cheapest-first-sorting-of-train-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I sort by cheapest price",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select results for \"train\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see a price sorted options with cheapest first",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Berlin, Deutschland",
      "offset": 25
    },
    {
      "val": "Prag, Tschechien",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 72
    }
  ],
  "location": "HomePage.i_search_for_route_from_to_on_of_next_month(String,String,String)"
});
formatter.result({
  "duration": 40176888912,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 1041445633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "train",
      "offset": 22
    }
  ],
  "location": "ResultsPage.select_results_for(String)"
});
formatter.result({
  "duration": 333867723,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 739112692,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 314958463,
  "status": "passed"
});
formatter.before({
  "duration": 17716531,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "2. Cheapest first sorting of Flight results",
  "description": "",
  "id": "sorting-by-price---cheapest;2.-cheapest-first-sorting-of-flight-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I sort by cheapest price",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select results for \"flight\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see a price sorted options with cheapest first",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Berlin, Deutschland",
      "offset": 25
    },
    {
      "val": "Prag, Tschechien",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 72
    }
  ],
  "location": "HomePage.i_search_for_route_from_to_on_of_next_month(String,String,String)"
});
formatter.result({
  "duration": 10306859106,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 493442490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flight",
      "offset": 22
    }
  ],
  "location": "ResultsPage.select_results_for(String)"
});
formatter.result({
  "duration": 299430488,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 680140723,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 363876420,
  "status": "passed"
});
formatter.before({
  "duration": 61521560,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "3. Cheapest first sorting of Bus results",
  "description": "",
  "id": "sorting-by-price---cheapest;3.-cheapest-first-sorting-of-bus-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I sort by cheapest price",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select results for \"bus\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see a price sorted options with cheapest first",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Berlin, Deutschland",
      "offset": 25
    },
    {
      "val": "Prag, Tschechien",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 72
    }
  ],
  "location": "HomePage.i_search_for_route_from_to_on_of_next_month(String,String,String)"
});
formatter.result({
  "duration": 17122924530,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 632961019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bus",
      "offset": 22
    }
  ],
  "location": "ResultsPage.select_results_for(String)"
});
formatter.result({
  "duration": 312107411,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 694491975,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 304551121,
  "status": "passed"
});
});