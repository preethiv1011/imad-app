var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
    title:'article-one |V.PREETHI',
    heading: 'Article one',
    date: 'AUGUST 25, 2017',
    content:`
     <p>
                this is the content for my first article.
                i made this article one today.
                and i am very happy.
            
              </p>  
              <p>
                 today is a holiday.
              </p>
    `
};
var htmlTemplate=`
        <html> 
        <head>
               <title>
                    article-one|V.PREETHI
               </title>
               <meta name="viewport" content="width=device-width, initial-scale=1"/>
               <link href="/ui/style.css" rel="stylesheet" />
           </head>
           <body>
               <div class="container">
                    <div>
                       <a href="/">home</a>
                    </div>
                    <hr>
                       <h3>
                         Article one
                       </h3>
                    <div>
                         AUGUST 25,2017
                    </div>
                    <div>
                      <p>
                        this is the content for my first article.
                        i made this article one today.
                        and i am very happy.
                    
                      </p>  
                      <p>
                         today is a holiday.
                      </p>
                     </div>
                  
                 </div>
           </body>
            
        </html>
`;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res){
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    });
    
app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
     });
    
    app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    });
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
