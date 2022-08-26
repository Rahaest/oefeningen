package Tweakers;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import static org.junit.Assert.assertTrue;

public class TweakerTest {

    @Test
    public void searchLastPostYesterday() {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.tweakers.net/");

        TweakerHomePage tweak = new TweakerHomePage(driver);
        tweak.cookieBtnClick();
        //Refresh page to not get the Stale Element Reference
        driver.navigate().refresh();
        tweak.lastArticleClick();

        String author = driver.findElement(By.className("author")).getText();
        assertTrue(author.contains("Jay Stout"));
        assertTrue(author.contains("25 augustus 2022"));

        driver.quit();
    }
}
