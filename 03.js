let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function gs() {
  if (user.isloggedin == true) {
    console.log(user.firstname + " " + user.lastname);
  } else {
    console.log(false);
  }
}
gs();
