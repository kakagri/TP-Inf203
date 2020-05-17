
var couleurs=["violet","gray","slateblue","dodgerblue","tomato","gray", "cyan", "gold", "magenta"]
function loadDoc(){
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET','text.txt');
ourRequest.onload= function(){
  var textarea= document.getElementById("textarea")
  textarea.value=ourRequest.responseText;
}
ourRequest.send();
}

function loadDoc2(){
  var ourRequest=new XMLHttpRequest();
  ouRequest.open('GET','text.txt');
  ourRequest.onload= function(){
    var div=document.getElementById("textarea2");
    var par=ourRequest.responseText.split("<br/>");
    for (var k=0; k<par.length; k++){
      var p=document.createElement("p");
      p.value=par[i];
      p.style.color=couleurs[i%9];
      div.appendChild('p');
    }
  }
  ourRequest.send();
}
