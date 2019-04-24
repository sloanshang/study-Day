package lijian.demo.web;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

	@RequestMapping(value = "/a", method = RequestMethod.POST)
	public Object a(@RequestBody DemoReq<Foo> req) {

		return doReport(req, (a, b) -> {
			Foo foo = a.getObj();
			b.setMsg("foo.name is " + foo.getName());
		});
	}

	@RequestMapping(value = "/b", method = RequestMethod.POST)
	public Object b(@RequestBody DemoReq<Bar> req) {
		return doReport(req, (a, b) -> {
			Bar bar = a.getObj();
			b.setMsg("bar.level is " + bar.getLevel());
		});
	}

	@RequestMapping(value = "/c", method = RequestMethod.POST)
	public Object c(@RequestBody DemoReq<List<Foo>> req) {
		return doReport(req, (a, b) -> {
			List<Foo> fooList = a.getObj();
			List<String> names = fooList.stream().map(t -> t.getName()).collect(Collectors.toList());
			b.setMsg("foo list is " + names);
		});
	}

	private <T> DemoResult doReport(DemoReq<T> req, ReportHandler<T> h) {
		System.out.println(req);

		DemoResult result = new DemoResult();
		result.setTitle(req.getTitle());
		h.process(req, result);
		return result;
	}

	@FunctionalInterface
	private static interface ReportHandler<T> {

		void process(DemoReq<T> req, DemoResult result);
	}
}
