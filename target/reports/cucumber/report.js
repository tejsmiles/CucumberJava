$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resultsSortedByPrice.feature");
formatter.feature({
  "line": 1,
  "name": "sorting by price - cheapest",
  "description": "As a user\nI want the results to be sorted by price\nSo that I can decide on a price-efficient option",
  "id": "sorting-by-price---cheapest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2740589932,
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
  "duration": 44597232100,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 1294520459,
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
  "duration": 576465759,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 543097876,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 316179976,
  "status": "passed"
});
formatter.before({
  "duration": 15564001,
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
  "duration": 9439904121,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 694578820,
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
  "duration": 550811057,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 1121500388,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 387162686,
  "status": "passed"
});
formatter.before({
  "duration": 36231955,
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
  "duration": 9877720495,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "duration": 754158522,
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
  "duration": 525132645,
  "status": "passed"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "duration": 666817739,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 301375290,
  "status": "passed"
});
});