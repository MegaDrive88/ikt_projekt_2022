window.onload = kepvalasztas(15, 2, 3) ;
function kepvalasztas(kep, nev, ar){
    document.getElementById('nftitself').src = 'pictures/nfts/nft' + kep + '.png';
    document.getElementById('nftar').innerHTML = ar + 'Ξ';
    document.getElementById('nftnev').innerHTML = nev;
    document.getElementById('nftitself').style.width = "30rem";
    document.getElementById('nftitself').style.height = "30rem";
    document.getElementById('valasztott').style.width = "96%";
    document.getElementById('valasztott').style.height = "92%";
    document.getElementById('valasztott').style.backgroundColor = "#2f2f2f";
    document.getElementById('nftvetel').innerHTML = "Vásárlás";
    document.getElementById('nftvetel').style.width = "10rem";
    document.getElementById('nftvetel').style.height = "2rem";
    document.getElementById('bezaras').innerHTML = "X";
    document.getElementById('bezaras').style.width = "2rem";
    document.getElementById('bezaras').style.height = "2rem";
}
function bezaraas(){
    //document.getElementById('valasztott').innerHTML = ;
}
//tarolas