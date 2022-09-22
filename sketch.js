/*
VARIAVEIS
*/

//imagens dos sprites

var heroiImg, chaoImg, monstroImg;

var heroiDireitaImg, heroiEsquerdaImg

//sprites

var heroi, chao, mosntro;




/*
PRELOAD
*/
function preload(){

heroi = loadAnimation("Heroi.png");
heroiDireitaImg = loadAnimation("HeroiDireita1.png","HeroiDireita2.png","HeroiDireita3.png");
heroiEsquerdaImg = loadAnimation("HeroiEsquerda1.png","HeroiEsquerda2.png","HeroiEsquerda3.png");

}
/*
SETUP
*/
function setup() {
 createCanvas(600,400);

//CREATSPRITE

heroi = createSprite(300,200);
heroi.addAnimation("heroiParado", heroiImg);
heroi.addAnimation("heroiAndandoDireita", heroiDireitaImg);
heroi.addAnimation("heroiAndandoEsquerda", heroiEsquerdaImg);

}
/*
DRAW
*/
function draw() {
 background(250);

//velocidades
if(keyDown("d") || keyDown("right")){
    heroi.x = heroi.x +4;

    heroi.changeAnimation("heroiAndandoDireita", heroiDireitaImg);
}
if(keyDown("a") || keyDown("left")){
    heroi.x = heroi.x -4;

    heroi.changeAnimation("heroiAndandoEsquerda", heroiEsquerdaImg);
}


drawSprites();
}