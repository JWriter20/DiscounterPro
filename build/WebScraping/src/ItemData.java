import java.util.ArrayList;

public class ItemData {
    private String Title;
    private String Picture;
    private String Stars;
    private String currPrice;
    private String oldPrice;
    private ArrayList<ItemData>allData = new ArrayList<ItemData>();

    public ItemData(String title, String picture, String stars, String currentPrice, String OldPrice){
        Title = title;
        Picture = picture;
        Stars = stars;
        currPrice = currentPrice;
        oldPrice = OldPrice;
    }

    public void takeInData(String title, String picture, String stars, String currentPrice, String OldPrice){
        ItemData currItemData = new ItemData(title,picture,stars,currentPrice,OldPrice);
        allData.add(currItemData);

    }

        public String getTitle(){
            return Title;
        }
        public String getPicture(){
            return Picture;
        }
        public String getOldPrice(){
            return oldPrice;
        }
        public String getCurrPrice(){
            return currPrice;
        }
        public String getStars(){
            return Stars;
        }
        public ArrayList<ItemData> getAllData(){
            return allData;
        }
    }
