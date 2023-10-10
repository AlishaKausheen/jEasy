//creating a class that encapsulate the array functionality
class ElementCollection extends Array {
  ready(cb) {
    // call back as param to know when it is ready
    // we have to call ready whenever we are passing
    const isReady = this.some((e) => {
      // if some of the element in the array matches the selector then we know that we are ready

      return e.readyState != null && e.readyState != `loading`; // we have some type of readystate and not loading
    });
    if (isReady) {
      // if the page is already loaded
      cb(); // call back function
    } else {
      document.addEventListener(`DOMContentLoaded`, cb); // if page is finished loading
    }
  }
}
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
