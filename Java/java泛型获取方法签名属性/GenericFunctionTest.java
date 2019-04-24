package SpringBootWeb.utils;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GenericFunctionTest {
	/**
	 * 内部静态GenerateMap工具类,根据引用类型来生成Map集合，注意，不能为基本类型，在基本类型的情况下,会有问题
	 * @author shanglonghua
	 *
	 */
	public static class GenerateMap{
		public static <T> Map<String,Object> getMap(Class<T> clazz,String methodName,Object...parameterTypes) throws NoSuchMethodException, SecurityException{
	    	Map<String,Object> map= new HashMap<String,Object>();
	    	Class<?>[]  parameterTypesClass= new  Class<?>[parameterTypes.length];
	    	for(int i= 0;i < parameterTypes.length; i++) {
	    		parameterTypesClass[i] = parameterTypes[i].getClass() ;
	    	}
	    	Method  method= clazz.getMethod(methodName, parameterTypesClass);
	    	for (int i=0; i<method.getParameters().length; i++) {
	    		 map.put(method.getParameters()[i].getName(), parameterTypes[i]) ;
	        }
	        System.out.format("%s\n", map);
	    	return map ;
	    }
	}
	
	public Map<String,Object>  farmDataSource(String orgCode,String farmOrg) throws NoSuchMethodException, SecurityException {	
		return GenerateMap.getMap(this.getClass(),Thread.currentThread().getStackTrace()[1].getMethodName(),orgCode,farmOrg) ;
	}
	public Map<String,Object> checkGenStock(String orgCode, String projectCode, String culled, String outboundCode, String sex, String location) throws NoSuchMethodException, SecurityException {
		return GenerateMap.getMap(this.getClass(),Thread.currentThread().getStackTrace()[1].getMethodName() ,orgCode, projectCode, culled, outboundCode, sex, location) ;
	}
	
	/**
	 * 
	 * @param orgCode
	 * @param farmOrg
	 * @return
	 * @throws NoSuchMethodException
	 * @throws SecurityException
	 */
	
    public  Map<String,Object>  farmDataSource(Integer orgCode, Integer farmOrg) throws NoSuchMethodException, SecurityException {	
    	return GenerateMap.getMap(this.getClass(),Thread.currentThread().getStackTrace()[1].getMethodName(),orgCode,farmOrg);
	}
    
    /**
     * 以下这种基本类型的话，调用则会有问题,因为反射找不到该方法
     * @param orgCode
     * @param farmOrg
     * @return
     * @throws NoSuchMethodException
     * @throws SecurityException
     */
    
    public  Map<String,Object>  farmDataSource(int orgCode, int farmOrg) throws NoSuchMethodException, SecurityException {
    	return GenerateMap.getMap(this.getClass(),Thread.currentThread().getStackTrace()[1].getMethodName(),orgCode,farmOrg);	
	}
    
   
	public static void main(String[] args) throws NoSuchMethodException, SecurityException {
	  	
	 GenericFunctionTest t = new GenericFunctionTest();
     t.farmDataSource("1613", "4-00001-2");
	 t.farmDataSource(20, 200);
	 t.checkGenStock("161322001", "SWIWE", "C", "1", "F", "1");
	
//	 Object as = 10;
//	 List<Integer> as = new ArrayList<int.class>();  //list这种不允许
//	 Class<Integer> clazzd = int.class ;
//	 System.out.println(int.class.getSimpleName()); 
//	 System.out.println(as.getClass().getSimpleName()); 
 	}
	
}
