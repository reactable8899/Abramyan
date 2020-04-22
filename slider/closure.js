const olimModule = function() {
  function sum(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  return obj;
}()

export default olimModule;

const murodModule = function() {

  function sum(a, b, c) {
    return a + b + c;
  }

  return {
    sum: sum
  }
}()

// console.log(olimModule.sum(2, 3));
// console.log(murodModule.sum(1, 2, 3));
