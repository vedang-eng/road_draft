// When the user scrolls down 20px from the top of the document, show the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//fetching the data from api
let URL = ` https://live-platform-api.herokuapp.com/api2/live_bus_platforms`;
let populatingLiveBusList = document.getElementById('populatingLiveBusList');
let populating = () => {
    // console.log("Populating");

    fetch(URL).then((responce) => {
        populatingLiveBusList.innerHTML = `<div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
        return responce.json();
    }).then((data) => {
        // console.log(data);
        let listOfBus = data.list;
        populatingLiveBusList.innerHTML = " ";
        for (element in listOfBus) {
            // console.log(element);
            let str = `<div class="col-sm-6 mb-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title my-3 mb-4" style="text-align:center">${listOfBus[element].platform_number}<h4>
        <h5 class="card-title">From-To : ${listOfBus[element].bus_from}-${listOfBus[element].bus_to}</h5>
        <p class="card-text mt-1 mb-1">Bus Number : ${listOfBus[element].bus_number}</p>
        
        <a class="btn btn-primary mb-4" id="multiCollapse${element}" data-bs-toggle="collapse" href="#multiCollapseExample${element}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">More Detail</a>

        <div class="col">

        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample${element}">
            <div class="card card-body">
            <li class="list-group-item">Platform Number : ${listOfBus[element].platform_number}</li>
            <li class="list-group-item">Bus Id : ${listOfBus[element]._id}</li>
            <li class="list-group-item">Bus Number : ${listOfBus[element].bus_number}</li>
            <li class="list-group-item">Bus From : ${listOfBus[element].bus_from}</li>
            <li class="list-group-item">Bus To : ${listOfBus[element].bus_to}</li>
            
            
            <li class="list-group-item">Total Bus Stop : ${listOfBus[element].tot_bus_stops}</li>



            </div>
          </div>
        </div>
        
      </div>

      

      </div>
    </div>
  </div>`
            populatingLiveBusList.innerHTML += str;
        };
    })



};
populating();
setInterval(() => {

    populating();

}, 90000);