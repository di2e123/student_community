var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
const port = 3000;

var business = ['aquaplanet','busanaircruise','cgv','coexaqua','davich','dunkindonuts','high1','jejuair','lg','lgu','megabox','samsung','sealife','seoulland','skt','Sulbing','twayair','vips','ypbooks'];

app.use(express.static('public'));

function templateHTML(list){
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/css/index.css" type="text/css">
      <title>할인받을 수험생 모여라</title>
    </head>
    <body>
      <ul class="box">
        ${list}
      </ul>
    </body>
  </html>
  `;
}

function templateDetail(title, kr_title, kr_detail, kr_deadline){
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="css/common.css" type="text/css">
      <title>${title}</title>
    </head>
    <body>
      <div class="header">
        <div class="logo">
        SPEARE
        </div>
      </div>
      <div class="main">
        <div class="context">
          <div class="context_title">
          ${kr_title}
          </div>
          <div class="context_slider">
            <div class="context_text">
            ${kr_detail}
            </div>
              <div class="deadline">
              ${kr_deadline}
              </div>
            </div>
          </div>
        </div>
    </body>
  </html>

  `;
}


app.get('/', function(req, res){
  var list = '';
  var i = 0;
  while (i < business.length) {
      var kr_title = fs.readFileSync(`data/${business[i]}/${business[i]}_title`, 'utf8');
      var kr_context = fs.readFileSync(`data/${business[i]}/${business[i]}_context`, 'utf8');
      list = list +`
      <li>
      <a href="${business[i]}">
        <img src="/img/${business[i]}_detail.jpg"/>
        <div class="box_title">
          ${kr_title}
        </div>
        <div class="box_context">
          ${kr_context}
        </div>
      </a>
      </li>
      `;
    console.log(i);
    i+=1;
  }
    res.send(templateHTML(list));
});

app.get('/:pageId', function(req,res){
  var filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}/${filteredId}_title`, 'utf8', function(err,kr_title){
    fs.readFile(`data/${filteredId}/${filteredId}_detail`, 'utf8', function(err,kr_detail){
    fs.readFile(`data/${filteredId}/${filteredId}_deadline`, 'utf8', function(err,kr_deadline){
      res.send(templateDetail(filteredId,kr_title, kr_detail, kr_deadline));
    });
    });
    });
});

app.use(function(req, res, next){
  res.status(404).send('ERROR 404')
})

app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
});
