package SeleniumTestToolQA;

import SeleniumTestToolQA.pages.ToolsQAFormsPage;
import SeleniumTestToolQA.pages.ToolsQAHomePage;
import SeleniumTestToolQA.pages.ToolsQAPracticeFormPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ToolsQATest {


    @Test
    public void registration() {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        ToolsQAHomePage homePage = new ToolsQAHomePage(driver);
        homePage.goTo();
        ToolsQAFormsPage formsPage = homePage.openForms();
        ToolsQAPracticeFormPage practiceForm = formsPage.openPracticeForm();

        practiceForm.setFirstName("Test");
        practiceForm.setLastName("Person");
        practiceForm.setGender("Male");
        practiceForm.setPhoneNr("9876543210");
        practiceForm.fillInForm();
        practiceForm.submit();

        driver.quit();

    }
}
