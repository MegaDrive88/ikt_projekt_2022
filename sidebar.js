function openNav() {
    document.getElementById("menu").style.width = "7%"; 
    document.getElementById("main").style.marginLeft = "10%";
    document.getElementById("collapser").style.marginLeft = "7%";
    document.getElementById("collapser").innerHTML = "◄";
}
  
function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("collapser").style.marginLeft = "0%";
    document.getElementById("collapser").innerHTML = "►";
}