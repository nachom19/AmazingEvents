let seeMore = location.search
let eventDetail = new URLSearchParams(seeMore);
let evento = eventDetail.get("id");
let eventAmpliado = data.events.find(event => event.id == evento);

let eventSeeMore = document.querySelector("#cartaAmpliada");
eventSeeMore.innerHTML = `<img  src="${eventAmpliado.image}" alt="${eventAmpliado.name}">
<div class="card text-center px-3 border border-warning" style="width: 25rem; height:30rem">
    <div class="card-body">
        <h2 class="card-title">${eventAmpliado.name}</h2>
        <p class="card-text fs-5">${eventAmpliado.description}</p>
        <div class="card-footer mt-4 text-start">
            <p>Category: ${eventAmpliado.category}</p>
            <p>Date: ${eventAmpliado.date}</p>
            <p>Place: ${eventAmpliado.place}</p>
            <p>Capacity: ${eventAmpliado.capacity}</p>
            <p>Assistance: $ ${eventAmpliado.assistance}</p>
            <p>Price:  ${eventAmpliado.price}</p>
            <div class="col-12"><a href="./index.html" class="btn px-3 border btn-warning float-end">Return</a></div>
        </div>
    </div>
</div>`;  

 

