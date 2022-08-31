package SeleniumTestToolQA.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ToolsQAPracticeFormPage {

    WebDriver driver;
    By firstName = By.id("firstName");
    By lastName = By.id("lastName");
    By phoneNr = By.id("userNumber");
    By genderBtn;
    By submitBtn = By.id("submit");

    //Default values for input
    String firstNameStr = "Raf";
    String lastNameStr = "Haest";
    String phoneNrStr= "0123456789";

    public ToolsQAPracticeFormPage(WebDriver driver){
        this.driver=driver;
    }

    public void setFirstName(String firstNameStr){this.firstNameStr = firstNameStr;}
    public void setLastName(String lastNameStr) {this.lastNameStr = lastNameStr;}
    public void setPhoneNr(String phoneNrStr) {this.phoneNrStr = phoneNrStr;}
    public void setGender(String gender) {
        if (gender.equalsIgnoreCase("male")) {
           genderBtn = By.xpath("//label[text()='Male']");
        } else if (gender.equalsIgnoreCase("female")) {
            genderBtn = By.xpath("//label[text()='Female']");
        } else {
            genderBtn = By.xpath("//label[text()='Other']");
        }
    }

    public void fillInForm(){
        driver.findElement(firstName).sendKeys(firstNameStr);
        driver.findElement(lastName).sendKeys(lastNameStr);
        driver.findElement(genderBtn).click();
        driver.findElement(phoneNr).sendKeys(phoneNrStr);
    }

    public void submit() {
        driver.findElement(submitBtn).click();
    }

}
