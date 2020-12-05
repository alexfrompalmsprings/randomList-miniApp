// ------------------------- DOM elements -------------------------
const main = document.getElementById('main');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const showMillionairesButton = document.getElementById('show-millionaires');
const addEmployeeButton = document.getElementById('add-user');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculate-wealth');

let data = [];

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

  // console.log(newUser)

  // pass the new user into New Data
  addData(newUser);
};

// function to increase the salary of th employee
function increaseSalary(){

  data = data.map((employee) => {
    return {...employee, salary: employee.salary * 1.10}
  });

  updateDOM();
};

// function to decrease the salary of th employee
function decreaseSalary(){

  data = data.map((employee) => {

    return {...employee, salary: employee.salary * .90}
  });

  updateDOM();
};


// push the new employee into our array with all the data
function addData(employee) {
  data.push(employee);
  console.log(data);

  updateDOM();
};

// updating the DOM
function updateDOM(employees = data) {
  // clear the main div
  main.innerHTML = `<h2><strong>Employee</strong> Salary</h2>`;

  // add the employees to the main component
  employees.forEach((employee) => {
    let element = document.createElement('div');
    // add the person class && style
    element.classList.add('person');
    element.innerHTML = `<strong>${employee.name}</strong> ${formatSalary(employee.salary)}`;
    main.appendChild(element);
  });
}

// function to format the salary with ','  ~ stackoverflow
function formatSalary(sal) {
  return '$' + sal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// ------------------------- Event Listeners -------------------------
addEmployeeButton.addEventListener('click', getRandomUser);
increaseButton.addEventListener('click', increaseSalary);
decreaseButton.addEventListener('click', decreaseSalary);