package SeleniumTestToolQA.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ToolsQAHomePage {

    WebDriver driver;
    By formsLink = By.xpath("//*[@id='app']/div/div/div[2]/div/div[2]");

    public ToolsQAHomePage(WebDriver driver){
        this.driver=driver;
    }

    public void openForms() {
        driver.findElement(formsLink).click();}
}
