let htmlEvents ="";
let cartas = document.getElementById("cartas");

for (let event of data.events) {
    htmlEvents += createCard(event)
}
cartas.innerHTML = htmlEvents;
console.log(htmlEvents);