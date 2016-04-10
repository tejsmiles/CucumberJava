package com.goeuro.bddAutomation;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ResultsPage {
	
	private WebDriver driver;
	
	private By sortCheapest = By.id("sortby-price");
	private By trainTab = By.id("tab_train");
	private By activeResultPrices = By.xpath(".//*[@id='results']/div[@class='active']//table[@class='result-grid']//span[@class='price-no ']");
	private By priceBeforeDecimal = By.className("currency-beforecomma");
	private By priceAfterDecimal = By.className("currency-decimals");

	public ResultsPage(SharedDriver webDriver) {
		this.driver = webDriver;
	}
	
	@When("^I sort by cheapest price$")
	public void sort_by_cheapest_price() throws Throwable {
		driver.findElement(sortCheapest).click();
	}

	@When("^I select results for \"([^\"]*)\"$")
	public void select_results_for(String travelMedium) throws Throwable {
		if(travelMedium.equalsIgnoreCase("train")){
			driver.findElement(trainTab).click();
		}
	}

	@Then("^I should see a price sorted options with cheapest first$")
	public void should_see_a_price_sorted_options_with_cheapest_first() throws Throwable {
	    List<WebElement> resultPricesCurrentTab = driver.findElements(activeResultPrices); 
	    assertTrue("No travel options listed", resultPricesCurrentTab.size() > 0);
	    
	    ArrayList<Double> pricesAsOnPage = new ArrayList<Double>();
	    for(WebElement element: resultPricesCurrentTab){
			WebElement priceBeforeDecimalElement = element.findElement(priceBeforeDecimal);
			String priceText = priceBeforeDecimalElement.getText();
			String currentPriceText = priceText.trim();
			currentPriceText = currentPriceText.concat(".");
			WebElement priceAfterDecimalElement = element.findElement(priceAfterDecimal);
			priceText = priceAfterDecimalElement.getText();
			currentPriceText = currentPriceText.concat(priceText.trim());
			double currentPrice = Double.parseDouble(currentPriceText);
			pricesAsOnPage.add(new Double(currentPrice));
		}
	    double previousNumber = 0.0;
		boolean sorted = true;	
		if (pricesAsOnPage.size() > 1)
			previousNumber = pricesAsOnPage.get(0).doubleValue();
		for (int i=1; i < pricesAsOnPage.size(); i++){
			double currentNumber = pricesAsOnPage.get(i).doubleValue();
			if(currentNumber < previousNumber){
				sorted = false;
				break;
			}
			else{
				previousNumber = currentNumber;
			}
		}
		assertTrue("Prices are not sorted", sorted);
	}
}