$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resultsSortedByPrice.feature");
formatter.feature({
  "line": 1,
  "name": "sorting by price - cheapest",
  "description": "As a user\nI want the results to be sorted by price\nSo that I can decide on a price-efficient option",
  "id": "sorting-by-price---cheapest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2613186044,
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
  "duration": 29185348772,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nCommand duration or timeout: 613 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 27e66c13-611d-4aa2-a665-812e67905916\n*** Element info: {Using\u003dclass name, value\u003dui-datepicker-next}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat com.goeuro.bddAutomation.HomePage.i_search_for_route_from_to_on_of_next_month(HomePage.java:31)\n\tat ✽.Given I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month(resultsSortedByPrice.feature:7)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\n",
  "status": "failed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 630732451,
  "status": "passed"
});
formatter.before({
  "duration": 8739614,
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
  "duration": 1487238555,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nCommand duration or timeout: 13 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 27e66c13-611d-4aa2-a665-812e67905916\n*** Element info: {Using\u003dclass name, value\u003dui-datepicker-next}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat com.goeuro.bddAutomation.HomePage.i_search_for_route_from_to_on_of_next_month(HomePage.java:31)\n\tat ✽.Given I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month(resultsSortedByPrice.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\n",
  "status": "failed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 584048953,
  "status": "passed"
});
formatter.before({
  "duration": 7497979,
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
  "duration": 1697798863,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nCommand duration or timeout: 7 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 27e66c13-611d-4aa2-a665-812e67905916\n*** Element info: {Using\u003dclass name, value\u003dui-datepicker-next}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\n\tat com.goeuro.bddAutomation.HomePage.i_search_for_route_from_to_on_of_next_month(HomePage.java:31)\n\tat ✽.Given I search for route from \"Berlin, Deutschland\" to \"Prag, Tschechien\" on \"20\" of next month(resultsSortedByPrice.feature:19)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"class name\",\"selector\":\"ui-datepicker-next\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027tubuntu\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-58-generic\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///tmp/anonymous6576110413101120452webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\n",
  "status": "failed"
});
formatter.match({
  "location": "ResultsPage.sort_by_cheapest_price()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ResultsPage.should_see_a_price_sorted_options_with_cheapest_first()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 533183555,
  "status": "passed"
});
});