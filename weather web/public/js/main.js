// const cityName = document.getElementById('cityName');
// const submitBtn = document.getElementById('submitBtn');

// const city_name = document.getElementById('city_name');

// const getInfo = (event) =>{
//     // take page dora reload na ho 
//     event.preventDefault();
//     let cityVal = cityName.value;

//     // alert('plz fill that first');

//     // Assa await
//     if(cityVal === ""){
        
//         city_name.innerText = `Plz write the name before search`;
//         datahide.classList.add("data_hide");

//     }else{
//         try{
//             let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d119f596e093422101cde22b1ae98411`;
//         const response = await fetch(url);
//         console.log(response);
//         }catch{
//             city_name.innerText = `Plz enter yhe city name propuly`;
//         }
        
//     }

// }
// submitBtn.addEventListener('click', getInfo);


const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        data_hide.classList.add("data_hide");
    }else{

        try{

            let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d119f596e093422101cde22b1ae98411`;
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood  = arrData[0].weather[0].main;
            console.log(tempMood );

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }

            data_hide.classList.remove("data_hide");
            cityVal = "";
           
       
        }catch{
            // cityVal = " ";
            data_hide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
        }
        
    };
};

submitBtn.addEventListener('click', getInfo);
