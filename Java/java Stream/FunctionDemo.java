package SpringBootWeb.utils;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class FunctionDemo {

public static void main(String[] args) {

	 int incr = 20;  int myNumber = 10;
	 modifyTheValue(myNumber, (Integer val)-> val + incr);
	 myNumber = 15;  
	 modifyTheValue(myNumber, val-> { return val * 10 ;});
	 modifyTheValue(myNumber, val-> val - 100);
	 modifyTheValue(myNumber, val-> "somestring".length() + val - 100);
//	 Function<Integer, Integer> f  = new Function<Integer, Integer>(){
//		 public Integer apply(Integer val){
//		       return 100;
//		   }
//	 };
			  
	// Integer a = new Function<Integer,Integer>().apply(val->val + incr);
	 Function<Integer, Integer> f = t-> t + 10;
	 Function<Integer, Integer> f1 = (Integer t)-> t + 10;
	 Function<Integer, Integer> f2 = (Function<Integer,Integer>)(Integer t)-> t + 10;
	 int number1= f2.apply(100);
	// System.out.println(number1);
	 List<Integer> lists = Arrays.asList(10,100,1000,1000);
	 
	 int sum = lists.stream().map(t->t).mapToInt(t->t).sum();
	// int sum2 = lists.stream().map(t->t).reduce(0, 0);
	 System.out.println(sum);
	 
	 
	 
	 Predicate<? super Integer> predicate  = t-> t >100 ;
	 boolean as=  predicate.test(10);
	
	 List<Integer> listsss = lists.stream().filter(predicate).collect(Collectors.toList());
	 System.out.println(listsss);
	 
	 List<Integer> list2 = lists.stream().map(f2).collect(Collectors.toList());
	 List<String> list3=  lists.stream().map(t-> t + "100").collect(Collectors.toList());
	// System.out.println(list2);
 	 
	// List<Intger> list = 
	 String arr[] = {"1","3","4","5"};
	 List<String> listss = Arrays.asList(arr);
	 System.out.println(listss);
}

static void modifyTheValue(int valueToBeOperated, Function<Integer, Integer> function){
	
	int newValue = function.apply(valueToBeOperated);
	// System.out.println(newValue);
}

}
