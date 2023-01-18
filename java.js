//callbacks are functions which are passed as an argument to other function 

//function definition 
/*
function foo(a,b){ //paramters
  let c=a+b;
  console.log(c);
}


// function call
//foo(2,3);  // arguments

//foo("s","k");
*/
/*
function cb(){
  // some logic 
  
}

*/

//let a=2;
//let b=3;


// definition of zoo
function zoo(p){
    //
    p();
    
  }
  
  // calling zoo function 
  // cb is a callback function 
  
  zoo(  function cb(){   // this function cb is a callback function
  
    console.log("I am a callback function ");
  }    )
  
  
  
  /// you have to print all the items of an array using a callback function 
  // t arr=[1,2,3,4,54,5];
  //
  
  