function keypress(event){
    var key=event.wich || event.keyCode;
    if(key=="13"){
        window.open('index.html', 'self');
    }
}