let htmlEvents ="";
let cartas = document.getElementById("cartas");

for (let event of data.events) {
  let eventDate = new Date(event.date);
  if (eventDate < currentDate){
      htmlEvents += createCard (event);    
  };
}
cartas.innerHTML = htmlEvents;
console.log(htmlEvents);