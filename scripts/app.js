let poemInd = 0;
// pic, title, name, dates, blurb, theme connection, pdf 
poems = 
[
    ["shakespeare", "Sonnet 116", "William Shakespeare (English Renaissance)", [1564,1616],
    "William Shakespeare lived during the English Renaissance, a period emphasizing the endurance of humanism, love, and the nature of truth. Similarly, Sonnet 116 presents love as an unchanging, steadfast force. Shakespeare married a woman who was 8 years older than him (who he had already impregnated), so perhaps his volatile experience of marriage may have driven his desire for the type of love described in this sonnet.",
    "In “Sonnet 116,” William Shakespeare presents a description of what love shouldn’t and should be, asserting that love must be consistent and reliable regardless of circumstance. This work fits into the theme of “Love and Relationships” by providing a view of love that emphasizes reliability and persistence.",
    "Sonnet116TSWIFT"],

    ["donne", "The Good-Morrow", "John Donne (Metaphysical)", [1572,1631],
    "John Donne lived during the Metaphysical era, which saw the common use of contrasting and paradoxical topics to discuss the spiritual aspect of life. Donne does the same in “The Good-Morrow,” using seafaring diction and imagery to represent how even in a small physical space, the speaker’s relationship with his lover makes him feel free from physical bounds. The poem shares resemblance with Donne’s relationship with Anne More, who had a much higher social status than him. Despite their differences in social standing, the pair got married in secret, exemplifying the poem’s message of romance providing an escape from real-life circumstances.",
    "In “The Good-Morrow,” Donne describes the maturing of a romantic relationship, growing from childish pleasures to pure devotion. The work fits the theme of “Love and Relationships” by illustrating how relationships can provide people with adventure and growth despite their surroundings or situations.",
    "TheGood-MorrowTSWIFT"],

    ["poe", "Annabel Lee", "Edgar Allan Poe (Romantic)", [1809,1849],
    "Edgar Allan Poe lived during the Romantic era, which held a focus on physical and emotional passion, as well as supernatural elements. These elements are also present in “Annabel Lee,” where the speaker’s lover is seized and killed by angels jealous of their love. Having lost his mother as a child and later his wife, both to Tuberculosis, the grief of the poem’s speaker could possibly be a parallel of his own experiences with grief.",
    "In “Annabel Lee,” Poe presents the story of a speaker who’s love interest has been killed by divine forces and physically separated from him by a vast sea; and yet, his heart remains fully devoted to her. This work fits into the theme of “Love and Relationships” by portraying a romantic relationship that transcends death, suggesting that true love is a forever-enduring force.",
    "AnnabelLeeTSWIFT"],

    ["dickinson", "Wild Nights - Wild Nights!", "Emily Dickinson (Modern)", [1830,1886],
    "Emily Dickinson lived during the Modern era, a time period which saw a lot of experimentation in poetry that reflected the world’s technological advancements. This experimentation is evident in the short and fragmented structure of “Wild nights - Wild nights!,” which parallels that fast-paced and excited mind of the speaker. Dickinson lived a notably reserved life in Amherst, which could have possibly produced the longing for adventure that is expressed by the speaker of the poem.",
    "In “Wild nights - Wild nights!” the speaker expresses their deep desire for worry-free adventure with the poem’s receiver. This work fits the theme of “Love and Relationships” by suggesting that spontaneous and fun experiences are a necessary component of loving relationships.",
    "WildNightsTSWIFT"],

    ["hughes", "Love Song for Lucinda", "Langston Hughes (Harlem Renaissance)", [1902,1967],
    "Langston Hughes lived during the Harlem Renaissance, which was centered on innovative African-American music and writing with deep emotional tones. This was represented in Hughes’ “Love Song for Lucinda,” which contrasts the appeals and dangers of romance. Hughes was never married and kept his romance life quite private, which parallels how the speaker of the poem isn’t speaking directly to someone specific (except for the title), but instead presents various portrayals of love that can be applied universally.",
    "In “Love Song for Lucinda,” the speaker warns the audience of the different dangers of love that hide behind its appeals, comparing love to various different attractive objects. This work fits the theme of “Love and Relationships” by depicting both the negative and positive aspect of romantic relationships.",
    "LoveSongForLucindaTSWIFT"],

    ["angelou", "Touched By An Angel", "Maya Angelou (Black Arts)", [1928,2014],
    "Maya Angelou lived in the Black Arts era, where African-American poets used poetry as a medium to express their cultural and historical experience. Themes of black oppression were present in Maya Angelou’s “Touched By An Angel,” which used the image of breaking chains and bondage to describe love’s effect on humanity. Angelou, having experienced both Jim Crow and the passage of the Civil Rights Act, was familiar with how humanity could be affected by love and a lack of it, which she described in her poem.",
    "In “Touched By An Angel,” the speaker paints an image of love as a “chainbreaker” of hate’s bonds, which have been holding people captive. This work fits the theme of “Love and Relationships” by advocating for the liberating and empowering effects love can have on the world. ",
    "TouchedByAnAngelTSWIFT"],
];

function displayPoem(){
    document.getElementById("headshot").setAttribute("src", "assets/" + poems[poemInd][0] + ".png");
    document.getElementById("poemTitle").innerHTML = poems[poemInd][1];
    document.getElementById("poetName").innerHTML = poems[poemInd][2];
    document.getElementById("time1").innerHTML = poems[poemInd][3][0];
    document.getElementById("time2").innerHTML = poems[poemInd][3][1];
    document.getElementById("tswift").setAttribute("href", "assets/" + poems[poemInd][6] + ".pdf"); 
    
}

function next(){
    poemInd = (poemInd + 1) % poems.length;
    displayPoem();
}

function prev(){
    poemInd -= 1;
    if(poemInd == -1) poemInd = poems.length-1;
    displayPoem();
}

function popup(){
    document.getElementById("popupContent").innerHTML = `
        <h2>About the Artist</h2>
        <p>${poems[poemInd][4]}</p>

        <h2>Thematic Connections</h2>
        <p>${poems[poemInd][5]}</p>

        <button onclick='closePopup()'>Close</button>
    `;
    document.getElementById("popup").style["display"] = "block";
}

function closePopup(){
    document.getElementById("popup").style["display"] = "none";
}

displayPoem();