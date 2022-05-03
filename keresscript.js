var elem = document.documentElement;
var a = 50;
var x = screen.width;
var y = screen.height; 
var runTime = 1;
var slotRun = 1;
var columns = 0;
var color = "#000000";
const colors = ["#000000","#ffffff","#800000","#b97957","#ffaec9","#ff7d27","#efe5b0","#9cac22","#b4e61d","#13df94","#3f48cc","#7092be","#7f7f7f","#c3c3c3","#ed1c23","#ff3578","#ffc90e","#fff200","#167232","#22b14d","#00a2e8","#99d9ea","#a249a4","#c8bfe7"];
var uitemp = document.querySelector("#uitemp");
var bottomUI = document.querySelector("#bottomui");
var cp = document.querySelector("#cpicker");
var climit = 0;
var selectedTile;
var selectedColor;
const tiles = new Array(a*a);
var clickcount = [0, 0];
var ccset;
var tileComparison = [];
var isthesame = false;
var versionList = new Array(100);
var listenedIndex = 0;
var highestIndex = 0;
var versionCap = 250;
var changetype;
var notTurnOff = true;
var bordercolor = "black";
var colorsOnBoard = [];
var foundColors = [];
var foundTop = 4;
var selectedIndexes = [];
var colorCond = true;
var goalColor;
if(x >= y)  {
    tilesize = 0.9*y/a;
    pushY = 0.05*y;
    pushX = (x-(tilesize*a))/2;
    
    bottomUI.style.position = "fixed";
    bottomUI.style.width = a*tilesize+"px";
    bottomUI.style.height = pushY/2+"px";
    bottomUI.style.left = pushX+"px";
    bottomUI.style.top = pushY+a*tilesize+pushY/2+"px";
    bottomUI.style.backgroundColor=color;

    var iconY = 0;
    for (i = 1; i<6; i++) {
    document.querySelector("#icon"+i).style.position = "fixed";
    document.querySelector("#icon"+i).style.height = pushY + "px";
    document.querySelector("#icon"+i).style.width = pushY + "px";
    document.querySelector("#icon"+i).style.top = "0px";
    document.querySelector("#icon"+i).style.left = pushX+(((a*tilesize)-5*pushY)/2)+iconY+"px";
    iconY += pushY;
    }
}
else {  
    tilesize = x/a;
    pushX = 0;
    pushY = (y-(tilesize*a))/2;
    var iconY = 0;
    for (i = 1; i<6; i++) {
        
        document.querySelector("#icon"+i).style.position = "fixed";
        if(pushY*5>x) {
            document.querySelector("#icon"+i).style.height = x/5 + "px";
            document.querySelector("#icon"+i).style.width = x/5 + "px";
            document.querySelector("#icon"+i).style.left = iconY+"px";
            iconY += x/5;
        }
        else {
            document.querySelector("#icon"+i).style.height = pushY + "px";
            document.querySelector("#icon"+i).style.width = pushY + "px";
            document.querySelector("#icon"+i).style.left = pushX+(((a*tilesize)-5*pushY)/2)+iconY+"px";
            iconY += pushY;
        }
        document.querySelector("#icon"+i).style.top = "0px";
        
        }
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


    for(i = 1; i<6; i++) {
        document.querySelector("#icon"+i).style.display = "block";
    }

    
    for(i = 0; i < slotcount; i++) {
        slots[i] = document.createElement("span");
        slots[i].className = "slot";
        slots[i].style.width= slotsize+"px";
        slots[i].style.height = slotsize +"px";
        slots[i].style.top=slotY+"px";
        slots[i].style.left=slotX+"px";
        slots[i].style.border = "3px solid black";
        slots[i].style.backgroundColor=colors[i];
        document.querySelector("#uitemp").appendChild(slots[i]);
        slots[i].addEventListener("mousedown", colorset, false);
        slots[i].index = i;
        if(i > 23) {
         slots[i].value = false;   
        }
        else {
            slots[i].value = true;
        }
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
    uitemp.style.backgroundColor = "#4a4a4a";
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
    tiles[i].style.backgroundColor="rgb(255,255,255)";
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
    document.getElementById("icon1").src="pictures/undo.png";
    if(listenedIndex==versionCap) {
        for(i = 0; i < versionCap-1; i++) {
            versionList[i] = versionList[i+1];
        }
    }
    if(colorCond) {
        versionList[listenedIndex] = [event.target.style.backgroundColor, event.target, color];
        event.target.style.backgroundColor=color;
    }
    else {
        colorCond = true;
    }
    if(listenedIndex !== versionCap) {
        if(listenedIndex==highestIndex) {
            highestIndex++;
        }
        listenedIndex++;
    }
    if(highestIndex>listenedIndex) {
        document.getElementById("icon2").src="pictures/redo.png";
    }
    else {
        document.getElementById("icon2").src="pictures/redo_disabled.png";
    }
}
function colorset(event) {
    tileComparison = [selectedTile, event.target.index];
    if(event.target.value!==false) {
    color = event.target.style.backgroundColor;
    bottomUI.style.backgroundColor = color;
    selectedTile = event.target.index;
    if(tileComparison[0] == tileComparison[1]) {
        isthesame = true;
    }
    else {
        isthesame = false;
    }
    clickcount[1]++;
    counter(event, 1);
    }
    else if(event.target.value==false){
    changetype=1;
    cPickerUi(event);

    }
}

function cpickenter(event, valid) {

    document.getElementById("okBtn").className="no";
    document.getElementById("darkedBG").className="no";
    document.getElementById("cpicker").className="no";
    document.getElementById("closeBtn").className="no";
    if(valid) {
        if(changetype==1) {
        slots[selectedTile].style.backgroundColor=cp.value;
        bottomUI.style.backgroundColor=cp.value;
        slots[selectedTile].value=true;
        color = cp.value;
        }
        else if(changetype==0) {
            bordercolor = cp.value;
            notTurnOff=true;
            grid(event, bordercolor);
        }
    }
}
function counter(event, kindOfCcount) {

if(climit<500) {
    if(climit == 0) {
        ccset = setInterval(counter, 3);
    }
    if(clickcount[kindOfCcount]==2) {
        clearInterval(ccset);
        climit = 0;
        clickcount[0] = 0;
        clickcount[1] = 0;
            if(isthesame) {
            changetype = kindOfCcount;
            cPickerUi(event);
        }
    }
    else if(clickcount[kindOfCcount]!==2){
        climit+=4;
    }
}
else if(climit >= 500) {
    climit = 0;
    clickcount[0] = 0;
    clickcount[1] = 0;
    clearInterval(ccset);

}
}
function cPickerUi(event) {
    document.getElementById("okBtn").className="okBtn";
    document.getElementById("cpicker").className="cp";
    document.getElementById("darkedBG").className="darkedbg";
    document.getElementById("closeBtn").className="closeBtn";
    selectedTile=event.target.index;
    if(changetype==0) {
        notTurnOff = true;
        grid(event);
    }

}
function undo() {
    var b = 3;
    document.getElementById("icon2").src="pictures/redo.png";
    if(listenedIndex!==0) {
        if(typeof versionList[listenedIndex-1][0] == "boolean") {
            for(i=0; i<a*a; i++) {
                tiles[i].value = true;
            }
            console.log(versionList[listenedIndex-1]);
            console.log(versionList[listenedIndex-1][b]);
            while (b<versionList[listenedIndex-1].length) {
            
            tiles[versionList[listenedIndex-1][b]].value = false;
                b++;
            }
            for(i=0; i<a*a; i++) {
                if(tiles[i].style.backgroundColor == versionList[listenedIndex-1][2] && tiles[i].value !== false) {
                    tiles[i].style.backgroundColor = versionList[listenedIndex-1][1];
                    color = versionList[listenedIndex-1][1];
                    bottomUI.style.backgroundColor = versionList[listenedIndex-1][1];
                }
            }
        }
        else {versionList[listenedIndex-1][1].style.backgroundColor=versionList[listenedIndex-1][0];  
    }
    listenedIndex--;
    }
    if(listenedIndex==0) {
        document.getElementById("icon1").src="pictures/undo_disabled.png";
    }
    
}
function redo() {
    document.getElementById("icon1").src="pictures/undo.png";
    if(listenedIndex<highestIndex) {
        if(typeof versionList[listenedIndex][0] == "boolean") {
            for(i=0; i<a*a; i++) {
                if(tiles[i].style.backgroundColor == versionList[listenedIndex][1]) {
                    tiles[i].style.backgroundColor = versionList[listenedIndex][2];
                    color = versionList[listenedIndex][2];
                    bottomUI.style.backgroundColor = versionList[listenedIndex][2];
                }
            }
        }
        else {versionList[listenedIndex][1].style.backgroundColor=versionList[listenedIndex][2];
        }
        listenedIndex++;
    }
    if(listenedIndex==highestIndex) {
        document.getElementById("icon2").src="pictures/redo_disabled.png";
    }
}
function grid(event) {
    if(notTurnOff) {
        for(i=0; i<a*a; i++) {
            tiles[i].style.border="1px solid "+bordercolor;
            notTurnOff = false;
        }
    }
    else {
        for(i=0; i<a*a; i++) {
            tiles[i].style.border="none";
            notTurnOff = true;
        }
    }
    clickcount[0]++;
    isthesame = true;
    counter(event, 0);
    

}
function colorswitch() {
    document.getElementById("csheader").className="csheader";
    document.getElementById("csheader").innerHTML = "Melyik színű pixeleket kívánja cserélni?";
    document.getElementById("closeBtn2").className="closeBtn";
    document.getElementById("darkedBG").style.opacity="0.8";
    document.getElementById("darkedBG").className="darkedbg";
    colorsOnBoard = [];
    for(i=0; i<a*a; i++) {
        var xx = 0;
        tiles[i].style.zIndex="2";
        while(colorsOnBoard[xx] !== tiles[i].style.backgroundColor && xx<colorsOnBoard.length) {
            xx++;
        }
        if(xx == colorsOnBoard.length) {
            colorsOnBoard.push(tiles[i].style.backgroundColor);
        }
    }
    for(i=0; i<a*a; i++) {
        tiles[i].removeEventListener("mousedown", coloring);
        tiles[i].addEventListener("click", idk);
        tiles[i].index = i;
    }
}
function idk(event) {
    selectedTile = event.target.index;
    selectedColor = tiles[selectedTile].style.backgroundColor;
    for(i=0; i<a*a; i++) {
        tiles[i].style.zIndex = 0;
        uitemp.style.zIndex="1";
        uitemp.style.backgroundColor="rgba(74,74,74,0.4)";
        document.getElementById("csheader").innerHTML = "Válassza ki a célszínt a palettáról";
        document.getElementById("csheader").style.zIndex ="1";
    }
    for(i = 0; i < slotcount; i++) {
        slots[i].style.position="fixed";
        slots[i].removeEventListener("mousedown", colorset, false);
        slots[i].addEventListener("click", switchdone);
        slots[i].index = i;
    }
}
function switchdone(event) {
    goalColor = slots[event.target.index].style.backgroundColor;
    document.getElementById("csheader").className="no";
    document.getElementById("darkedBG").className="no";
    document.getElementById("closeBtn2").className="no";
    uitemp.style.zIndex="0";
    uitemp.style.backgroundColor="rgba(74,74,74,1)";
    color = selectedColor;
    bottomUI.style.backgroundColor = slots[event.target.index].style.backgroundColor;
    for(i = 0; i < slotcount; i++) {
        slots[i].removeEventListener("click", switchdone);
        slots[i].addEventListener("mousedown", colorset, false);
    }
    for(i=0; i<a*a; i++) {
        if(tiles[i].style.backgroundColor == slots[event.target.index].style.backgroundColor) {
            selectedIndexes.push(i);
        }
        if(tiles[i].style.backgroundColor == selectedColor) {
            tiles[i].style.backgroundColor = slots[event.target.index].style.backgroundColor;
            
        }
        tiles[i].removeEventListener("click", idk);
        tiles[i].addEventListener("mousedown", coloring);
    }
    colorCond = false;
    selectedIndexes.unshift(goalColor);
    selectedIndexes.unshift(selectedColor);
    selectedIndexes.unshift(true);
    versionList[listenedIndex] = selectedIndexes;
    coloring(event);
    selectedIndexes = [];
}
function switchcancel() {
    document.getElementById("csheader").className="no";
    document.getElementById("darkedBG").className="no";
    document.getElementById("closeBtn2").className="no";
    uitemp.style.zIndex="0";
    uitemp.style.backgroundColor="rgba(74,74,74,1)";
    for(i = 0; i < slotcount; i++) {
        slots[i].removeEventListener("click", switchdone);
        slots[i].addEventListener("mousedown", colorset, false);
    }
    for(i=0; i<a*a; i++) {
        tiles[i].style.zIndex = 0;
        tiles[i].removeEventListener("click", idk);
        tiles[i].addEventListener("mousedown", coloring);
    }
}