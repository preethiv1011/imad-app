// counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function ()  {
    
    //create the request object
                counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
     
     
    
};