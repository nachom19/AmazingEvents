let upcomingEvents =[];
let pastEvents = [];


//Clasificacion de los eventos en Futuros y Pasados
data.events.forEach(event => {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate){
        upcomingEvents.push(event);    
    } else {
        pastEvents.push(event);
    }
});

//Tabla Events Statistics
let eventsStatistics = document.getElementById("contenido-tabla-Events");
let eventLowerPercentage;
let eventHighestPercentage;
let highestPercentage = 0;
let lowestPercentage = getPercentageAssistance(pastEvents[0]);


pastEvents.forEach(event =>{
    let eventPercentage = getPercentageAssistance(event);
    
    if (eventPercentage > highestPercentage){
        highestPercentage = eventPercentage;
        eventHighestPercentage = event;
    } 
    if (eventPercentage < lowestPercentage) {
        lowestPercentage = eventPercentage;
        eventLowerPercentage = event;
    }
   
});

function getPercentageAssistance (event){
    return ((event.assistance*100) / event.capacity);
}


let capacity = data.events.map(event => event.capacity);
let highestCapacity = Math.max(...capacity);
let eventLarger = data.events.find(event => event.capacity == highestCapacity);

   

/*console.log(eventsStatistics);
console.log(eventHighestPercentage);
console.log(eventLowerPercentage);
console.log(eventLarger);*/



let htmlEventsStatistics = 
`<td>${eventHighestPercentage.name}</td>  
<td>${eventLowerPercentage.name}</td>   
<td>${eventLarger.name}</td>`;

eventsStatistics.innerHTML =htmlEventsStatistics;


//Tablas por categorias
let eventsUpcomingTable = document.getElementById("contenido-tabla-Upcoming");
let eventsPastTable = document.getElementById("contenido-tabla-Past");
let htmlUpcomingStats = "";
let htmlPastStats = ""

/*console.log(eventsUpcomingTable);
console.log(eventsPastTable);*/

for (categoria of categorias){
    let revueves = 0;
    let acumuladoPercentageAttendance = 0;
    let eventAcumuladoPorCategoria = 0;
    upcomingEvents.filter(event => event.category.includes(categoria))
    .forEach(event =>{
        revueves += event.price * event.estimate;
        acumuladoPercentageAttendance += getPercentageEstimate (event);
        eventAcumuladoPorCategoria ++;

    });

    if (eventAcumuladoPorCategoria > 0){
        percentageAttendance = Math.round(acumuladoPercentageAttendance/eventAcumuladoPorCategoria);
    } else {
        percentageAttendance = 0;
    }
    
    
    console.log(revueves);
    //console.log(acumuladoPercentageAttendance);
    //console.log(eventAcumuladoPorCategoria);
    console.log(percentageAttendance);

    htmlUpcomingStats += 
    `<tr>
    <td>${categoria}</td>  
    <td>$${revueves}</td>   
    <td>${percentageAttendance}%</td>
    </tr>`;
   
    
    console.log(htmlUpcomingStats);
    
};

function getPercentageEstimate (event){
    return ((event.estimate*100) / event.capacity);
};

eventsUpcomingTable.insertAdjacentHTML("afterend", htmlUpcomingStats);

for (categoria of categorias){
    let revueves = 0;
    let acumuladoPercentageAttendance = 0;
    let eventAcumuladoPorCategoria = 0;
    pastEvents.filter(event => event.category.includes(categoria))
    .forEach(event =>{
        revueves += event.price * event.assistance;
        acumuladoPercentageAttendance += getPercentageAssistance (event);
        eventAcumuladoPorCategoria ++;

    });

    if (eventAcumuladoPorCategoria > 0){
        percentageAttendance = Math.round(acumuladoPercentageAttendance/eventAcumuladoPorCategoria);
    } else {
        percentageAttendance = 0;
    }
    
    
    console.log(revueves);
    //console.log(acumuladoPercentageAttendance);
    //console.log(eventAcumuladoPorCategoria);
    console.log(percentageAttendance);

    htmlPastStats += 
    `<tr>
    <td>${categoria}</td>  
    <td>$${revueves}</td>   
    <td>${percentageAttendance}%</td>
    </tr>`;
   
    
    console.log(htmlPastStats);
    
};
eventsPastTable.insertAdjacentHTML("afterend", htmlPastStats);