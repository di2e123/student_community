var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
const port = 3000;

app.use(express.static('public'));

function templateHTML(title, body){
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
        <li><a href="jejuair">
          <img src="./img/jejuair.jpg">
          <div class="box_title">
            제주항공
          </div>
          <div class="box_context">
            1월 31일까지 본인+1인 할인!!! 국내선 8000원 할인쿠폰도 추가요~
          </div>
        </a></li>
        <li><a href="cgv">
          <img src="./img/cgv.jpg">
          <div class="box_title">
            CGV
          </div>
          <div class="box_context">
            12월 23일까지 합격부적이 6천원 할인쿠폰으로 바뀐다?!!
          </div>
        </a></li>
        <li><a href="megabox">
          <div class="box_title">
            메가박스
          </div>
          <div class="box_context">
            12월 31일까지 수험표가져가면 영화티켓에다가 싱글콤보까지?!!(skt만 되니 조심!)
          </div>
        </a></li>
        <li><a href="ypbooks">
          <div class="box_title">
            영풍문고
          </div>
          <div class="box_context">
            12월 31일까지 도서 구입시 10% 할인 혜택제공!!!
          </div>
        </a></li>
        <li><a href="skt">
          <div class="box_title">
            SKT
          </div>
          <div class="box_context">
            핸드폰 바꿀 친구들! 수고0페 뿐만 아니라 여러가지 혜택들도 누리라구!
          </div>
        </a></li>
        <li><a href="lgu">
          <div class="box_title">
            LG U+
          </div>
          <div class="box_context">
            핸드폰 바꾸고 무조건 당첨되는 복권 이벤트하러가즈아~
          </div>
        </a></li>
        <li><a href="twayair">
          <div class="box_title">
            티웨이 항공
          </div>
          <div class="box_context">
            지나칠수능없지 2월10일까지 국내 항공권 20%할인!
          </div>
        </a></li>
        <li><a href="samsung">
          <div class="box_title">
            삼성
          </div>
          <div class="box_context">
            갓스물 이벤트! 12월 31일까지 핸드폰 구매하고 버즈 라이브 얻으러 가자구
          </div>
        </a></li>
        <li><a href="lg">
          <div class="box_title">
            LG
          </div>
          <div class="box_context">
            12월 31일까지 핸드폰 구매하고 LED 미러 스탠드 얻자
          </div>
        </a></li>
        <li><a href="vips">
          <div class="box_title">
            빕스
          </div>
          <div class="box_context">
            12월 20일까지 수험표 가지고가면 25%할인!
          </div>
        </a></li>
        <li><a href="seoulland">
          <div class="box_title">
            서울랜드
          </div>
          <div class="box_context">
            12월 27일까지 본인+1인 단돈 13000원에 입장가능!
          </div>
        </a></li>
        <li><a href="davich">
          <div class="box_title">
            다비치
          </div>
          <div class="box_context">
            12월 20일까지 나는20% 가족은10% 개꿀?
          </div>
        </a></li>
        <li><a href="dunkindonuts">
          <div class="box_title">
            던킨도너츠
          </div>
          <div class="box_context">
            12월 31일까지 던킨 츄이스티 2EA 쿠폰받자!
          </div>
        </a></li>
        <li><a href="Sulbing">
          <div class="box_title">
            설빙
          </div>
          <div class="box_context">
            수험생 모두 10%할인이라구!!
          </div>
        </a></li>
        <li><a href="high1">
          <div class="box_title">
            하이원리조트
          </div>
          <div class="box_context">
            12월 30일까지 대입 험생 스키 패키지 78%할인!!
          </div>
        </a></li>
        <li><a href="busanaircruise">
          <div class="box_temp">
            송도
          </div>
          <div class="box_title">
            해상케이블카
          </div>
          <div class="box_context">
            12월 31일까지 동반 1인까지 크리스탈 크루즈6000원 에어크루즈 5000원 할인!
          </div>
        </a></li>
        <li><a href="coexaqua">
          <div class="box_title">
            코엑스 아쿠아리움
          </div>
          <div class="box_context">
            2월 28일까지 입장료 수험생 50%할인 학생 40%할인
          </div>
        </a></li>
        <li><a href="aquaplanet">
          <div class="box_title">
            여수 아쿠아플레넷
          </div>
          <div class="box_context">
            12월 31일까지 수험생+동반3인 40%할인
          </div>
        </a></li>
        <li><a href="sealife">
          <div class="box_title">
            부산 씨라이프 아쿠아리움
          </div>
          <div class="box_context">
            1월 31일까지 수험생+동반3인 단돈 16000에 입장가능하다고?!!
          </div>
        </a></li>
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
  res.send(templateHTML());
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
