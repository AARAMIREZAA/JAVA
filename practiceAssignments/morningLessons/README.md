# Java Day 2 – OOP Basics Warm Up

1. What does OOP stand for? What is it, briefly

    object-oriented programming, a programming model centered around objects
    

2. What is a class?

    A class is like a constructor or "blueprint" for creating objcts

3. Classes in Java contain member variables and methods. Give a brief explanation for each:
   1. Member Variables:
    they define an objects properties or fields.
   2. Methods:
    Is a function which is attached to an object and can be called on it. 

4. In groups: The following are lines of code that could belong to a Shopping Cart class, but are out of order. Copy this code into a java file, then arrange the code to make a functional class. (In your groups, once you re-order the code, use your annotate tools to put a * next to any attributes, and a box around any methods. Then someone take a screen shot.)

```java
import java,util,ArrayList;

public class ShoppingCart {
    public ArrayList<String> items = new ArrayList<String>();
    public String store;
    public double total;
        
    public void add_item(String item, double price){
            
        this.items.add(item)
        this.total += price;

    }
}
```

```java
public class MyClass {

    // "psvm" user snippet for main method
    // "public' is an access modifier, access by anyone
    // "void" return type

    //fields,constructor, and method declarations

    //3 types of variables, local, member, and param 
    //variables are named in camel case
}
```