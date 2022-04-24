var elem = document.documentElement;
var a = 50;
var x = screen.width;
var y = screen.height; 
var runTime = 1;
var slotRun = 1;
var columns = 0;
var color = "black";

var uitemp = document.querySelector("#uitemp");
var bottomUI = document.querySelector("#bottomui");
const tiles = new Array(a*a);  

if(x >= y)  {
    tilesize = 0.9*y/a;
    pushY = 0.05*y;
    pushX = (x-(tilesize*a))/2;
    
    bottomUI.style.position = "fixed";
    bottomUI.style.width = a*tilesize+"px";
    bottomUI.style.height = pushY+"px";
    bottomUI.style.left = pushX+"px";
    bottomUI.style.top = pushY+a*tilesize+"px";
    bottomUI.style.backgroundColor=color;

}
else {  
    tilesize = x/a;
    pushX = 0;
    pushY = (y-(tilesize*a))/2;
}

const slots = new Array(48);

if(x/y<=1.49) {
    if(x<y) {
    var slotsize = x/6;
    slotsize -= (x/5)-(slotsize);
    var slotX = (pushX/2+(x-(slotsize*6)))/7;
    var newColumn = 1;
    var slotbreakpoint = 1;
    var slotcount = 6;
    }
    else {
    var slotcount = 24;
    var slotbreakpoint = 1;
    var slotsize = y/12;
    var newColumn = 12;
    slotsize -= (y/10)-(slotsize) ;

    if(slotsize>pushX/2) {
        slotsize = pushX/2;
    }
    var slotX = pushX/2+ ((pushX/2-slotsize)/2);
    }
}

else if(x/y>1.49){
    var slotbreakpoint = 2;
    var slotsize = y/12-y/108; 
    var slotX = pushX/2+(0.66*(pushX/4-slotsize));
    var slotcount = 48;
    var newColumn = 12;
}
if(newColumn==12) {
    var slotY = (y-(slotsize*12))/13;
    var yAdd = slotsize + slotY;
}
else {
    var slotY = ((y-(a*tilesize))/2) +(a*tilesize)+((((y-(a*tilesize))/2)-slotsize)/2);
    var xAdd = slotsize + slotX;
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
    bottomUI.style.display="block";
    
    for(i = 0; i < slotcount; i++) {
        slots[i] = document.createElement("span");
        slots[i].className = "slot";
        slots[i].style.width= slotsize+"px";
        slots[i].style.height = slotsize +"px";
        slots[i].style.top=slotY+"px";
        slots[i].style.left=slotX+"px";
        document.querySelector("#uitemp").appendChild(slots[i]);
        if(slotRun <= newColumn - 1) {
            slotY += yAdd;
            slotRun++;
        }
        else {
            columns++;
            if(newColumn == 12) {
                slotY = (y-(slotsize*12))/12;
            }
            else if(newColumn == 1) {
                slotY = ((y-(a*tilesize))/2) +(a*tilesize)+((((y-(a*tilesize))/2)-slotsize)/2);
            }
            if(columns==slotbreakpoint && x/y > 1.49) {

                slotX += a*tilesize+2*0.66*(pushX/4-slotsize) + slotsize;
            }
            else if(columns!==slotbreakpoint && x/y > 1.49){
                slotX += 0.66*(pushX/4-slotsize)+ slotsize;
            }
    
            if(x/y<=1.49) {
                if(x<y) {
                slotX += xAdd;
                }
                else {
                slotX += (pushX/2- ((pushX/2-slotsize)/2)) + a* tilesize + ((pushX/2-slotsize)/2);
                }
            }

            slotRun = 1;
            
        }  
    }
    
    uitemp.className = "uitemp";
    uitemp.style.top="0px";
    uitemp.style.height = "100%";
    uitemp.style.left = pushX/2 + "px";
    uitemp.style.width = a*tilesize+pushX+ "px";

for(i=0; i<a*a; i++) {
    tiles[i] = document.createElement("span");
    tiles[i].className = "canvastile";
    tiles[i].style.width=tilesize+"px";
    tiles[i].style.height =tilesize+"px";
    tiles[i].style.top=pushY+"px";
    tiles[i].style.left=pushX+"px";
    document.querySelector("#ui").appendChild(tiles[i]);
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
    event.target.style.backgroundColor=color;
}
function colorset(c) {
    color = c;
}