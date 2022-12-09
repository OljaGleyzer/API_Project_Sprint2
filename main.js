function addEventsListeners() {
  //get radio btns - add event listener to all of them
  let stark = document
    .getElementById("radioStark")
    .addEventListener("click", (e) => showMore("stark"));
  let lennister = document
    .getElementById("radioLennister")
    .addEventListener("click", (e) => showMore("lennister"));
  let targaryen = document
    .getElementById("radioTargaryen")
    .addEventListener("click", (e) => showMore("targaryen"));

  let btn = document.getElementById("quoteButton");
  btn.addEventListener("click", () => {
    console.log("button clicked");
    getData();
  });
}
//Show more Text at radio Buttons

const showMore = (house) => {
  let spanStark = document.getElementById("spanStark");
  let spanLennister = document.getElementById("spanLennister");
  let spanTargaryen = document.getElementById("spanTargaryen");
  // console.log("house :>> ", house);
  //condition to check house = stark targaryen or lennister
  if (house === "stark") {
    spanStark.style.display = "block";
  } else {
    spanStark.style.display = "none";
  }
  if (house === "lennister") {
    spanLennister.style.display = "block";
    //depending on the house
  } else {
    spanLennister.style.display = "none";
  }
  if (house === "targaryen") {
    spanTargaryen.style.display = "block";
  } else {
    spanTargaryen.style.display = "none";
  }
};
addEventsListeners();
// button Get your Quote
function getQuote(randomData) {
  console.log("btn :>> ", btn);

  let quoteContainer = document.getElementById("quoteContainer");

  quoteContainer.innerHTML = console.log(displayQuote(randomData));
}

// fetching data
function getData() {
  fetch("https://api.gameofthronesquotes.xyz/v1/random")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((randomData) => {
      displayQuote(randomData);
      //displayCharacter(randomData);
      //getQuote(randomData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}
// getData();

function displayQuote(randomData) {
  let quoteContainer = document.querySelector(".quote-container");
  quoteContainer.innerText = "";
  let quote = document.createElement("p");
  let character = document.createElement("p");
  console.log("quote :>> ", quote);
  quote.innerHTML = randomData.sentence;
  quoteContainer.appendChild(quote);

  console.log("character :>> ", character);
  character.innerHTML = randomData.character.name;
  quoteContainer.appendChild(character);
}
// function displayCharacter(randomData) {
//   let quoteContainer = document.querySelector(".quote-container");
//   let character = document.createElement("p");
//   console.log("character :>> ", character);
//   character.innerHTML = randomData.character.name;
//   quoteContainer.appendChild(character);
// }
