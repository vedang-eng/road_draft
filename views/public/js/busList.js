
//reloading the page after 

//fetching the data from api
let URL = `https://bus-list-api.herokuapp.com/api/get_bus_list`;
let populatingBusList = document.getElementById('populatingBusList');
let listOfBus;
let populating = () => {
  // console.log("Populating");

  fetch(URL).then((responce) => {
    populatingBusList.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
    return responce.json();
  }).then((data) => {
    console.log(data);
    listOfBus = data.list;
    populatingBusList.innerHTML = " ";
    for (element in listOfBus) {
      console.log(element);
      let str = `<div class="col-sm-6 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">From-To : ${listOfBus[element].bus_from}-${listOfBus[element].bus_to}</h5>
        <p class="card-text mt-1 mb-1">Arrival Time : ${listOfBus[element].arrival_time}</p>
        <p class="card-text mb-1">Departure Time : ${listOfBus[element].departure_time}</p>
        <p class="card-text mb-1">Date : ${listOfBus[element].day_of_shedulig}/${listOfBus[element].month_of_shedulig}/${listOfBus[element].year_of_shedulig}</p>
        <a class="btn btn-primary mb-4" id="multiCollapse${element}" data-bs-toggle="collapse" href="#multiCollapseExample${element}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">More Detail</a>

        <div class="col">

        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample${element}">
            <div class="card card-body">
            <li class="list-group-item">Bus Id : ${listOfBus[element]._id}</li>
            <li class="list-group-item">Bus Number : ${listOfBus[element].bus_number}</li>
            <li class="list-group-item">Bus From : ${listOfBus[element].bus_from}</li>
            <li class="list-group-item">Bus To : ${listOfBus[element].bus_to}</li>
            <li class="list-group-item">Arrival Time : ${listOfBus[element].arrival_time}</li>
            <li class="list-group-item">Departure Time : ${listOfBus[element].departure_time}</li>
            <li class="list-group-item">Date : ${listOfBus[element].day_of_shedulig}/${listOfBus[element].month_of_shedulig}/${listOfBus[element].year_of_shedulig}</li>
            <li class="list-group-item">Total Bus Stop : ${listOfBus[element].tot_bus_stops}</li>



            </div>
          </div>
        </div>
        
      </div>

      

      </div>
    </div>
  </div>`
      populatingBusList.innerHTML += str;
    };
  })



};
populating();
setInterval(() => {

  populating();

}, 2000000);


let from = document.getElementById('from');
let serachBtn = document.getElementById('serachBtn');
let to = document.getElementById('to');


