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
      showDropdownFilters(data);
      //displayCharacter(randomData);
      //getQuote(randomData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
}

getData();

function displayData(data) {
  const tBody = document.getElementById("tBody");

  for (let i = 0; i < data.length; i++) {
    // let members = [];
    // for (let j = 0; j < data[i].members.length; j++) {
    //   // console.log("members:>> ", data[i].members);
    //   members.push(data[i].members[j].name);
    // }

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = data[i].house.name;
    let td2 = document.createElement("td");
    td2.innerText = data[i].name;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tBody.appendChild(tr);
  }
}

//Dropdown Filters

//Get the reference to the table
function showDropdownFilters() {
  let table = document.getElementById("tBody");
  //Loop through the rows
  for (let i = 0; i < tBody.rows.length; i++) {
    const row = table.rows[i];
    const cell = row.td1;
    let value = td1.innerText;

    //create an option element with the value

    let option = document.createElement("option");
    option.value = value;
    option.innerText = value;

    document.getElementById("myDropdown1").appendChild(option);
  }
}
showDropdownFilters();
