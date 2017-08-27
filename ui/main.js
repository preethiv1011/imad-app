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
var button = document.getElementById('counter');
var counter =0;
button.onclick = function()  {
    
    //make a request to the counter end point
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};