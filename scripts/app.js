let poemInd = 0;
// pic, title, name, dates, blurb, theme connection, pdf 
poems = 
[
    ["shakespeare", "Sonnet 116", "William Shakespeare (English Renaissance)", [1564,1616],
    "William Shakespeare lived during the English Renaissance, a period emphasizing the endurance of humanism, love, and the nature of truth. Similarly, \"Sonnet 116\" presents love as an unchanging, steadfast force that persists despite the speaker’s separation from his love interest. Shakespeare married a woman who was 8 years older than him (who he had already impregnated), suggesting he had a volatile view of marriage, reflected in the love interest’s death.",
    "In “Sonnet 116,” William Shakespeare presents the story of a speaker who’s love interest has been killed by divine forces and physically separated from him by a vast sea; and yet, his heart remains fully devoted to her. This work fits into the theme of “Love and Relationships” by portraying a romantic relationship that transcends death, suggesting that true love is a forever-enduring force.",
    "AnnabelLeeTSWIFT"]
];

function displayPoem(){
    document.getElementById("headshot").setAttribute("src", "assets/" + poems[poemInd][0] + ".png");
    document.getElementById("poemTitle").innerHTML = poems[poemInd][1];
    document.getElementById("poetName").innerHTML = poems[poemInd][2];
    document.getElementById("time1").innerHTML = poems[poemInd][3][0];
    document.getElementById("time2").innerHTML = poems[poemInd][3][1];
    document.getElementById("tswift").setAttribute("href", "assets/" + poems[poemInd][6] + ".pdf"); 
    
}

displayPoem();