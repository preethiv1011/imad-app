// counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function ()  {
    
    //create the request object
    var request = new XMLhttpRequest();
    
        //capture the response and store it in a variable
        request.onreadystatechange = function() {
             if(request.readystate === XMLhttpRequest.DONE){
                 //TAKE SOME ACTION
              if(request.status === 200){
                    var counter = request.responseText ;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
              }
             }
          //not done yet 
        };  
        //make the request
         request.open('GET','http://preethiv1011.imad.hasura-app.io/counter',true);
         request.send(null);
             
};