package lijian.demo.web;

import lombok.Data;

@Data
public class DemoReq<T> {
	private String title;
	
	private T obj;
}
