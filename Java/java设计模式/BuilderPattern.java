package desinPattern;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 建造者模式
 * @author Administrator
 *
 */
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BuilderPattern {
 
	private String name ;
	private  String age ;
	
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		
		//BuilderPattern bs =new BuilderPattern();
		System.out.println(BuilderPattern.builder().name("1").build());
	//	bs..name("Adam Savage").age("San Francisco").build();
		
	//	System.out.println(bs.getName());
	}
}
