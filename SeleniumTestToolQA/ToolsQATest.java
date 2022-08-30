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
        driver.get("https://demoqa.com/");

        ToolsQAHomePage homePage = new ToolsQAHomePage(driver);
        homePage.openForms();

        ToolsQAFormsPage formsPage = new ToolsQAFormsPage(driver);
        formsPage.openPracticeForm();

        ToolsQAPracticeFormPage pracForm = new ToolsQAPracticeFormPage(driver);
        pracForm.submitForm();

        driver.quit();

    }
}
