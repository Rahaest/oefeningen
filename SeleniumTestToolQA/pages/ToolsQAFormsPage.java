package SeleniumTestToolQA.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ToolsQAFormsPage {

    WebDriver driver;
    By practiceForm = By.xpath("/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div/ul/li");

    public ToolsQAFormsPage(WebDriver driver){
        this.driver=driver;
    }

    public void openPracticeForm() {
        driver.findElement(practiceForm).click();}
}
