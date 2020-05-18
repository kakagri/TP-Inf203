var http=require('http'),
path=require('path'),
url=require('url'),
fs=require('fs'),mime=require('mime-types'),querystring=require('querystring'),
striptags=require('striptags');
var port=parseInt(process.argv[2]);
var server= http.createServer(function(request,response){
  var my_path=url.parse(request.url).pathname;
  var my_url=url.parse(request.url,true);
  if(my_path==='/'){
    response.writeHead(200,"OK",{'Content-Type':'text/html','charset':'utf-8'});
    response.write('Le serveur fonctionne bien');
    response.end();
  }
  else{
  if(my_path==='/exit'){
    response.writeHead(200,"OK",{'Content-Type':'text/html','charset':'utf-8'});
    response.write('The server will stop now.');
    response.end();
    process.exit(0);
  }
  else{
    try{
      if(my_path==='/hello'){
        var name=my_url.query['name'].trim();
        response.writeHead(200,"OK",{'Content-Type':'text/html','charset':'utf-8'});
        var rep="<html><head><meta charset='utf-8'></head><body>Hello "+name+"</body></html>";
        response.write(rep);
        response.end();

      }
      else{
        if(my_path==='/hello2'){
          var name=my_url.query['name'].trim();
          name=striptags(name);
          fs.readFile('./names.txt','utf-8',
            function(error,data){
              if(error){
                response.writeHead(404);
                response.write('Erreur: fichier non trouve');}
              else{
                  response.writeHead(200,"OK",{'Content-type':'text/html'});
                  var rep="<!DOCTYPE html><head><meta charset='utf-8'></head><body>Hello "+name+", the following users have already visited this page:"+data+'</body></html>'
                  response.write(rep);
            }
            response.end();
          });

          fs.appendFile('./names.txt', " "+name+",", function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        }
        else{
          if(my_path=='/clear'){
            fs.writeFile('names.txt', '', function (err) {
              if (err) return console.log(err);
              console.log('enregistre');
              response.writeHead(200);
              response.end();
            });}
          else{
          fs.readFile('.'+my_path,
            function(error,data){
              if(error){
                response.writeHead(404);
                response.write('Erreur: fichier non trouve');}
                else{
                  response.writeHead(200,"OK",{'Content-type':mime.lookup(my_path)});
                  response.write(data);
            }
            response.end();
          });}
        }

        }
    }
    catch(e){
      console.log(e);
      response.write('an error occured');
      response.end();
    }

  }}

}
);































server.listen(port, function(error){
  if(error){
    console.log("Une erreur est survenue",error);
  }
  else{
    console.log('Le serveur écoute sur'+port);
  }
})
