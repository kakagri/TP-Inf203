/* tp INF203 - Document rédigé par Khaled GRIRA */



// Question 1A

function fibonacciIt(n){
  if(n===0){return 0;}
  else {
    if(n===1){return 1;}
    else{
      var f_nm1=0, f_nm2=1;
      for(var k=2; k<=n; k++){
        var z= f_nm1+f_nm2;
        f_nm2=f_nm1;
        f_nm1=z;
      }
      return f_nm1+f_nm2;
    }
  }
}


// Question  1B

function fibonacciRec(n) {
  if(n===0){return 0;}
  else {
    if(n===1){return 1;}
    else{
      return fibonacciRec(n-1)+ fibonacciRec(n-2);
    }
  }
}


// Question 1C

function fibonacciArray(vect){
  var n=vect.length;
  result=[];
  for(var k=0; k<n; k++){
    try{
      result[k]=fibonacciRec(vect[k]);
    }
    catch(e){
      result[k]=undefined;
    }
  }
  return result;

}

// Question 1D

function fibonacciMap(vect){ return vect.map(fibonacciRec)}



exports.fibonacciIt = fibonacciIt;
exports.fibonacciRec = fibonacciRec;
exports.fibonacciArray = fibonacciArray;
exports.fibonacciMap = fibonacciMap;
