//window.onload = kepvalasztas(15, 2, 3, 1) ;
function kepvalasztas(kep, nev, ar, akcio){
    document.getElementById('nftitself').src = 'pictures/nfts/nft' + kep + '.png';
    document.getElementById('nftnev').innerHTML = nev;
    document.getElementById('nftar').innerHTML = ar + 'Ξ';
    document.getElementById('akcioe').innerHTML = akcio;
    document.getElementById('nftitself').style.width = "25rem";
    document.getElementById('nftitself').style.height = "unset";
    document.getElementById('valasztott').style.width = "96%";
    document.getElementById('valasztott').style.height = "95%";
    document.getElementById('valasztott').style.backgroundColor = "rgba(18, 18, 18, 0.9)";
    document.getElementById('nftvetel').innerHTML = "Vásárlás";
    document.getElementById('nftvetel').style.width = "10rem";
    document.getElementById('nftvetel').style.height = "2rem";
    document.getElementById('bezaras').innerHTML = "X";
    document.getElementById('bezaras').style.width = "2rem";
    document.getElementById('bezaras').style.height = "2rem";
    document.getElementById('nftnev').style.width = "max-content";
    document.getElementById('nftnev').style.height = "min-content";
}
function bezaraas(){
    document.getElementById('valasztott').innerHTML = '<img src=""  id="nftitself" style="height: 0; width: 0; margin-left: 2rem; margin-top: 2rem;"><div style="float: right; margin-top: 2rem; margin-right: 50%;"><h1 style="height: 0; width: 0; margin-left: 0rem; margin-bottom: 2.5rem;" id="nftnev"></h1><br><div class="row"><h3 style="height: 0; width: 0; margin-left: 0rem; margin-bottom: 0rem;" id="nftar"></h3><h3 style="color: red; margin-left: 3.3rem; margin-bottom: 0; width: 0;" id="akcioe"></h3></div><br><button type="button" style="height: 0; width: 0; padding: 0 0 0 0; color: white; margin-left: 0rem;" id="nftvetel"></button> <br><button type="button" onclick="bezaraas()" style="height: 0; width: 0; padding: 0 0 0 0; color: white; margin-left: 2rem; background-color: darkred; position: fixed; top: 12px !important; right: 32px !important;" id="bezaras"></button></div>';
    document.getElementById('valasztott').style.width = "0";
    document.getElementById('valasztott').style.height = "0";
}

//tarolas