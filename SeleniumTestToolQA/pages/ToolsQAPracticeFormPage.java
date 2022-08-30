package SeleniumTestToolQA.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ToolsQAPracticeFormPage {

    WebDriver driver;
    By firstName = By.id("firstName");
    By lastName = By.id("lastName");
    By phoneNr = By.id("userNumber");
    By genderBtn = By.xpath("//*[@id='genterWrapper']/div[2]/div[1]/label");
    By submitBtn = By.id("submit");

    public ToolsQAPracticeFormPage(WebDriver driver){
        this.driver=driver;
    }

    public void submitForm() {
        driver.findElement(firstName).sendKeys("Raf");
        driver.findElement(lastName).sendKeys("Haest");
        driver.findElement(genderBtn).click();
        driver.findElement(phoneNr).sendKeys("0123456789");
        driver.findElement(submitBtn).click();
    }

}
