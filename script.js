//Fetch Api from restcountries:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//Fetch Api data from restcountries by using Promise:-
// var res = fetch("https://restcountries.com/v2/all")
//   .then((data) => data.json())
//   .then((display) => console.log(display))
//   .catch((error) => console.log(error));

//----------------------------------------------------------------

//async function to fetch api data from restcountries:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

var x = 0;
var y = 1;
async function fetchApi() {
  //return promise object in readable stream
  // to handle this await is used.
  try {
    let res = await fetch("https://restcountries.com/v3.1/all");
    //after converting in Json Format it returns again Promise object
    //to handle this await is used.
    let JsonFormat = await res.json();

    for (var i = 0; i < JsonFormat.length; i++) {
      var CountryName = JsonFormat[i].name.common;
      var countrycapital = JsonFormat[i].capital[x];
      var countryflagimage = JsonFormat[i].flags.png;
      var countryregion = JsonFormat[i].region;
      var countrycode = JsonFormat[i].cca3;
      var latitude = JsonFormat[i].latlng[x];
      var longitude = JsonFormat[i].latlng[y];
      //console.log(latitude, longitude)

      if (latitude == undefined || longitude == undefined) {
        throw new Error(`invalid:unable to read the data`);
      }
      //-------------------------------------------------------------
      //*invoking a function:-
      //restcountry function call:-
      display(
        `${CountryName}`,
        `${countryflagimage}`,
        `${countrycapital}`,
        `${countryregion}`,
        `${countrycode}`
      );
      //openWeather map function call:-
      fetchWeather(latitude, longitude);
    }
    //-------------------------------------------
  } catch (error) {
    console.log(error.message);
  }
}

//------------------------------------------------
//async function call:-
fetchApi();
//------------------------------------------------

//Openweather map data:-
//^^^^^^^^^^^^^^^^^^^^

async function fetchWeather(lat, lon) {
  try {
    var res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`
    );
    var result = await res.json();
    var Temp = result.main.temp;
    console.log(Temp);
  } catch (err) {
    console.log(err);
  }
}

//----------------------------------------------------------------

//Appending rest countries data:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function display(
  countryname,
  countryflagimage,
  countrycapital,
  countryregion,
  countrycode
) {
  div_row.innerHTML += `

      <div class="col-lg-4">
        <div class="card-group">
        <div class="card" class="card border-dark mb-3" style="width: 18rem;">
            <div class="card-header card-title">${countryname}</div>
            <img src="${countryflagimage}" id="flag-img" class="card-img-top" alt="CountryName:,${countryname}" />
            <div class="card-body">
              <h5 class="card-title content">CAPITAL : ${countrycapital}</h5>
              <h5 class="card-title content">REGION : ${countryregion}</h5>
              <h5 class="card-title content">CODE : ${countrycode}</h5>
              <button type="button" id="temp-btn" class="btn btn-primary">Click for weather</button>
              <div class="card-footer bg-transparent" id="footer">TEMPERATURE :</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    `;
  // function displayTemp()
  // {
  //   var data=
  // }
}

//-------------------------------------------------------------------

var div_container = document.createElement("div");
div_container.setAttribute("class", "container");

var div_head = document.createElement("div");
div_head.setAttribute("class", "heading");
div_head.innerHTML = "COUNTRIES - DATA";

var div_row = document.createElement("div");
div_row.setAttribute("class", "row");

document.body.append(div_container);
div_container.append(div_head, div_row);

//------------------------------------------------------------------






//----------------------------------------------------------------



//*How to Fetch data from api by using Promise:-
// var createFunction = function () {
//   return new Promise((resolve, reject) => {
//     resolve(fetch("https://restcountries.com/v3.1/all"));
//     reject(`The given Api url is invalid.`);
//   });
// };

// createFunction()
//   .then((data) => data.json())
//   .then((result) => {
//     result.forEach((item) => {
//       var countryname = item.name.common;
//       var countrycapital = item.capital[0];
//       var countryflagimage = item.flags.png;
//       var countryregion = item.region;
//       var countrycode = item.cca3;

//       display(
//         countryname,
//         countryflagimage,
//         countrycapital,
//         countryregion,
//         countrycode
//       );
//     });
//   })
//   .catch((err) => {
//     // console.log(err);
//   });

//       var div_container=document.createElement("div")
//       div_container.setAttribute("class","container");
//       document.body.append(div_container);
//       var div_row=document.createElement("div")
//       div_row.setAttribute("class","row");
//       div_container.append(div_row);
// var display = function (
//   countryname,
//   countryflagimage,
//   countrycapital,
//   countryregion,
//   countrycode
// ) {
//   div_row.innerHTML += `

//       <div class="col-lg-4">
//         <div class="card-group">
//         <div class="card" class="card border-dark mb-3" style="width: 18rem;">
//             <div class="card-header card-title">${countryname}</div>
//             <img src="${countryflagimage}" class="card-img-top" alt="CountryName:,${countryname}" />
//             <div class="card-body">
//               <h5 class="card-title">CAPITAL : ${countrycapital}</h5>
//               <h5 class="card-title">REGION : ${countryregion}</h5>
//               <h5 class="card-title">CODE : ${countrycode}</h5>
//               <button class="btn btn-primary">Click for weather</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//     `;
// };

//------------------------------------------------------------------
