console.log("The bus list is on");

let message=(message)=>{
    let str=`<div class="alert alert-warning alert-dismissible fade show "  role="alert" id="messageDiv">
    <strong>Hola Admin!</strong> ${message}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    messageDiv.innerHTML=str;
};

//top button js
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
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



//Add form 
//All inputes in add element 
let bus_number_bus = document.querySelector('#bus_number_bus');
let arrival_time_bus = document.getElementById('arrival_time_bus');
let Departure_time_bus = document.getElementById('Departure_time_bus');
let from_where = document.getElementById('from_where');
let to_where = document.getElementById('to_where');
let Date_sheduling = document.getElementById('Date_sheduling');
let total_stops = document.getElementById('total_stops');


//submiting the add bus 
let addBus = document.getElementById('addBus');
let addBusList = document.getElementById('addBusList');
addBus.addEventListener('click', (e) => {
    //parsing the date
    let newDate = new Date(Date_sheduling.value);
    //creating the object of the data to send the data to post
    let infoToAdd = {
        bus_number: `${bus_number_bus.value}`,
        arrival_time: `${arrival_time_bus.value}`,
        departure_time: `${Departure_time_bus.value}`,
        bus_from: `${from_where.value}`,
        bus_to: `${to_where.value}`,
        day_of_shedulig: `${newDate.getDay()}`,
        month_of_shedulig: `${newDate.getMonth()}`,
        year_of_shedulig: `${newDate.getFullYear()}`,
        tot_bus_stops: `${total_stops.value}`

    };
    let postUrl = `https://bus-list-api.herokuapp.com/api/post_data_bus`;
    let Tosend = {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoToAdd),

    };

    fetch(postUrl, Tosend).then((response) => {
        if (response.status == 200) {
            console.log("It is ok");
        }
        return response.json();
    }).then((json) => {
        console.log(typeof (json));
        //  console.log(JSON.parse(json));
        //  console.log(JSON.parse(json).result);
        message(json.message);
    });

    addBusList.reset();
});

//Update form bus list
let bus_number_bus_update = document.getElementById('bus_number_bus_update');
let arrival_time_bus_update = document.getElementById('arrival_time_bus_update');
let Departure_time_bus_update = document.getElementById('Departure_time_bus_update');
let from_where_update = document.getElementById('from_where_update');
let to_where_update = document.getElementById('to_where_update');
let Date_sheduling_update = document.getElementById('Date_sheduling_update');
let total_stops_update = document.getElementById('total_stops_update');

//submit update button
let updateBusList = document.getElementById('updateBusList');//update form of sheduled list
let updateBus = document.getElementById('updateBus');//update button

updateBus.addEventListener('click', () => {
    //parse the date
    let newDate = new Date(Date_sheduling_update.value);
    //creating the object of the data to send the data to post
    let infoToAdd = {

        arrival_time: `${arrival_time_bus_update.value}`,
        departure_time: `${Departure_time_bus_update.value}`,
        bus_from: `${from_where_update.value}`,
        bus_to: `${to_where_update.value}`,
        day_of_shedulig: `${newDate.getDay()}`,
        month_of_shedulig: `${newDate.getMonth()}`,
        year_of_shedulig: `${newDate.getFullYear()}`,
        tot_bus_stops: `${total_stops_update.value}`

    };

    let putUrl = `https://bus-list-api.herokuapp.com/api/modify_bus_details/${bus_number_bus_update.value}`;
    let Tosend = {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoToAdd),

    };

    fetch(putUrl, Tosend).then((response) => {
        if (response.status == 200) {
            console.log("It is ok");
        }
        return response.json();
    }).then((json) => {
        // console.log(json);
        message(json.message);
    });

    updateBusList.reset();
});

//Delete from bus list
let bus_number_bus_delete = document.getElementById('bus_number_bus_delete');

//delete form
let deleteBusForm = document.getElementById('deleteBusForm');//Delete bus form
let deleteBus = document.getElementById('deleteBus');//delete button

deleteBus.addEventListener('click', () => {
    let bus_number_bus_delete = document.getElementById('bus_number_bus_delete');
    let deleteBusUrl = `https://bus-list-api.herokuapp.com/api/delete_bus/${bus_number_bus_delete.value}`;

    let Tosend = {
        method: 'DELETE', // or 'PUT'
    };
    fetch(deleteBusUrl, Tosend).then((response) => {
        if (response.status == 200) {
            console.log("It is ok");
        }
        return response.json();
    }).then((json) => {
        // console.log(json);
        message(json.message);
    });
    deleteBusForm.reset();
});

