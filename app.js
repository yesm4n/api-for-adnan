"use strict";

// Bind variables

const container = document.querySelector(".container");
const copyright = document.querySelector(".footer-text");

// Country info

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <div class="country">
   <img src="${data.flags.png}" alt="flags" </>
   <h2 class="name">  ${data.name.common} </h2>
   <p> Region: ${data.region} </p>
   <p> Capital : ${data.capital[0]}</p>
   <p> Population ${data.population}</p>
   </div>
  `;
    container.insertAdjacentHTML("beforeend", html);
  });
};

getCountryData("kosovo");
getCountryData("albania");
getCountryData("greece");
getCountryData("montenegro");
getCountryData("romania");
getCountryData("serbia");
getCountryData("turkey");
getCountryData("croatia");
getCountryData("bulgaria");
getCountryData("slovenia");
getCountryData("bosnia");
getCountryData("macedonia");

// Footer

copyright.addEventListener("click", function () {
  window.location.href =
    "https://www.youtube.com/channel/UCYs08wA7Xa0iDt6fKKVsPVA";
});
