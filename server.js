var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleone = {
    title:'Article One|Allan Jojo',
    heading:'Article One',
    date:'22 Sep,2016',
    content:`
            <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article    .This is my first article.This is my first article.</p>
            <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article     .This is my first article.This is my first article.</p>
            <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article     .This is my first article.This is my first article.</p>
                  `
};

var content={
    title : 'title',
    heading: 'heading',
    date: 'date',
    content: 'content',
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
                <html>
                  <head>
                    <title>$(title)</title>
                    
                    <meta name="viewport" content="width=device-width,intial-scale=1"/>
                    
                    <link href="/ui/style.css" rel="stylesheet" />
                    
                  </head>
                  
                  <body>
                        <div class="class_0">
                            <div>
                                <a href="/">Home</a>
                            </div>
                            <hr/>
                            <div>
                              <h3>$(heading)</h3>
                            </div>
                            
                            <div>
                                $(date)
                            </div>
                              
                            <div>
                                
                                $(content)
                              
                            </div>
                        </div>
                  </body>
                </html>
                
                
                `;
            return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
    res.send(createTemplate(articleone));
});

app.get('/article-two', function(req,res){
    res.send('Article Two is requested and will be server.');
});

app.get('/article-three', function(req,res){
    res.send('Article Three is requested and will be server.');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
