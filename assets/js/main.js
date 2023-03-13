let htmlEvents ="";
let cartas = document.getElementById("cartas");

for (let event of data.events) {
    htmlEvents += createCard(event)
}
cartas.innerHTML = htmlEvents;

//HTML categorias
let checkbox = document.getElementById("checkbox");
let htmlCheckbox = "";
for (categoria of categorias) {
  htmlCheckbox += `<div class="form-check form-switch col-xs-2">
  <input class="form-check-input" type="checkbox" role="switch" id="${categoria}" value="${categoria}">
  <label class="form-check-label" for="${categoria}">${categoria}</label>
</div>`
}
checkbox.innerHTML = htmlCheckbox;
// console.log(htmlCategoria);

//Filtro de checkbox
let itemsCheckboxes = document.querySelectorAll(".form-check-input");
// console.dir(itemsCheckboxes);

itemsCheckboxes.forEach(checkbox => checkbox.onchange = ()=>{
    let checkboxActivos = [];
    itemsCheckboxes.forEach(checkbox => {
        if(checkbox.checked){
            checkboxActivos.push(checkbox.id)
        }
        
    })
    if (checkboxActivos.length>0) {
        let htmlChequeados = "";
        data.events.filter(event => checkboxActivos.includes(event.category)).forEach(event =>
        {htmlChequeados += createCard(event)}
        );
        cartas.innerHTML = htmlChequeados;
    } else {
        cartas.innerHTML = htmlEvents;
    }

})

// Funcion buscar y mostrar resultados
function buscar(textoIngresado, coleccionBusqueda) {
    let resultadoBusqueda = coleccionBusqueda.filter(palabraBuscada =>
      palabraBuscada.name.toLowerCase().includes(textoIngresado) || 
      palabraBuscada.description.toLowerCase().includes(textoIngresado))
  
      return resultadoBusqueda;
  }
     
  function mostrarResultado(resultadoBusqueda){
    if(resultadoBusqueda.length > 0){
        let htmlResuldadosBusqueda = "";
        for (let resultado of resultadoBusqueda) {
          htmlResuldadosBusqueda += createCard(resultado)
        }
        cartas.innerHTML = htmlResuldadosBusqueda;
      } else {
        cartas.innerHTML = '<h3>No event was found, try again</h3> '
      }
    }
  

//buscador
let textoBuscado = document.getElementById("textoBuscado")
document.getElementById("formBuscador").addEventListener('submit', event =>{
    event.preventDefault();

    let search = textoBuscado.value.toLowerCase().trim();
    let resultados = buscar(search, data.events);
    mostrarResultado(resultados);
    
       
});

//filtro + buscador
let htmlResuldadosBusqueda = "";

function buscadorFiltrado(checkboxActivos, textoIngresado) {
    if (checkboxActivos.length > 0){
        data.events.filter(event => checkboxActivos.includes(event.category)).forEach(event =>
            {htmlResuldadosBusqueda += createCard(event)});
    } else if (checkboxActivos.length > 0 && textoIngresado.length > 0) {
        data.events.filter(event => checkboxActivos.includes(event.category)).filter(event => event.name.toLowerCase().includes(textoIngresado)|| 
        event.description.toLowerCase().includes(textoIngresado)).forEach(event =>
            {htmlResuldadosBusqueda += createCard(event)});
    } else if (textoIngresado.length > 0) {
        data.events.filter(event => event.name.toLowerCase().includes(textoIngresado)|| 
        event.description.toLowerCase().includes(textoIngresado)).forEach(event =>
            {htmlResuldadosBusqueda += createCard(event)});
    } else {
        cartas.innerHTML = '<h3>No event was found, try again</h3>'
      }
}

