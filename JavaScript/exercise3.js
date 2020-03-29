/* tp INF203 - Document rédigé par Khaled GRIRA */


// Question 3A

function Student(lastName,firstName,id){
  this.lastName=lastName;
  this.firstName=firstName;
  this.id=id;
  var that=this;
// Question 3B
  this.toString = function(){
    var result= "student: "+[that.lastName,that.firstName,that.id].join(", ");
    return result;
  }

}

//Question 3C
function ForeignStudent(lastName,firstName,id,nationality){
  Student.call(this,lastName,firstName,id);
  this.nationality=nationality;
  var that=this;

  this.toString = function(){
    var result= "student: "+[that.lastName,that.firstName,that.id,that.nationality].join(", ");
    return result;
  }

}
exports.Student = Student;
exports.ForeignStudent = ForeignStudent;
