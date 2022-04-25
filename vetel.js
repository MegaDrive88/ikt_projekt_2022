function kepvalasztas(kep, nev, ar, akcio){
    document.getElementById('nftitself').src = 'pictures/nfts/nft' + kep + '.png';
    document.getElementById('nftnev').innerHTML = nev;
    document.getElementById('nftar').innerHTML = ar + 'Ξ';
    document.getElementById('akcioe').innerHTML = akcio;
    document.getElementById('nftitself').style.width = "20rem";
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
    kep = localStorage.setItem('szama', kep)
}
function bezaraas(){
    document.getElementById('valasztott').innerHTML = '<img src=""  id="nftitself" style="height: 0; width: 0; margin-left: 1.8rem; margin-top: 2rem; z-index: 7;"><div style="float: right; margin-top: 2rem; margin-right: 40%;"><h1 style="height: 0; width: 0; margin-left: 0rem; margin-bottom: 2.5rem; padding-left: 0;" id="nftnev"></h1><br><div class="row"><h3 style="height: 0; width: 0; margin-left: 0rem; margin-bottom: 0rem; padding-left: 0%;" id="nftar"></h3><h3 style="color: red; margin-left: 3.3rem; margin-bottom: 0; width: 0;" id="akcioe"></h3></div><br><a href="" id="lelink" target="_blank"><button type="button" onclick="vasarlas()" style="height: 0; width: 0; padding: 0 0 0 0; color: white; margin-left: 0rem; margin-left: 0;" id="nftvetel"></button></a> <br><button type="button" onclick="bezaraas()" style="height: 0; width: 0; padding: 0 0 0 0; color: white; margin-left: 2rem; background-color: darkred; position: fixed; top: 12px !important; right: 32px !important;" id="bezaras"></button></div>';
    document.getElementById('valasztott').style.width = "0";
    document.getElementById('valasztott').style.height = "0";
}
function vasarlas(){
    var kepszam = localStorage.getItem('szama', 'szama')
    document.getElementById('lelink').href = 'pictures/nfts/nft' + kepszam + '.png';
    alert("Az NFT-d megvásárlásra került");
    bezaraas();
}
//tarolas