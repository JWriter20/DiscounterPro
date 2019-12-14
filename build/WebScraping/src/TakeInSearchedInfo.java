import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class TakeInSearchedInfo {
    public static void main(String[] args) throws IOException {
        String results = "{\"itemList\":[";
        Scanner s = new Scanner(System.in);
        System.out.println("Type in what you want to search for: ");
        String itemToSearch = s.nextLine();
        ArrayList<String[]>allDataValues = new ArrayList<String[]>();
        int i =1;
        String lastPageNum = "Next→";
        while(lastPageNum.equals("Next→")){
            String url = "https://www.amazon.com/s?k=" + itemToSearch + "&page=" + i + "&qid=1572373321&ref=sr_pg_" + i + "";
            System.out.println(url);
            Document page = Jsoup.connect(url).userAgent("Jsoup searchedInfo").get();
            //String boxSelector = "div.sg-col-20-of-24.s-result-item.sg-col-0-of-12.sg-col-28-of-32.sg-col-16-of-20.sg-col.sg-col-32-of-36.sg-col-12-of-16.sg-col-24-of-28";
            //String boxSelector = "div.sg-row";
            String boxSelector = "div.a-section.a-spacing-medium";
            String titleSelector = "h2.a-size-mini";
            String pictureSelector = "img.s-image";
            String currPriceSelector = "span.a-price";
            String starSelector = "span.a-declarative";
            String oldPriceSelector = "span.a-price.a-text-price";
            String lastPage = "li.a-last";

            lastPageNum = (page.select(lastPage).text());
            Elements boxSelectorElements = page.select(boxSelector);
            for (int j = 3; j < boxSelectorElements.size(); j++) {
                if (!(boxSelectorElements.get(j).select(oldPriceSelector).text().equals(""))) {
                    String picture = boxSelectorElements.get(j).select(pictureSelector).attr("src");
                    String title = boxSelectorElements.get(j).select(titleSelector).text();
                    String oldPrice = (boxSelectorElements.get(j).select(oldPriceSelector).text()).substring(0, boxSelectorElements.get(j).select(oldPriceSelector).text().indexOf(".") + 3);
                    String currPrice = (boxSelectorElements.get(j).select(currPriceSelector).text()).substring(0, boxSelectorElements.get(j).select(currPriceSelector).text().indexOf(".") + 3);
                    String stars = boxSelectorElements.get(j).select(starSelector).text();
                    String[] newDataValues = {picture, title, oldPrice, currPrice, stars};
                    if(title.contains("\"")){
                        title = title.replaceAll("\"", "\\\\\"");
                    }
                    //                           0       1       2          3        4
                    results += "{\"picture\": " + "\"" + picture + "\",\n";
                    results += "\"title\": " + "\"" + title + "\",\n";
                    results += "\"oldPrice\": " + "\"" + oldPrice + "\",\n";
                    results += "\"currPrice\": " + "\"" + currPrice + "\",\n";
                    results += "\"rating\": " + "\"" + stars + "\"},\n";

                    allDataValues.add(newDataValues);


                }
            }
            i++;
        }
        results = results.substring(0,results.length()-2);
        results += "\n]}";
        String filename =  "dataOnItems.json";

        //write results to new file log.txt (need to delete before re-running test)
        try (Writer writer = new BufferedWriter(new OutputStreamWriter(
                new FileOutputStream(filename), "utf-8"))){
            writer.write(results);
        }

        catch (IOException e){
            System.out.println("Issues writing to log file");

        }
    }
}