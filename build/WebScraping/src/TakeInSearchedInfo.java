import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

/*
Name: Jake Writer
Project name: AmazonWebscraper
Purpose: This Java code takes in a desired product to search for and will scrape Amazon for that product.
upon finding it, it will properly format the info then write it to a json file.
Date: 12/14/19
*/

public class TakeInSearchedInfo{
    public static void main(String[] args) throws IOException{
        String results = "{\"itemList\":[";
        Scanner s = new Scanner(System.in);
        System.out.println("Type in what you want to search for: ");
        String itemToSearch = s.nextLine();
        ArrayList<String[]>allDataValues = new ArrayList<String[]>(); //all data if ever needed might delete later
        int i =1;
        String lastPageNum = "Next→";
        while(lastPageNum.equals("Next→")){ //checks to see if on last page
            String url = "https://www.amazon.com/s?k=" + itemToSearch + "&page=" + i + "&qid=1572373321&ref=sr_pg_" + i + ""; //search through all pages
            System.out.println(url);
            Document page = Jsoup.connect(url).userAgent("Jsoup searchedInfo").get();
            //String boxSelector = "div.sg-col-20-of-24.s-result-item.sg-col-0-of-12.sg-col-28-of-32.sg-col-16-of-20.sg-col.sg-col-32-of-36.sg-col-12-of-16.sg-col-24-of-28";
            //String boxSelector = "div.sg-row";
            //New boxSelector works much better than old ones
            String boxSelector = "div.a-section.a-spacing-medium";
            String titleSelector = "h2.a-size-mini";
            String pictureSelector = "img.s-image";
            String currPriceSelector = "span.a-price";
            String starSelector = "span.a-declarative";
            String oldPriceSelector = "span.a-price.a-text-price";
            String lastPage = "li.a-last";

            lastPageNum = (page.select(lastPage).text());
            Elements boxSelectorElements = page.select(boxSelector); //selector for each item box
            for (int j = 3; j < boxSelectorElements.size(); j++){
                if (!(boxSelectorElements.get(j).select(oldPriceSelector).text().equals(""))) {
                    String picture = boxSelectorElements.get(j).select(pictureSelector).attr("src");
                    String title = boxSelectorElements.get(j).select(titleSelector).text();
                    String oldPrice = (boxSelectorElements.get(j).select(oldPriceSelector).text()).substring(0, boxSelectorElements.get(j).select(oldPriceSelector).text().indexOf(".") + 3);
                    String currPrice = (boxSelectorElements.get(j).select(currPriceSelector).text()).substring(0, boxSelectorElements.get(j).select(currPriceSelector).text().indexOf(".") + 3);
                    String stars = boxSelectorElements.get(j).select(starSelector).text();
                    String[] newDataValues = {picture, title, oldPrice, currPrice, stars};
                    if(title.contains("\"")){ //edge case handling
                        title = title.replaceAll("\"", "\\\\\"");
                    }

                    //add final results
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

        //remove last comma for proper json formatting
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
