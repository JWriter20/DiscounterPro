import java.awt.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import java.awt.Desktop;
import java.net.URI;

public class AutoClicker {
    private static Robot robot = null;
    private int delay;
    public AutoClicker(){
        try {
            robot = new Robot();
        }catch(Exception e){
            e.printStackTrace();

        }
        delay = 300;
    }

    public void clickMouse(int button){
        try {
            robot.mousePress(button);
            robot.delay(250);
            robot.mouseRelease(button);
            robot.delay(delay);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    public void setDelay(int ms){
        this.delay = ms;
    }
    public void typeValueInAmazon(String valToBeSearched){
        Document doc;
        try {
            doc = Jsoup.connect("https://www.amazon.com").get();
        }catch (Exception e){
            e.printStackTrace();
            doc = null;
        }
        Element div = doc.select("#twotabsearchtextbox").first();
        div.text(valToBeSearched);
    }
    public static void main(String[] args)throws Exception {
        AutoClicker a = new AutoClicker();
        a.typeValueInAmazon("Tennis");
    }
}


