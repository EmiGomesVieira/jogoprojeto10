var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["89d1b191-b5a6-44a6-8414-bb896210c2ad"],"propsByKey":{"89d1b191-b5a6-44a6-8414-bb896210c2ad":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"vGWAFa.mUne7tCUqj7VEz594sKyohbhM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vGWAFa.mUne7tCUqj7VEz594sKyohbhM/category_sports/beachball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//grupo para os tijolos
var tijolao = createGroup();

//criando sprites dos tijolos
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


//adicionando os tijolos no grupo
tijolao.add(box1);
tijolao.add(box2);
tijolao.add(box3);
tijolao.add(box4);
tijolao.add(box5);
tijolao.add(box6);
tijolao.add(box7);
tijolao.add(box8);
tijolao.add(box9);
tijolao.add(box10);
tijolao.add(box11);
tijolao.add(box12);
tijolao.add(box13);
tijolao.add(box14);
tijolao.add(box15);
tijolao.add(box16); 


var score=0;


paddle = createSprite(200,390,100,20);

ball = createSprite(200,200,20,20);


//criação de bordas
createEdgeSprites();

function draw() {
  
  background("white");
  
   textSize(25);
  text("Pontuação:"+score, 225, 20);
 
  
  
  //quicando a bola nas bordas já criadas
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  ball.bounceOff(tijolao,breakBrick);
  

  drawSprites();

  //fazendo a barrinha se mexer junto om o mouse do player e ajustando a localização dela na tela
  paddle.x = World.mouseX
   if(paddle.x > 360){
     paddle.x = 360
   }
   
   if(paddle.x < 40){
     paddle.x = 40
   }
  //fazendo a bola se mexer
  if(keyDown("ENTER")){
    ball.velocityX = 10;
    ball.velocityY= 12; 
  }
  
  if(ball.isTouching(bottomEdge)){
    
    ball.velocity= 0
    textSize(50)
    text("VOCE PERDEU",20,200);
  }
  
  if(score==16){
     ball.velocity= 0 ;
    textSize(50);
    text("VOCE GANHOU", 20, 200);
  }
}
  
// fazendo a bola quebrar os tijolos
  function breakBrick(ball,tijolao){
    ball.bounceOff(tijolao)
 tijolao.remove();
    score=score+1;
  }

  




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
