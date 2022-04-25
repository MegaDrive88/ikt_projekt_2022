window.onload = kiiras()
//localStorage.setItem('felnev', 'Bejelentkezés')
var inp1;
var inp2;
var stinp1 = document.querySelector(".loginput1");
var stinp2 = document.querySelector(".loginput2");
var clinp1 = "w-100 mx-auto text-center loginput1 mb-2 col-sm-8";
var clinp2 = "w-100 mx-auto text-center loginput2 col-sm-8";
var counter = 0;


function enter(event){

    var key=event.wich || event.keyCode;
    inpadd();
    

    if(key=="13"){
        check();
    }
}
// var adam = 'Bejelentkezés';
function check() {
    inpadd();
    if(inp1 !== "" && inp2 !== "") {
        window.open('index.html', '_self');
    }
    else {
        document.querySelector(".loginerror").className="loginerror";
        flash();
    }
    document.getElementById('felhasznev').value = localStorage.setItem('felnev', document.getElementById('felhasznev').value);
    // localStorage.setItem('felnev', adam)
    kiiras();
}
function kiiras(){
    document.getElementById('belink').innerHTML = localStorage.getItem('felnev', 'felnev');
}
// function kijel(){
//     document.getElementById('belink').innerHTML = 'Kijelentkezés';
// }
function inpadd() {
    inp1 = document.querySelector(".loginput1").value;
    inp2 = document.querySelector(".loginput2").value;
}
function flash(timer) {

    timer = setTimeout(flash, 600);
    
    if(counter==0) {
        
            document.body.className="trans1";
            if(inp1 == "") {
                stinp1.className = clinp1 + " redborder";
            }
            else {
                stinp1.className = clinp1 + " noborder";
            }
            if(inp2 == "") {
                stinp2.className = clinp2 + " redborder";
            }
            else {
                stinp2.className = clinp2 + " noborder";
            }
            
            counter++;
    }
    else {
        document.body.className="trans2";
        counter = 0;
        clearTimeout(timer);
    }

}