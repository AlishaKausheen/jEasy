//creating a class that encapsulate the array functionality
class ElementCollection extends Array {}
function $(param) {
  // in jEasy this $ sign is returning a special type of array
  if (typeof param === `string` || param instanceof String) {
    // there are two different ways to create strings in n js
    //if this true then we know we have string selector
    return new ElementCollection(...document.querySelectorAll(param)); //spreading the information out in the Element Collection
  } else {
    return new ElementCollection(param); // param is the only element for array having only one element
  }
}
