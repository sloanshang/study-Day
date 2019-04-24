package SpringBootWeb.utils;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class systemInTest {


	public static void main(String[] args) throws IOException {
	//	testByInputStreamLenghNolimit();
		// System.out.println(intToByte(198));;
		testByBufferReader();
		
	}
	
	/**
	 * 
	 * byte范围为[-128,127],input.read()返回的值为[0、-255],因为java中的byte范围值为[-128,127]
	       返回的结果为int 型
	 * @throws UnsupportedEncodingException 
	 */
	public static  void testByteRange() throws UnsupportedEncodingException {
	   byte[] b= new byte[3] ;
	   b[0] = 127;
	   b[1] = -80;
	   b[2] = -102 ;
	   System.out.println("尚的byte内容为:" + new String(b, "utf-8"));
	   for(byte b1: "尚".getBytes()){
		   System.out.println(b1);
  	   }
	}
	
	public static byte  intToByte(int n) {
		
		 byte a=(byte)127;
	     byte b=(byte)128;
	     byte c=(byte)100;
	     int  x=0xff;//255
	     byte d=(byte)x;
	     x=0x80;//128
	     byte f=(byte)x;
	     c=(byte)(c*3);
	  //   System.out.println(a+" "+b+" "+c+" "+d+" "+f );
		
		return (byte) n;
	} 
	
	
	/****
	 * 用字节的方式读取输入字节流，此时如果输入的内容为你，则打印出来的为乱码，有长度限制
	 * @throws IOException
	 */
	public static void testByInputStreamLenghlimit() throws IOException{
		
		InputStream input = System.in ;
		System.out.println("请输入内容:");
		byte[] b= new byte[1] ;
		int len = input.read(b) ;
		System.out.println("输入的内容为:" + new String(b,0,len));
		input.close();
	}
	
	/****
	 * 用字节的方式读取输入字节流，长度没有限制，但是代码量大
	 * @throws IOException
	 */
	public static void testByInputStreamLenghNolimit() throws IOException{
		
		InputStream input = System.in ;
		StringBuilder sb = new StringBuilder();
		System.out.println("请输入内容:");
		int temp = 0;
		List<Byte> byteArr = new ArrayList<Byte>();
		//byteArr.toArray(a)
		
		while((temp = input.read()) != -1 ) {
			
			System.out.println(temp);   //如果想要查看具体的字节内容的话，则需要将int 转byte
			if(temp == 13) {
				break ;
			}
			byteArr.add(intToByte(temp)) ;     //intToByte转换成byte
		}
		byte[] bs = new byte[byteArr.size()];
        for(int i = 0 ;i <byteArr.size() ;i++) {
        	bs[i] = byteArr.get(i).byteValue();
        }
		System.out.println("输入的内容为:" + new String(bs));
		input.close();
	}
	
	
	
	/****
	 * 通过BufferReader来读取
	 * @throws IOException
	 */
	public static void testByBufferReader() throws IOException{
		
		BufferedReader input =new BufferedReader(new InputStreamReader(System.in))  ;
		System.out.println("请输入内容:");
		String str = input.readLine();
		System.out.println("输入的内容为:" +str );
		input.close();
	}
	
	

}

