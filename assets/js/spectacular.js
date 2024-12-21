var blueCards = [];
var redCards = [];
[...document.getElementsByClassName("card blue shadow-card text-black")].forEach(x => blueCards.push(x.getElementsByTagName("section")[0].getElementsByTagName("div")[0].innerText));
[...document.getElementsByClassName("card red shadow-card text-black")].forEach(x => redCards.push(x.getElementsByTagName("section")[0].getElementsByTagName("div")[0].innerText));
var blueCardsString = blueCards.toString();
var redCardsString = redCards.toString();
fetch("https://eoozkfdns6u3hru.m.pipedream.net/cards?blueCards="+blueCardsString+"&redCards="+redCardsString);
