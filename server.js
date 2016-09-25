var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles=
{
    'article-one' : {
    title:'Article One|Allan Jojo',
    heading:'Article One',
    date:'22 Sep,2016',
    content:`
            <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article    .This is my first article.This is my first article.</p>
            <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article     .This is my first article.This is my first article.</p>
                  `
    },
    'article-two': {
    title:'Article Two|Allan Jojo',
    heading:'Article TWo',
    date:'20 Sep,2016',
    content:`
            <p>This is my second article.</p>
                  `
    },
    'article-three' : {
    title:'Article Three|Allan Jojo',
    heading:'Article Three',
    date:'5 Sep,2016',
    content:`
            <p>This is my Third article.</p>
                  `
    }
    };


function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
                <html>
                  <head>
                    <title>${title}</title>
                    
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
                              <h3>${heading}</h3>
                            </div>
                            
                            <div>
                                ${date}
                            </div>
                              
                            <div>
                                
                                ${content}
                              
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

app.get('/:articleName', function(req,res){
    //articleName=Article-one or artcile-two
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
