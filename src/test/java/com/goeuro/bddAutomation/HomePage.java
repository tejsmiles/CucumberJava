package com.goeuro.bddAutomation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

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
		//As an example the URL points to german portal and is hardcoded.
		String URL = "http://goeuro.de";
		driver.navigate().to(URL);
		
		driver.findElement(fromTextBox).sendKeys(fromLocation);
		driver.findElement(toTextBox).sendKeys(toLocation);
		
		driver.findElement(datePicker).click();
		driver.findElement(datePickerNextMonth).click(); 
		driver.findElement(By.linkText(travelDate)).click(); 
		
		// During the tests it was observed that it takes more time to load 
		// the Airbnb checkbox and then to make it clickable. hence adding wait here
		(new WebDriverWait(driver, 15)).until(ExpectedConditions.elementToBeClickable(checkboxLabelAirbnb));
		// deselect Airbnb search (for german portal, Airbnb is checked by default)
		driver.findElement(checkboxLabelAirbnb).click(); 
		
		driver.findElement(searchButton).submit();
		
	}

}
