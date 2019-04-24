import java.io.*;

public class PictureCopy {
    public static void main(String[] args) throws IOException {
        BufferedInputStream in = new BufferedInputStream(new FileInputStream("c://test//1.jpg"));
        BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream("c://test//newCopy.jpg"));
        int i;
        while((i=in.read())!=-1){
            out.write(i);
        }
        out.flush();

        out.close();
        in.close();
    }
}