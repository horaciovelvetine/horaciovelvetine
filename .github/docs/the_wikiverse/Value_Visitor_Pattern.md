# Wikidata Value-Visitor: The Visitor Pattern

The [Java Wikidata Toolkit](https://github.com/Wikidata/Wikidata-Toolkit) implements a few classes ending with a Visitor keyword, this is a reference to a  design pattern first published in [Design Patterns - Elements of Reusable Object-Software](https://en.wikipedia.org/wiki/Design_Patterns). The book contains C++ code examples, discussions of Object Oriented solutions, design patterns which scale well at enterprise, is a tremendous resouce and can be found anywhere. 

Discussion on the `Visitor` pattern begins on pg. 331 - if you want to get **THE** comprehensive reference that is **THE** place to start. 

Ignorantly encountering this pattern is enormously frustrating, ironically due to the intended behavior. These sort of esoteric structures are pretty tough to read to about to an understanding, but exist as a means of organizing operations as a class to act on a diverse, or even distinct set of objects which share a behavior not easily (or best) implemented as an interface.

Did that help? No?

## A Contextual Example: 

Inside of the Wikidata toolkit the Visitor pattern emerges as the `SnakVisitor` & `ValueVisitor`'s, with the most straightforward example being the `ValueVisitor`. Reading the [docs](https://wikidata.github.io/Wikidata-Toolkit/org/wikidata/wdtk/datamodel/interfaces/ValueVisitor.html) this interface asks that its implementors provide a - `visit()` method for 7 of the returnable value types. Now imagine if you, in calling using API, wanted to make a query based request and know there will be (value...) results, but you don't know their types. In order to make those results more meaningful, you'd likely end up type narrowing out something verbose like this:  

```java
public void whatKindaResultsAreThese(List<Values> results){
  // etc... with handling for each of the 7 result types
  for (Value value : results) { 
    if (value instanceof TimeValue) {
      handleTimeValue((TimeValue) value);
    } else if (value instanceof StringValue) {
      handleStrigValue((StringValue) value)
    } else {
      // etc... with handling for each of the 7 result types
    }
  }
}
```

This isn't the worst thing - but with interfaces can be handled easily behind the scenes without the verbosity. A single class using this interface handles all this type narrowing for you, and allows defining custom behavior for each implementing (result value) type. 

You can see this implemented in practice inside the `UnknownSnakVisitor.java` class, with only 3 potential result types important, the custom handling to format Times differently from Strings from Entity ID's is all organized in a single place. The final (and implemented results) are based on the WikidataToolkit's implementation, but when used as intended work out to a model able to encapsulate the logic and return the needed all in a pretty understandable way.

```java
public class ValueData implements ValueVisitor<ValueData>, Loggable {
  // Format the Wikidata specific implementation of TimeValue to a format which
  // can be used to find the correlated EntityDocument data from the Wikidata API 
  // e.g. "2021-01-01T00:00:00Z" => "2024-01-01"
  public static final String WDATA_PUNC_FORMATTING = "\\s*\\(.*\\)";
  public String value;
  public ValueType type;

  public enum ValueType {
    String, DateTime, EntityId, Quantity
  }

  @Override
  public ValueData visit(EntityIdValue value) {
    if (value != null) {
      this.value = value.getId();
      this.type = ValueType.EntityId;
    }
    return this;
  }

  @Override
  public ValueData visit(TimeValue value) {
    if (value != null) {
      this.value = convertToWikidataSearchableDate(value);
      this.type = ValueType.DateTime;
    }
    return this;
  }

  //... skipped the otherwise return null; required methods for brevity...

  private String convertToWikidataSearchableDate(TimeValue time) {
    String punc = time.toString().replaceAll(WDATA_PUNC_FORMATTING, "");
    SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat outputFormat = new SimpleDateFormat("MMMM d, yyyy");
    try {
      return outputFormat.format(inputFormat.parse(punc));
    } catch (Exception e) {
      print("Exception Encountered while formatting TimeValue");
      return punc;
    }
  }

}
```

## References: 
- [Free Code Camp Using Design Patterns in Java with Spring Boot](https://www.freecodecamp.org/news/how-to-use-design-patterns-in-java-with-spring-boot/)
- [GOF Pattern.com](https://www.gofpattern.com/) 
- [Baeldung: Java Visitor Pattern](https://www.baeldung.com/java-visitor-pattern)
- [Gang of Four Design Patterns](https://springframework.guru/gang-of-four-design-patterns/)
- [Intro Gang of GOF Design Patterns (Geeks for Geeks)](https://www.geeksforgeeks.org/introduction-to-gang-of-fourgof-design-patterns/)
