var ground, groundImg;
var player, playerImg;
var spaceShip, spaceShipImg;

function preload() {
  groundImg = loadImage("ground1.jpg");
  playerImg = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png"
  );
}
function setup() {
  createCanvas(800, 615);
  ground = createSprite(400, 200, 1200, 600);
  ground.addImage("grnd1", groundImg);
  ground.velocityX = -6;
  ground.scale = 1.6;

  player = createSprite(80, 430, 50, 50);
  player.addAnimation("plr", playerImg);
}

function draw() {
  background(0);

  if (ground.x < 0) {
    ground.x = 400;
  }
  drawSprites();
}
