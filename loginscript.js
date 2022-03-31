var inp1;
var inp2;
var counter = 0;
var isTriggered = false;

function enter(event){

    var key=event.wich || event.keyCode;
    inpadd();
    

    if(key=="13"){
        check();
    }
}
function check() {
    inpadd();
    if(inp1 !== "" && inp2 !== "") {
        window.open('index.html', 'self');
    }
    else {
        document.querySelector(".loginerror").className="loginerror";
        flash();
    }
}
function inpadd() {
    inp1 = document.querySelector(".loginput1").value;
    inp2 = document.querySelector(".loginput2").value;
}
function flash(timer) {
    
    
    timer = setTimeout(flash, 800);
    
    if(counter==0) {
        if(isTriggered) {
            counter=0;
            clearTimeout(timer);
            timer = setTimeout(flash, 800);
        }
        
            document.body.className="trans1";
            counter++;
            isTriggered = true;
        
    }
    else {
        document.body.className="trans2";
        counter = 0;
        isTriggered = false;
        clearTimeout(timer);
    }

}
