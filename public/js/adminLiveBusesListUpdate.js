console.log("Live bus is updating");
//Showing the message to top
let messageDiv=document.getElementById('messageDiv');
let giveMessage=(message)=>{
    let str=`<div class="alert alert-warning alert-dismissible fade show "  role="alert" id="messageDiv">
    <strong>Hola Admin!</strong> ${message}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    messageDiv.innerHTML=str;
}
// Update live bus slotes
// All inputes
let bus_number_bus_update_live=document.getElementById('bus_number_bus_update_live');
let platform_number_bus_update_live=document.getElementById('platform_number_bus_update_live');


let from_where_update_live=document.getElementById('from_where_update_live');
let to_where_update_live=document.getElementById('to_where_update_live');

let total_stops_update_live=document.getElementById('total_stops_update_live');

//updateing the url
let updateLiveList=document.getElementById('updateLiveList');//form for update live 
let updateBuslive=document.getElementById('updateBuslive');

updateBuslive.addEventListener('click',()=>{
    //parsing the date
    let newDate = new Date(Date_sheduling_update_live.value);
    //creating the object of the data to send the data to put
    let infoToAdd = {
        bus_number: `${bus_number_bus_update_live.value}`,
        
        bus_from: `${from_where_update_live.value}`,
        bus_to: `${to_where_update_live.value}`,
       
        tot_bus_stops: `${total_stops_update_live.value}`

    };

    let putLiveUrl= `https://live-platform-api.herokuapp.com/api2/live_platform_update/${platform_number_bus_update_live.value}`;

    let dataToSend={
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoToAdd)
    }

    fetch(putLiveUrl,dataToSend).then((response) => {
        if (response.status == 200) {
            console.log("It is ok");
        }
        else if(response.status==500){
            console.log("Bus number is repetaed");
            giveMessage("Bus number is repeted");
            return;
        }
        return response.json();
    }).then((json) => {
        console.log(json);
        if(json.result){
            giveMessage(json.message);
        }else{
            giveMessage(json.message);
        }
        
    });

    updateLiveList.reset();

});