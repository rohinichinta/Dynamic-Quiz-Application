import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;
import java.util.List;

public class QuizAutomationTest {

    public static void main(String[] args) throws InterruptedException {

        // Selenium Manager will handle ChromeDriver automatically
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();

        // CHANGE this path to your index.html location
        driver.get("file:///C:/Users/rohin/OneDrive/Desktop/dynamic quiz/index.html");

        System.out.println("URL: " + driver.getCurrentUrl());
        System.out.println("Title: " + driver.getTitle());

        // Select Category
        driver.findElement(By.id("category")).sendKeys("Web Development");

        // Select Difficulty
        driver.findElement(By.id("difficulty")).sendKeys("Easy");

        // Start Quiz
        driver.findElement(By.tagName("button")).click();
        Thread.sleep(2000);

        // Answer all questions
        while (true) {
            List<WebElement> options = driver.findElements(By.className("option"));
            if (options.size() == 0) break;

            options.get(0).click(); // select first option
            Thread.sleep(1000);

            driver.findElement(By.xpath("//button[text()='Next']")).click();
            Thread.sleep(2000);
        }

        System.out.println("Quiz automation completed successfully");

        Thread.sleep(3000);
        driver.quit();
    }
}
