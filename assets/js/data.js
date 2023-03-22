let urlAPI = " https://mindhub-xj03.onrender.com/api/amazing";

async function getEventData() {
  try {
    let response = await fetch(urlAPI);
    let dataAPI = await response.json();
    localStorage.setItem("data", JSON.stringify(dataAPI));
  } catch (error) {
    console.log(error);
  }
};

getEventData();
let data = localStorage.getItem("data");
data = JSON.parse(data);

function createCard (event){
  let card ="";
  card = `<div class="card" style="width: 18rem;">
      <img class="imgCartas" src="${event.image}" alt="${event.name}">
      <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div class="pie">
      <h6>Price $${event.price}</h6>
      <a href="./event.html?id=${event._id}" class="btn btn-warning">See more</a>
      </div>
    </div>
  </div>`;
  return card;
}

let currentDate = new Date(data.currentDate);

//creacion de categorias
let categorias = [];
data.events.map(event => {
  if (!categorias.includes(event.category)){
    categorias.push(event.category)
  }
  });
//console.log(categorias);