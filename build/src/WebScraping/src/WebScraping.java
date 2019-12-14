import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public class WebScraping {
    public static void main(String[] args) {
        Document doc;
        String askPrice = "";
        try{
            doc = Jsoup.connect("https://www.kitco.com/market/").get();
            askPrice = doc.select("#AU-ask").text();
        }catch(IOException e){
            e.printStackTrace();
        }
        System.out.println("Asking price for gold/oz " + askPrice);
    }
}
