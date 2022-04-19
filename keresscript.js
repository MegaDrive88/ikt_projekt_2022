var elem = document.documentElement;
var a = 50;
var x = screen.width;
var y = screen.height;
var runTime = 1;
const tiles = new Array(a*a);  
if(x >= y)  {
    tilesize = 0.9*y/a;
    pushY = 0.05*y;
    pushX = (x-(tilesize*a))/2;

}
else {
    tilesize = x/a;
    pushX = 0;
    pushY = (y-(tilesize*a))/2;
}

function openFullscreen() {
    if(elem.requestFullscreen) {
    elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
    }
}

function Editor() {
    document.querySelector("#s1").className="s1";
    document.querySelector("#main").className="no";
    document.querySelector("#menu").className="no";
    document.querySelector("#collapser").className="no";
    document.querySelector("#collapser2").className="no";

for(i=0; i<a*a; i++) {
    tiles[i] = document.createElement("span");
    tiles[i].className = "canvastile";
    tiles[i].style.width=tilesize+"px";
    tiles[i].style.height =tilesize+"px";
    tiles[i].style.top=pushY+"px";
    tiles[i].style.left=pushX+"px";
    document.querySelector("#canvas").appendChild(tiles[i]);
    if(runTime <= a-1) {
        runTime++;
        pushX += tilesize;
    }
    else {
        runTime = 1;
        pushY += tilesize;
        if(x>=y) {
            pushX = (x-(tilesize*a))/2;
        }
        else {
            pushX=0;
        }
    } 
}
for(i = 0; i<a*a; i++) {
    tiles[i].addEventListener("mousedown", coloring);
}  

}
function coloring(event) { 
    event.target.style.backgroundColor="red";
}
