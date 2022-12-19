// fetching data
function getData() {
  fetch("https://api.gameofthronesquotes.xyz/v1/random/8")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);

      addEventListener(result);
      displayCards(result);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}

function displayCards(result) {
  const cardContainer = document.getElementById("card-deck");
  cardContainer.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    // card components
    cardContainer.setAttribute(
      "class",
      "flex-direction: row d-flex justify-content-around  p-2"
    );

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 18rem");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.setAttribute("class", "card-body");

    const title = document.createElement("h5");
    title.innerText = result[i].character.name;
    title.setAttribute("class", "card-title");

    const subtitle = document.createElement("h6");
    subtitle.setAttribute("class", "card-subtitle mb-2 text muted");

    if (result[i].character.house.name === null) {
      subtitle.innerText = "House not known";
    } else {
      subtitle.innerText = result[i].character.house.name;
    }

    const quote = document.createElement("p");
    quote.innerText = result[i].sentence;
    quote.setAttribute("class", "card-text");

    // appending card components
    cardContainer.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(quote);
  }
}

function addEventListener(result) {
  let button = document.querySelector("#quoteButton");
  button.addEventListener("click", () => {
    console.log("button clicked");
    //getData();
  });
}

getData();
