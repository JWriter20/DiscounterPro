import java.awt.Desktop;
import java.net.URI;
public class AutoOpenPage {
    public static void main(String[] args)throws Exception {
        Desktop d = Desktop.getDesktop();
        d.browse(new URI("https://www.amazon.com/s?k=tennis&ref=nb_sb_noss_2"));
    }

}
