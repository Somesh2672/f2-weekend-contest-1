let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr
    .filter(user => user.profession === "developer")
    .map(user => console.log(user));
}

function PrintDeveloperbyForEach() {
  arr.forEach(user => {
    if (user.profession === "developer") {
      console.log(user);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  
  console.log("Added Employee:", newEmployee);
}

function removeAdmin() {
  const filteredUsers = arr.filter(user => user.profession !== "admin");
  console.log("Users without Admin:", filteredUsers);
}

function concatenateArray() {
  const additionalUsers = [
    { id: 4, name: "emma", age: "22", profession: "designer" },
    { id: 5, name: "mike", age: "21", profession: "developer" },
    { id: 6, name: "lisa", age: "25", profession: "admin" }
  ];

  const concatenatedArray = arr.concat(additionalUsers);
  
  console.log("Concatenated Array:", concatenatedArray);
}