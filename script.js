// ------------------------- DOM elements -------------------------
const main = document.getElementById('main');
const doubleButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const addUserButton = document.getElementById('add-user');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// ------------------------- functions -------------------------

// get a new employee from the api
async function getRandomUser() {
  console.log('New Random User')

  let response = await fetch('https://randomuser.me/api');
  let responseData = await response.json();

  let user = responseData.results[0];
  // console.log(responseData)
  // console.log(user)

  let salary = Math.floor((Math.random() * 200000) + 35000);

  let newUser = {
    name: `${user.name.first} ${user.name.last}`,
    salary: salary,
  };

  console.log(newUser)

  // pass the new user into New Data
  addData(newUser);

}

// push the new employee into our array with all the data
function addData(employee){
  data.push(employee);
  console.log(data);

  updateDOM();
}

// updating the DOM
function updateDOM(employees = data){
  // clear the main div
  main.innerHTML = `<h2><strong>Employee</strong> Salary</h2>`;

  // add the employees to the main component
  employees.forEach((employee) => {
    let element = document.createElement('div');
    // add the person class && style
    element.classList.add('person');
    element.innerHTML = `<strong>${employee.name}</strong> ${employee.salary}`;
    main.appendChild(element);

  });

}
