globalThis.entered = false;
function condition() {
    globalThis.tbox = document.getElementById("textbox");
    globalThis.count = 0;
    if(tbox.value >= 1 && tbox.value <= 100) {
        globalThis.a = document.getElementById("textbox").value;
        variables();
    }
    else {
        flash();
    }
    
}
function variables() {
entered = true;
globalThis.elem = document.documentElement;
globalThis.x = screen.width;
globalThis.y = screen.height; 
globalThis.runTime = 1; 
globalThis.slotRun = 1;
globalThis.columns = 0;
globalThis.color = "#000000";
globalThis.colors1 = ["#000000","#ffffff","#800000","#b97957","#ffaec9","#ff7d27","#efe5b0","#9cac22","#b4e61d","#13df94","#3f48cc","#7092be","#7f7f7f","#c3c3c3","#ed1c23","#ff3578","#ffc90e","#fff200","#167232","#22b14d","#00a2e8","#99d9ea","#a249a4","#c8bfe7"];
globalThis.colors2 = ["#000000","#ffffff","#880014","#ed1c23","#ff3578","#ff7d27","#fff200","#22b14d","#13df94","#00a2e8","#3f48cc","#a249a4"];
globalThis.colors3 = ["#000000", "#ffffff","#ed1c23","#fff200","#22b14d", "#3f48cc"];
globalThis.uitemp = document.querySelector("#uitemp");
globalThis.bottomUI = document.querySelector("#bottomui");
globalThis.cp = document.querySelector("#cpicker");
globalThis.climit = 0;
globalThis.slots = new Array(48);
globalThis.selectedTile;
globalThis.selectedColor;
globalThis.tiles = new Array(a*a);
globalThis.clickcount = [0, 0];
globalThis.ccset;
globalThis.tileComparison = [];
globalThis.isthesame = false;
globalThis.versionList = new Array(100);
globalThis.listenedIndex = 0;
globalThis.highestIndex = 0;
globalThis.versionCap = 250;
globalThis.changetype;
globalThis.notTurnOff = true;
globalThis.bordercolor = "black";
globalThis.colorsOnBoard = [];
globalThis.foundColors = [];
globalThis.foundTop = 4;
globalThis.selectedIndexes = [];
globalThis.colorCond = true;
globalThis.goalColor;
globalThis.tempSeTile;
globalThis.selectedCTile;
globalThis.icontitles = ["", "Visszavonás (Ctrl + Z)", "Mégis (Ctrl + Y)", "Rács (Ctrl + Space)", "Színcsere (Ctrl + B)", "Exportálás képfájlba (Ctrl + S)"];
globalThis.keyalt = 0;
globalThis.ctrlActivated = false;
globalThis.uiState; /* 1 - primary, 2 - colorpick, 3 - colorswicth */
globalThis.cnhRuns = 0;
if(x >= y)  {
    globalThis.tilesize = 0.9*y/a;

    globalThis.pushY = 0.05*y;
    globalThis.pushX = (x-(tilesize*a))/2;
   /* tilesize = Number(tilesize);
    pushX = Number(pushX);
    pushY = Number(pushY);
    tilesize = tilesize.toFixed(2);
    pushX = pushX.toFixed(2);
    pushY = pushY.toFixed(2);
    tilesize = Number(tilesize);
    pushX = Number(pushX);
    pushY = Number(pushY);
    console.log(typeof tilesize);*/
    bottomUI.style.position = "fixed";
    bottomUI.style.width = a*tilesize+"px";
    bottomUI.style.height = y-(pushY*0.25)+"px";
    bottomUI.style.left = pushX+"px";
    bottomUI.style.top = y-(pushY*0.25)+"px";
    bottomUI.style.backgroundColor=color;

    iconY = 0;
    for (i = 1; i<6; i++) {
    document.querySelector("#icon"+i).style.position = "fixed";
    document.querySelector("#icon"+i).style.height = 0.925*pushY + "px";
    document.querySelector("#icon"+i).style.width = 0.925*pushY + "px";
    document.querySelector("#icon"+i).style.top = 0.0375*pushY+"px";
    document.querySelector("#icon"+i).style.left = pushX+(((a*tilesize)-5*0.925*pushY)/2)+iconY+"px";
    document.querySelector("#icon"+i).title = icontitles[i];
    if(i>2) {
    document.querySelector("#icon"+i).style.cursor = "pointer";
    document.querySelector("#icon"+i).className = "icons";
    }
    iconY += pushY;
    }
}
else {
    if(x < y && x/y>0.79) {
        globalThis.tilesize = 0.6*y/a;
        globalThis.pushX = (x-(a*tilesize))/2;
        globalThis.pushY = 0.2*y;
    
    }
    else {  
        globalThis.tilesize = x/a;
        globalThis.pushX = 0;
        globalThis.pushY = (y-(tilesize*a))/2;
}
var iconY = 0;
for (i = 1; i<6; i++) {
    document.querySelector("#icon"+i).className = "icons";
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

if(x/y<=1.49) {
    if(x<y) {
        globalThis.slotsize = x/6;
        slotsize -= (x/5)-(slotsize);
        globalThis.newColumn = 1;
        globalThis.slotbreakpoint = 1;
        globalThis.slotcount = 6;
        if(x/y<0.79) {
            globalThis.slotX = (pushX/2+(x-(slotsize*6)))/7;
        }
        else if(x/y>=0.79) {
            globalThis.slotX = (x-(slotsize*6))/7;
    }
    }
    else {
        globalThis.slotcount = 24;
        globalThis.slotbreakpoint = 1;
        globalThis.slotsize = y/12;
        globalThis.newColumn = 12;
    slotsize -= (y/10)-(slotsize) ;

    if(slotsize>pushX/2) {
        globalThis.slotsize = pushX/2;
    }
    globalThis.slotX = pushX/2+ ((pushX/2-slotsize)/2);
    }
}

else if(x/y>1.49){
    globalThis.slotbreakpoint = 2;
    globalThis.slotsize = y/12-y/108; 
    globalThis.slotX = pushX/2+(0.66*(pushX/4-slotsize));
    globalThis.slotcount = 48;
    globalThis.newColumn = 12;
}
if(newColumn==12) {
    globalThis.slotY = (y-(slotsize*12))/13;
    globalThis.yAdd = slotsize + slotY;
}
else {
    globalThis.slotY = ((y-(a*tilesize))/2) +(a*tilesize)+((((y-(a*tilesize))/2)-slotsize)/2);
    globalThis.xAdd = slotsize + slotX;
}
openFullscreen();
Editor();
}
function keypress(event) {
    if(entered) {
    var key=event.wich || event.keyCode;
    keyalt = key;
    if(event.ctrlKey) {
        ctrlActivated = true;
    }
    if(ctrlActivated && uiState == 1) {
            switch(event.keyCode) {
                case 90:
                    undo();
                    break;
                case 89:
                    redo();
                    break;
                case 32:
                    grid(event);
                    break;
                case 66:
                    colorswitch();
                
        }
    }
    else if(event.keyCode == "13"){
        if(uiState == 2) {
            cpickenter(event, true);
        }
    }
    else if(event.keyCode == "9") {
        if(uiState == 2) {
            cpickenter(event, false);
        }
        else if(uiState == 3) {
            switchcancel();
        }
    }
    }
}
function flash(timer) {

    timer = setTimeout(flash, 600);
    
    if(count==0) {
        
            document.body.className="trans1";
            if(tbox.value == "") {
                tbox.style.boxShadow ="0 0 8px red";
            }
            count++;
    }
    else {
        document.body.className="trans2";
        count = 0;
        clearTimeout(timer);
    }

}
function keyup() {
    if(entered) {
    ctrlActivated = false;
    if(cnhRuns!=0 && !ctrlActivated) {
            versionList[listenedIndex-1][3] = cnhRuns;
            versionList[listenedIndex-cnhRuns][3] = cnhRuns;
            cnhRuns=0;
    }}
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
        uiState = 1;
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
            slots[i].style.cursor = "pointer";
            if(x/y>=1.49) {
            slots[i].style.backgroundColor=colors1[i];
            }
            else if(x/y<1.49 && x>=y){ 
            slots[i].style.backgroundColor=colors2[i];
            }
            else {
            slots[i].style.backgroundColor=colors3[i];
            }
            document.querySelector("#uitemp").appendChild(slots[i]);
            slots[i].addEventListener("mousedown", colorset, false);
            slots[i].index = i;
            if(i > 23 && x/y>=1.49) {
                slots[i].value = false;   
                slots[i].title = "Szín hozzáadása a palettához";
            }
            else if(i > 11 && x/y<1.49) {
                slots[i].value = false;   
                slots[i].title = "Szín hozzáadása a palettához";
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
        selectedTile = 0;
        slots[0].style.boxShadow = "0 0 8px white";
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
            else if(x<y && x/y>0.79){
                pushX=(x-(a*tilesize))/2;
            }
            else {
                pushX=0;
            }
        } 
    }
    for(i = 0; i<a*a; i++) {
        tiles[i].addEventListener("mousedown", coloring);
        tiles[i].addEventListener("mouseover", cnhdraw);
    }  
}
function coloring(event) {
    versionButtonHandler("1","un","","pointer","icons");
    if(listenedIndex==versionCap) {
        for(i = 0; i < versionCap-1; i++) {
            versionList[i] = versionList[i+1];
        }
    }
    if(colorCond) {
        if(ctrlActivated) {
            cnhRuns++;
        }
    versionList[listenedIndex] = [event.target.style.backgroundColor, event.target, color,null];
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
        versionButtonHandler("2","re","","pointer","icons");
    }
    else {
        versionButtonHandler("2","re","_disabled","default","dis");
    }
}
function colorset(event) {
    tileComparison = [selectedTile, event.target.index];
    if(event.target.value!==false) {
    color = event.target.style.backgroundColor;
    bottomUI.style.backgroundColor = color;
    slots[selectedTile].style.boxShadow ="none";
    selectedTile = event.target.index;
    event.target.style.boxShadow = "0 0 8px white";
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
    uiState = 1;
    document.getElementById("okBtn").className="no";
    document.getElementById("darkedBG").className="no";
    document.getElementById("cpicker").className="no";
    document.getElementById("closeBtn").className="no";
    if(valid) {
        if(changetype==1) {
        slots[selectedTile].style.boxShadow="none";
        selectedTile = tempSeTile;
        slots[selectedTile].style.boxShadow = "0 0 8px white";
        slots[selectedTile].style.backgroundColor=cp.value;
        bottomUI.style.backgroundColor=cp.value;
        slots[selectedTile].value=true;
        slots[selectedTile].title="";
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
    uiState = 2;
    document.getElementById("okBtn").className="okBtn";
    document.getElementById("cpicker").className="cp";
    document.getElementById("darkedBG").className="darkedbg";
    document.getElementById("closeBtn").className="closeBtn";
    tempSeTile=event.target.index;
    if(changetype==0) {
        notTurnOff = true;
        grid(event);
    }

}
function undo() {
    var b = 3;
    if(listenedIndex!==0) {
        versionButtonHandler("2","re","","pointer","icons");
        if(typeof versionList[listenedIndex-1][0] == "boolean") {
            for(i=0; i<a*a; i++) {
                tiles[i].value = true;
            }
            while (b<versionList[listenedIndex-1].length) {
            
            tiles[versionList[listenedIndex-1][b]].value = false;
                b++;
            }
            for(i=0; i<a*a; i++) {
                if(tiles[i].style.backgroundColor == versionList[listenedIndex-1][2] && tiles[i].value !== false) {
                    tiles[i].style.backgroundColor = versionList[listenedIndex-1][1];
                }
            }
        }
        else if(versionList[listenedIndex-1][3] == undefined) {
            versionList[listenedIndex-1][1].style.backgroundColor=versionList[listenedIndex-1][0];  
        }
        else {
            for(i = 0; i<versionList[listenedIndex-1][3]; i++) {
                versionList[listenedIndex-1-i][1].style.backgroundColor=versionList[listenedIndex-1-i][0];  
            }
            listenedIndex -= versionList[listenedIndex-1][3] - 1;
        }
    listenedIndex--;
    }
    if(listenedIndex==0) {
        versionButtonHandler("1","un","_disabled","default","dis");
    }
    
}
function redo() {
    if(listenedIndex<highestIndex) {
        versionButtonHandler("1","un","","pointer","icons");
        if(typeof versionList[listenedIndex][0] == "boolean") {
            for(i=0; i<a*a; i++) {
                if(tiles[i].style.backgroundColor == versionList[listenedIndex][1]) {
                    tiles[i].style.backgroundColor = versionList[listenedIndex][2];
                }
            }
        }
        else if(versionList[listenedIndex][3] == undefined){
            versionList[listenedIndex][1].style.backgroundColor=versionList[listenedIndex][2];
        }
        else {
            for(i = 0; i<versionList[listenedIndex][3]; i++) {
                versionList[listenedIndex+i][1].style.backgroundColor=versionList[listenedIndex+i][2];  
            }
            listenedIndex += versionList[listenedIndex][3] - 1;
        }
        listenedIndex++;
    }
    if(listenedIndex==highestIndex) {
        versionButtonHandler("2","re","_disabled","default","dis");
    }
}
function versionButtonHandler(num, wh, st, cur, cl) {
    document.getElementById("icon"+num).src="pictures/"+wh+"do"+st+".png";
    document.getElementById("icon"+num).style.cursor=cur;
    document.getElementById("icon"+num).className=cl;
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
    uiState = 3;
    document.getElementById("csheader").className="csheader";
    document.getElementById("csheader").innerHTML = "Melyik színű pixeleket kívánja cserélni?";
    document.getElementById("closeBtn2").className="closeBtn";
    document.getElementById("darkedBG").style.opacity="0.8";
    document.getElementById("darkedBG").className="darkedbg";
    slots[selectedTile].style.boxShadow = "none";
    
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
        tiles[i].removeEventListener("mouseover", cnhdraw);
        tiles[i].addEventListener("click", idk);
        tiles[i].index = i;
    }
}
function idk(event) {
    selectedCTile = event.target.index;
    selectedColor = tiles[selectedCTile].style.backgroundColor;
    for(i=0; i<a*a; i++) {
        tiles[i].style.zIndex = "0";
        uitemp.style.zIndex="1";
        uitemp.style.backgroundColor="rgba(74,74,74,0.4)";
        document.getElementById("csheader").style.left = bottomUI.style.left = pushX+"px";;
        document.getElementById("csheader").style.width = a*tilesize+"px";
        document.getElementById("csheader").innerHTML = "Válassza ki a célszínt a palettáról";
        document.getElementById("csheader").style.zIndex ="1";
    }
    for(i = 0; i < slotcount; i++) {
        slots[i].style.position="fixed";
        slots[i].style.zIndex="3";
        slots[i].removeEventListener("mousedown", colorset, false);
        slots[i].addEventListener("click", switchdone);
        slots[i].index = i;
    }
}
function switchdone(event) {
    uiState = 1;
    goalColor = slots[event.target.index].style.backgroundColor;
    document.getElementById("csheader").className="no";
    document.getElementById("darkedBG").className="no";
    document.getElementById("closeBtn2").className="no";
    uitemp.style.zIndex="0";
    uitemp.style.backgroundColor="rgba(74,74,74,1)";
    color = goalColor;
    bottomUI.style.backgroundColor = slots[event.target.index].style.backgroundColor;
    selectedTile = event.target.index;
    slots[selectedTile].style.boxShadow = "0 0 8px white";
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
        tiles[i].addEventListener("mouseover", cnhdraw);
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
    uiState = 1;
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
        tiles[i].addEventListener("mouseover", cnhdraw);
        tiles[i].addEventListener("mousedown", coloring);
    }
}
function cnhdraw(event) {
    if(ctrlActivated) {
        coloring(event);
    }
}
