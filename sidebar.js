function openNav() {
    document.getElementById("menu").style.width = "10%"; 
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("collapser2").style.marginLeft = "10%";
    document.getElementById("collapser").style.padding = "0 0 0 0";
    document.getElementById("collapser2").innerHTML = "◄";
    document.getElementById("collapser").innerHTML = "";

}
  
function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "35px";
    document.getElementById("collapser").style.marginLeft = "0%";
    document.getElementById("collapser").innerHTML = "►";
    document.getElementById("collapser2").innerHTML = "";
    document.getElementById("collapser").style.padding = "0.1px 0.6px 0.1px 0.6px";
    document.getElementById("collapser2").style.marginLeft = "15px";
    document.getElementById("collapser").style.marginLeft = "15px";
}
//nem responsive