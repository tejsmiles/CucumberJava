package com.goeuro.bddAutomation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;

public class HomePage {

	private WebDriver driver;

	private By fromTextBox = By.name("from_filter");
	private By toTextBox = By.name("to_filter");
	private By datePicker = By.name("departure_date");
	private By datePickerNextMonth = By.className("ui-datepicker-next");
	private By searchButton = By.id("search-form__submit-btn");
	private By checkboxLabelAirbnb = By.className("hotel-checkbox__airbnb");
	
	public HomePage(SharedDriver webDriver) {
		this.driver = webDriver;
	}

	@Given("^I search for route from \"([^\"]*)\" to \"([^\"]*)\" on \"([^\"]*)\" of next month$")
	public void i_search_for_route_from_to_on_of_next_month(String fromLocation, String toLocation, String travelDate) throws Throwable {
		//TODO configuring homepage URL as environment
		String URL = "http://goeuro.de";
		driver.navigate().to(URL);
		
		driver.findElement(fromTextBox).sendKeys(fromLocation);
		driver.findElement(toTextBox).sendKeys(toLocation);
		driver.findElement(datePicker).click();
		driver.findElement(datePickerNextMonth).click(); 
		driver.findElement(By.linkText(travelDate)).click(); 
		driver.findElement(checkboxLabelAirbnb).click(); // deselect Airbnb search
		driver.findElement(searchButton).submit();
	}

}
