import SubMain from "./subMain.js";
export default class Main {
  constructor() {
    new SubMain();
  }
}
window.onload = function () {
  new Main();
};

// var employees = JSON.parse(localStorage.getItem('employees')) || [];

// function AddData() {

//       var name = document.getElementById("name").value;
//       var gender = document.getElementById("gender").value;
//       var birthdate = document.getElementById("birthdate").value;
//       var email = document.getElementById("email").value;
//       var phone = document.getElementById("phone").value;
//       var hobbies = document.getElementById("hobbies").value;
//       console.log(hobbies);
//       employees.push({
//           name: name,
//           gender: gender,
//           birthdate: birthdate,
//           email: email,
//           phone: phone,
//           hobbies: hobbies
//       });

//       localStorage.setItem('employees', JSON.stringify(employees));  
// }