
function changeImage(a) {
    document.getElementById("harta").src=a;
    if(a=="./images/hartaregiune.jpg"){
        var text = document.getElementById("inforeg");
        text.innerHTML="L'Alsace est bordée par le Rhin à l'est, qui la sépare de l'Allemagne, et par les Vosges à l'ouest. Sa situation géographique privilégiée en fait une région de passage et d'échanges depuis des siècles. La superficie de l'Alsace est d'environ 8 280 kilomètres carrés. En ce qui concerne la population, elle est d'environ 1,8 million d'habitants.";
    }
    else{
        var text = document.getElementById("inforeg");
        text.innerHTML="La Carte de France";
    }
}