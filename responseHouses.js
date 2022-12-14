// fetching data
function getData() {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((data) => {
      console.log("data :>> ", data);

      displayData(data);
      showFilters(data);
      addEventsListeners(data);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}

getData();

function displayData(data) {
  const tBody = document.getElementById("tBody");
  // const houseArray = [data.house.name];
  // console.log("data[0].house.name :>> ", data[0].house.name);
  const dropdown = document.getElementById("myDropdown1");
  let housesArray = []; //filtered Array of houses without 0 value
  for (let i = 0; i < data.length; i++) {
    // console.log(" data[i] :>> ", data[i].house.name);

    // console.log("housesArray :>> ", housesArray);
    // console.log(
    //   'housesArra.includes(") :>> ',
    //   housesArray.includes("House Tarly of Horn Hill")
    // );

    //clean duplicates
    // check if data[i] is already inside the housesArray
    //if it is not : a) push it to the array, b) generate an <option> for the dropdown
    if (data[i].house !== null && !housesArray.includes(data[i].house.name)) {
      housesArray.push(data[i].house.name);
      const option = document.createElement("option");
      option.value = data[i].house.name;
      option.innerText = data[i].house.name;
      dropdown.appendChild(option);
    }
  }

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    if (data[i].house === null) {
      td1.innerText = "House not known";
    } else {
      td1.innerText = data[i].house.name;
    }
    let td2 = document.createElement("td");
    td2.innerText = data[i].name;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tBody.appendChild(tr);
  }
}

// Connect Dropfown Filters from html with the table from JS to filter

function showFilters() {
  const housesData = [data[i].house.name];
  const drp1Options = document.getElementById("drp1Options");

  //if houseData equal dropdown Menu options than display the specific houseData
  for (let i = 0; i < drp1Options.length; i++) {
    if (drp1Options[i] === housesData[j]) {
      console.log(housesData(j));
    }
  }
}

//Add Eventlistener to the dropdown
function addEventsListeners() {
  let dropdown1 = document
    .getElementById("drp1Options")
    .addEventListener("change", (e) => showFilters("housesData"));
  console.log("option changed");
}
