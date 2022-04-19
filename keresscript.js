var elem = document.documentElement;
var x = screen.width;
var y = screen.height;
var runTime = 1;
var i = 0;
var caller;
const tiles = new Array(400);  
if(x >= y)  {
    tilesize = 0.9*y/20;
    pushY = 0.05*y;
    pushX = (x-(tilesize*20))/2;
}
else {
    tilesize = x/20;
    pushX = 0;
    pushY = (y-(tilesize*20))/2;
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
    document.querySelector("#main").className="no";
    document.querySelector("#menu").className="no";
    document.querySelector("#collapser").className="no";
    document.querySelector("#collapser2").className="no";

for(i=0; i<400; i++) {
    tiles[i] = document.createElement("span");
    tiles[i].className = "canvastile";
    tiles[i].style.width=tilesize+"px";
    tiles[i].style.height =tilesize+"px";
    tiles[i].style.top=pushY+"px";
    tiles[i].style.left=pushX+"px";
    document.querySelector("#canvas").appendChild(tiles[i]);
    if(runTime <= 19) {
        runTime++;
        pushX += tilesize;
    }
    else {
        runTime = 1;
        pushY += tilesize;
        if(x>=y) {
            pushX = (x-(tilesize*20))/2;
        }
        else {
            pushX=0;
        }
    }
    
}
for(i = 0; i<400; i++) {
    tiles[i].addEventListener("click", coloring )
}
    
}


function coloring(event) {
    
    event.target.style.width=10*tilesize+"px";
}
