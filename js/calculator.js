var calculatorModule = (function() {
  var total = 0;
  var memory = 0;

  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
    validations: validations
  };

  function validations(x){
    if(typeof(x) !=='number'){
      throw new Error('Not a number!');
    }
  }

   function load(x){
    validations(x);
    total = x;
    return total;
    console.log('Loading',x,'into total');
   }

   function getTotal(){
    console.log('2.js get total:',total);
      return total;
   }

   function add(x){
    validations(x);
    total = x+total;
    console.log('2.js adding');
    return total;
   }

   function subtract(x){
    validations(x);
    total = total-x;
    console.log(' 2.js substract');
    return total;
   }

   function multiply(x){
    validations(x);
    total = x*total;
    console.log(' 2.js mult');
    return total;
   }

   function divide(x){
    validations(x);
    total = total/x;
    console.log(' 2.js div','x: ',x,'total:',total);
    return total;
   }
  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function recallMemory(){
      console.log(' 2.js RC: Return Memory=',memory);
      return memory;
    }
  /**
   * Stores the value of `total` to `memory`
   */
   function saveMemory(){
      console.log('2.js SM: Total->Memory Storing!!','M:',memory,'<= T:',total);
      memory = total;
   }
    function clearMemory(){
       console.log('2.js Clear');
       memory = 0;
    }
});//THIS IS THE CLOSING BRACKETS FOR THE CALCULATORMODULE
