package SpringBootWeb.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

public class OutInutReadWriterTest {
    
public static void main(String[] args) throws IOException {
	//FileInputStreamTest();
   // final String name="297932037.jpg"
    String foldPath = "c:" + File.separator  + "test" +File.separator  ;
	final  String name= "list.xlsx" ;
    
    byte[] input1 = FileInputStream(foldPath + name) ;
    char[] reader1 =  FileReader(foldPath + name) ;
	System.out.println("input1.length=" + input1.length);
	System.out.println("reader1.length=" + reader1.length);
	String input1Value = new String(input1) ;
	String reader1Value = new String(reader1) ;
	System.out.println("input1.toString === reader1.toString " + input1Value.equals(reader1Value));

	
	byte[] input2  = FileOutputStream(input1,foldPath + "listA.xlsx");
	char[] reader2 = FileWriter(reader1,foldPath + "listB.xlsx");
	System.out.println("input2.length=" + input2.length);
	System.out.println("reader2.length=" + reader2.length);
	String input2Value = new String(input2) ;
	String reader2Value = new String(reader2) ;
	System.out.println("input2.toString === reader2.toString " + input2Value.equals(reader2Value));
	
	

}
    /**
    * 字节流(输入流)
    * @throws IOException
    */
   public static  byte[] FileInputStream(String name) throws IOException{
		InputStream input = new FileInputStream(name);
		int length = input.available();
		byte[] b = new byte[length];
		input.read(b);
		return b ;
//		String sb =new String(b);
//		return sb;
   }
   
   
   /**
    * 字节流(输出)
    * @throws IOException
    */
   public static byte[] FileOutputStream(byte[] b,String name) throws IOException{
	   
	    File file = new File(name);
	    OutputStream fileOut =new FileOutputStream(file);
	    fileOut.write(b);
	    return FileInputStream(name) ; 
   }
   
   
   
   
    /**
    * 字符流(输入流)
    * @throws IOException
    */
   public static char[] FileReader(String name) throws IOException{
		File file = new File(name);
		Reader reader = new FileReader(file);
		int temp = 0;
		StringBuffer sb = new StringBuffer();
		List<Integer> s = new ArrayList<>();
		 while( (temp = reader.read()) != -1) {
		   //  char ch=(char) temp;  
		    // Character ch2=Character.valueOf(ch);  
			 s.add(temp);
		 }
		 char[] retSize = new char[s.size()];
		 for(int i= 0; i< s.size() ; i++){
			 retSize[i] =(char) s.get(i).intValue() ;
		 }
		return retSize;
		 
   }
   
  
   /**
    * 字符流(输出流)
    * @throws IOException
    */
   public static char[] FileWriter(char[] b,String name) throws IOException{
	    File file = new File(name);
	    Writer fileOut =new FileWriter(file);
	    fileOut.write(b);
	    fileOut.close();
	    return FileReader(name) ; 
   }

	
} 
