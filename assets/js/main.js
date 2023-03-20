let htmlEvents ="";
let cartas = document.getElementById("cartas");

for (let event of data.events) {
    htmlEvents += createCard(event)
}
cartas.innerHTML = htmlEvents;

//HTML categorias
let itemsCheckboxes;
let checkbox = document.getElementById("checkbox");
let htmlCheckbox = "";
for (categoria of categorias) {
  htmlCheckbox += `<div class="form-check form-switch col-xs-2">
  <input class="form-check-input" type="checkbox" name="categorias" role="switch" id="${categoria}" value="${categoria}">
  <label class="form-check-label" for="${categoria}">${categoria}</label>
</div>`
}
checkbox.innerHTML = htmlCheckbox;
// console.log(htmlCategoria);
itemsCheckboxes = document.querySelectorAll(".form-check-input");

itemsCheckboxes.forEach(checkbox =>{
    checkbox.addEventListener("change", ()=>{
        filtroDoble();
    })
})

document.getElementById("formBuscador").addEventListener('submit', event =>{
    event.preventDefault();

});

let textoBuscado = document.getElementById("textoBuscado");
textoBuscado.addEventListener("input", texto =>{
    
    filtroDoble();
    
})

function checkboxChequeados(){
    let checkboxActivos = [];
    itemsCheckboxes.forEach(checkbox =>{
        if (checkbox.checked){
            checkboxActivos.push(checkbox.value);
        }
    })
    return checkboxActivos;
}

function filtroDoble(){
    let checkboxActivos = checkboxChequeados();
    let textoIngresado = textoBuscado.value;
    let htmlResuldadosBusqueda = "";
    let resultadoBusqueda = data.events.filter(event => 
         event.name.toLowerCase().includes(textoIngresado.toLowerCase())
         || event.description.toLowerCase().includes(textoIngresado.toLowerCase()));
     
     if(checkboxActivos.length > 0){
        resultadoBusqueda = resultadoBusqueda.filter(event => checkboxActivos.includes(event.category))
        } 
        
       if(resultadoBusqueda.length < 1 ){
            htmlResuldadosBusqueda = '<h3>No event was found, try again</h3>'
        } else        
        for (let event of resultadoBusqueda) {
            htmlResuldadosBusqueda += createCard(event)
        
        }
        cartas.innerHTML = htmlResuldadosBusqueda;
        console.log(htmlResuldadosBusqueda);
        console.log(htmlResuldadosBusqueda.length);
}
    
    
  
   