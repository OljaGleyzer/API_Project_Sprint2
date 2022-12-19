// fetching data
function getData() {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((data) => {
      console.log("data :>> ", data);

      dropdownOptions(data);
      createTable(data);
      // filterByDropDown1(data);
      addEventsListeners(data);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}

// function controller(data) {

//   displayData(data);
//   DropDownOptions(data);
// }

function dropdownOptions(data) {
  //Creating Dropdown Options
  // console.log("data[0].house.name :>> ", data[0].house.name);
  const dropdown = document.getElementById("myDropdown1");
  let housesArray = []; //filtered Array of houses without 0 value
  for (let i = 0; i < data.length; i++) {
    //   // console.log(" data[i] :>> ", data[i].house.name);

    //   // console.log("housesArray :>> ", housesArray);
    //   // console.log(
    //   //   'housesArra.includes(") :>> ',
    //   //   housesArray.includes("House Tarly of Horn Hill")
    //   // );

    //   //clean duplicates

    //   // check if data[i] is already inside the housesArray
    //   //if it is not : a) push it to the array, b) generate an <option> for the dropdown
    if (data[i].house !== null && !housesArray.includes(data[i].house.name)) {
      housesArray.push(data[i].house.name);
      const option = document.createElement("option");
      option.value = data[i].house.name;
      option.innerText = data[i].house.name;
      dropdown.appendChild(option);
    }
  }
  const dropdown2 = document.getElementById("myDropdown2");
  for (let i = 0; i < data.length; i++) {
    const option2 = document.createElement("option");
    option2.value = data[i].name;
    option2.innerText = data[i].name;
    dropdown2.appendChild(option2);
  }
}

//display table
function createTable(data) {
  const tBody = document.getElementById("tBody");
  tBody.innerHTML = "";
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

//Add Eventlistener to the dropdown

const addEventsListeners = (data) => {
  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  document.querySelector("#myDropdown1").addEventListener("change", (e) => {
    // select the house dropdown and change the selected value
    document.querySelector("#myDropdown2").value = "All";
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    filterByDropDown1(data, e);
  });
  document.querySelector("#myDropdown2").addEventListener("change", (e) => {
    // select the house dropdown and change the selected value
    document.querySelector("#myDropdown1").value = "All";
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    filterByDropdown2(data, e);
  });

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      console.log("click");
      //combinedFilters(data);
      filtersByCheckbox(data);
    });
  });
};

// Connect Dropdown Filters from html with the table from JS to filter

function filterByDropDown1(data) {
  const optionValue = document.getElementById("myDropdown1").value;
  console.log("optionValue", optionValue);
  const filteredHouses = data.filter((myObject) => {
    return (
      myObject.house !== null &&
      (myObject.house.name === optionValue || optionValue === "All")
    );
  });
  console.log("filteredHouses :>> ", filteredHouses);
  createTable(filteredHouses);
}

function filterByDropdown2(data) {
  const optionValue2 = document.getElementById("myDropdown2").value;
  const filteredCharacters = data.filter((myObject) => {
    return myObject.name === optionValue2 || optionValue2 === "All";
  });
  console.log("filteredCharacters :>> ", filteredCharacters);
  createTable(filteredCharacters);
}

function filtersByCheckbox(data) {
  const checkedCheckboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const checkedCheckboxesValuesArray = Array.from(checkedCheckboxes).map(
    (e) => {
      return e.value;
    }
  );
  const filteredCheckboxes = data.filter((myObject) => {
    return (
      checkedCheckboxesValuesArray.includes(myObject.name) ||
      checkedCheckboxesValuesArray.length === 0
    );
  });
  console.log("filteredCheckboxes :>> ", filteredCheckboxes);
  createTable(filteredCheckboxes);
}

getData();
