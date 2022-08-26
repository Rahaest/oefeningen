package Tweakers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class TweakerHomePage {

    WebDriver driver;
    By yesterdayNews = By.xpath("/html/body/div[4]/div/div/div[4]/div[2]/div[2]/h2/a");
    By cookieBtn = By.xpath("/html/body/div[6]/div[1]/div[2]/button[1]");

    public TweakerHomePage(WebDriver driver){
        this.driver=driver;
    }
    public void lastArticleClick() {
        driver.findElement(yesterdayNews).click();}
    public void cookieBtnClick(){
        driver.findElement(cookieBtn).click();
    }

}
