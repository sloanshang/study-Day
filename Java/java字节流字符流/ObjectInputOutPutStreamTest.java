package SpringBootWeb.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.util.Date;

//ObjectOutputStream和ObjectInputStream为典型的装饰者模式
public class ObjectInputOutPutStreamTest {

	
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		 objectOutPutStream();
		 ObjectInputStream();
		
	} 
	
	public static void ObjectInputStream() throws IOException, ClassNotFoundException {
		
		String foldPath = "c:" + File.separator  + "test" +File.separator  ;
		final  String name= "object.txt" ;
		
		File f = new File(foldPath + name) ;	// 定义保存路径
		ObjectInputStream oos = null ;	// 声明对象输出流
		InputStream in = new FileInputStream(f) ;	// 文件输出流
		oos = new ObjectInputStream(in) ;
        Date date = (Date) oos.readObject();
        System.out.println(date);
        byte[] b  = new byte[30];
        oos.read(b);
        oos.close();
        System.out.println(new String(b));

		
	}
	
	public static void objectOutPutStream() throws IOException{
		
		String foldPath = "c:" + File.separator  + "test" +File.separator  ;
		final  String name= "object.txt" ;
		File f = new File(foldPath + name) ;	// 定义保存路径
		ObjectOutputStream oos = null ;	// 声明对象输出流
		OutputStream out = new FileOutputStream(f) ;	// 文件输出流
		oos = new ObjectOutputStream(out) ;
		oos.writeObject(new Date());
		oos.write("\r\n".getBytes());
		oos.write("我们欢迎您".getBytes());
		oos.close() ;	// 关闭
	}
	
}
