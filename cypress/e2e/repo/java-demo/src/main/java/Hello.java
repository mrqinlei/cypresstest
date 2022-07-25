import java.util.Arrays;

/**
 * @ClassName Hello
 * @Description
 * @Author tangchaoyu
 * @Date 2019-08-01 14:49
 * @Version 1.0
 **/
public class Hello {
    public static void main(String[] args) {
        String regex = "^[\\w][\\w\\.\\-_]+";
        System.out.println("a-1-2" .matches(regex));
        System.out.println("1-12121212132323221211-2" .matches(regex));
        System.out.println("1.0.1" .matches(regex));
        System.out.println("1.0.1-SNAP1111111111111111SHOT" .matches(regex));
        System.out.println(".." .matches(regex));
        System.out.println("//" .matches(regex));
        String toBytes = "hell2323232o";
        byte[] bytes = toBytes.getBytes();
        System.out.println(bytes);
        System.out.println(new String(bytes));
        System.out.println(Arrays.toString(bytes));
        System.out.println(String.valueOf(Arrays.toString(bytes)));
        
    }
}
