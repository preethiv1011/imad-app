console.log('Loaded!');

// change the text of the main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = 'new value'; 

//move the image
var img = document.getElementById('madi');
var marginleft=0;
function moveRight() {
    marginleft = marginleft+1;
    img.style.marginleft=marginleft = 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    
};

// counter code
var button = document.getElementById('counter');var counter =0;

button.onclick = function()  {
    
    //make a request to the counter end point
    var request= new XMLhttprequest();
    
    
    //capture the response and store it in a variable
     request.onreadystatechange = function() {
         if(request.readystate === XMLhttprequest.DONE){
             //TAKE SOME ACTION
             if(reuest.status == 200){
                var counter = request.responseText ;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
    
             }
              
         }
        //not done yet 
     };
    
    
};