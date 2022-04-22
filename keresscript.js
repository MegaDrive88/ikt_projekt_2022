var elem = document.documentElement;
var a = 50;
var x = screen.width;
var y = screen.height; 
var runTime = 1;
var slotRun = 1;
var columns = 0;
var color = "black";
var uitemp = document.querySelector("#uitemp");
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
const slots = new Array(48);
var slotsize = y/12-y/108;
var slotY = slotsize/9;
var slotX = pushX/2+(0.66*(pushX/4-slotsize));
var yAdd = slotsize + slotsize/9;

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
    
    for(i = 0; i < 48; i++) {
        slots[i] = document.createElement("span");
        slots[i].className = "slot";
        slots[i].style.width= slotsize+"px";
        slots[i].style.height = slotsize +"px";
        slots[i].style.top=slotY+"px";
        slots[i].style.left=slotX+"px";
        document.querySelector("#uitemp").appendChild(slots[i]);
        if(slotRun <= 11) {
            slotY += yAdd;
            slotRun++;
        }
        else {
            columns++;
            slotY = slotsize/9;
            if(columns==2) {
                slotX += a*tilesize+2*0.66*(pushX/4-slotsize) + slotsize;
            }
            else {
                slotX += 0.66*(pushX/4-slotsize)+ slotsize;
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