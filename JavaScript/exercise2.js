function wordCount(phrase){
  var vect= phrase.split(" ");
  var result={};
  for(var k=0;k<vect.length; k++){
    var mot = vect[k];
    if(result[mot]==NaN || result[mot]==undefined){
      result[mot]=1;
    }
    else{
      result[mot]=result[mot] +1;
    }
  }
  return result;
}


console.log(wordCount("bonjour je suis khaled grira grira grira khaled khaled "));
