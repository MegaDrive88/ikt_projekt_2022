function openNav() {
    document.getElementById("menu").style.width = "8.2rem"; //10%
    document.getElementById("main").style.marginLeft = "11.92rem";
    document.getElementById("valasztott").style.marginLeft = "11.92rem";
    document.getElementById("collapser2").style.marginLeft = "8.2rem";
    document.getElementById("collapser").style.padding = "0 0 0 0";
    document.getElementById("collapser2").innerHTML = "◄";
    document.getElementById("collapser").innerHTML = "";

}
  
function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "2.188rem";
    document.getElementById("valasztott").style.marginLeft= "2.188rem";
    document.getElementById("collapser").style.marginLeft = "0";
    document.getElementById("collapser").innerHTML = "►";
    document.getElementById("collapser2").innerHTML = "";
    document.getElementById("collapser").style.padding = "0.1px 0.6px 0.1px 0.6px";
    document.getElementById("collapser2").style.marginLeft = "0.938rem";
    document.getElementById("collapser").style.marginLeft = "0.938rem";
}
//nem responsive
//carousel
$('.carousel').carousel({
    pause: "hover"
})