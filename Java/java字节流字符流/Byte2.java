import java.io.IOException;

public class Byte2 {

    public static  void  main(String[] args)  throws IOException {

        String username = "尚";
        byte[] u_utf8=username.getBytes("utf-8");

        //有时候必须是iso字符编码类型，那处理方式如下
        String un_utf8_iso=new String(u_utf8, "ISO8859-1");
        System.out.println(un_utf8_iso);

        //将iso编码的字符串进行还原
        String un_iso_utf8=new String(un_utf8_iso.getBytes("ISO8859-1"),"UTF-8");
        System.out.println(un_iso_utf8);
    }

}
