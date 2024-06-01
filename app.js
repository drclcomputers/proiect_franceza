
function changeImage(a) {
    document.getElementById("harta").src=a;
    if(a=="./images/hartaregiune.jpg"){
        var text = document.getElementById("inforeg");
        text.innerHTML="L'Alsace est bordée par le Rhin à l'est, qui la sépare de l'Allemagne, et par les Vosges à l'ouest. Sa situation géographique privilégiée en fait une région de passage et d'échanges depuis des siècles.";
    }
    else{
        var text = document.getElementById("inforeg");
        text.innerHTML="La Carte de France";
    }
}