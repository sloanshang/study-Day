package lijian.demo.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		SpringApplication.run(DemoMain.class, args);
	}

	@RequestMapping(value="/",method=RequestMethod.GET)
	public Object home() {
		return "Hello, world";
	}
}
