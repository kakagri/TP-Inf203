/* tp INF203 - Document rédigé par Khaled GRIRA */


// Question 2A
function wordCount(phrase){
  var vect= phrase.split(" ");
  var result={};
  for(var k=0;k<vect.length; k++){
    var mot = vect[k];
    if(result[mot]===NaN || result[mot]===undefined){
      result[mot]=1;
    }
    else{
      result[mot]=result[mot] +1;
    }
  }
  return result;
}


// Question 2B
function WordList(phrase){
  this.listOfCount= wordCount(phrase);
  var that= this;

  this.maxCountWord= function (){
    var maximum=0;
    var currentMaxWord;

    for(var word in that.listOfCount){

      var occOfWord=that.listOfCount[word];
      if(occOfWord>maximum){
        maximum=occOfWord;
        currentMaxWord=word;
      }
      if(occOfWord===maximum){
        if(word<=currentMaxWord){
          currentMaxWord=word;
        }
      }
    }
      return currentMaxWord
  }


  this.minCountWord= function (){
    var minimum;
    var currentMinWord;

    for(var word in that.listOfCount){

      if(minimum===undefined){
        minimum=that.listOfCount[word];
        currentMinWord=word;
        listOfMinWords=[currentMinWord];
      }
      else{

      var occOfWord=that.listOfCount[word];
      if(occOfWord<minimum){
        minimum=occOfWord;
        currentMinWord=word;
      }
      if(occOfWord===minimum){
        if(word<=currentMinWord){
          currentMinWord=word;
        }
      }
    }

    }
      return currentMinWord
  }

  this.getWords=function(){
    var vecteur=[];
    for(var mot in that.listOfCount){
      vecteur.push(mot);
    }
    vecteur.sort();
    return vecteur;
  }

  this.getCount=function (word){
    var nmb=that.listOfCount[word];
    if(nmb===NaN || nmb===undefined){
      return 0;
    }
    else{
      return nmb;
    }
  }
// Question 2C

  this.applyWordFunc=function(f){
    var vectOfWords=that.getWords();
    return vectOfWords.map(f);
  }

}


exports.wordCount = wordCount;
exports.WordList = WordList;
