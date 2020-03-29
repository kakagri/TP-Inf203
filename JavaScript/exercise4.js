let ex3 = require ('./exercise3.js');
let Student = ex3.Student;
let ForeignStudent = ex3.ForeignStudent;

function Promotion(){
  var lastIndex=0;
  var that=this;

  this.add= function(student){
    that[lastIndex]=student;
    lastIndex++;
  }

  this.size= function(){
    return lastIndex;
  }

  this.get=function(x){
    return that[x];
  }

  this.print= function(){
    var result="";
    for(var student=0; student<lastIndex; student++){
      result=result+that[student].toString()+"\n";
    }
    console.log(result);
    return result;
  }
  this.write= function(){
    var result= JSON.stringify(that);
    return result;
  }
  this.read= function(stringer){
    var intermediary= JSON.parse(stringer);
    for(var k=0; k<intermediary.lastIndex; k++){
      var cu= intermediary[k];
      if(cu["nationality"]===undefined){
        var currentStud= new Student(cu["lastName"],cu["firstName"],cu["id"]);
        that.add(currentStud);}
      else{
        var currentStud= new ForeignStudent(cu["lastName"],cu["firstName"],cu["id"],cu["nationality"]);
        that.add(currentStud);
      }
    }
    return that;
  }

  this.saveToFile= function(fileName){
    jsonData=that.write();
    var fs=require("fs");
    fs.writeFile(fileName, jsonData, function(err) {
    if (err) {
        console.log(err);
    }
    });

  }
  this.readFromFile=function(fileName){
    var fs=require("fs");
    jsonData=fs.readFile(fileName,'utf8', (err, data) => {
  if (err){throw err}

  var promo=that.read(data);
  return promo
});

  }

}



exports.Promotion = Promotion;
