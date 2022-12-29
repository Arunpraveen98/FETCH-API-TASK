//Fetch Api from restcountries:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//Fewer lines of code to fetch Api from restcountries:-
// var res = fetch("https://restcountries.com/v2/all")
//   .then((data) => data.json())
//   .then((display) => console.log(display))
//   .catch((error) => console.log(error));

var createFunction = function () {
  return new Promise((resolve, reject) => {
    resolve(fetch("https://restcountries.com/v3.1/all"));
    reject(`The given Api url is invalid.`);
  });
};

//----------------------------------------------------------------

createFunction()
  .then((data) => data.json())
  .then((result) => {
    result.forEach((item) => {
      var countryname = item.name.common;
      var countrycapital = item.capital[0];
      var countryflagimage = item.flags.png;
      var countryregion = item.region;
      var countrycode = item.cca3;

      display(
        countryname,
        countryflagimage,
        countrycapital,
        countryregion,
        countrycode
      );
    });
  })
  .catch((err) => {
    // console.log(err);
  });

var display = function (
  countryname,
  countryflagimage,
  countrycapital,
  countryregion,
  countrycode
) {
  document.body.innerHTML += `
  <div class="container">
      <div class="row">
      <div class="col-lg-4">
        <div class="card-group">
          <div class="card">
            <div class="card-header card-title">${countryname}</div>
            <img src="${countryflagimage}" class="card-img-top" alt="CountryName:,${countryname}" />
            <div class="card-body">
              <h5 class="card-title">CAPITAL : ${countrycapital}</h5>
              <h5 class="card-title">REGION : ${countryregion}</h5>
              <h5 class="card-title">CODE : ${countrycode}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
    
    `;
};
