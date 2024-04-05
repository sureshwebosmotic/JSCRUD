var employees = JSON.parse(localStorage.getItem('employees')) || [];
function onLoad() {
  showBasicData();
  showAdvanceData();
}

function submitData() {
  event.preventDefault();
  var employeeId = document.getElementById("employee-id").value;
  if (employeeId == "") {
    addData();
  } else {
    updateData();
  }
}

function addData() {
  var employeeId;
  var name = document.getElementById("name").value;
  var gender;
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else {
    gender = "Female";
  }
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var hobbies = [];
  if (document.getElementById("cricket").checked) {
    hobbies.push("Cricket");
  } if (document.getElementById("chess").checked) {
    hobbies.push("Chess");
  } if (document.getElementById("music").checked) {
    hobbies.push("Music");
  }

  employees.push({
    employeeId: (employees.length + 1).toString(),
    name: name,
    gender: gender,
    dob: dob,
    email: email,
    phone: phone,
    hobbies: hobbies
  });

  localStorage.setItem('employees', JSON.stringify(employees));
  showBasicData();
  showAdvanceData();
  document.getElementById("form").reset();
}

function updateData() {
  var employeeId = document.getElementById("employee-id").value;
  employees.forEach((element) => {
    if (employeeId == element.employeeId) {
      element.name = document.getElementById("name").value;
      element.dob = document.getElementById("dob").value;
      element.email = document.getElementById("email").value;
      element.phone = document.getElementById("phone").value;

      if (document.getElementById("male").checked) {
        element.gender = document.getElementById("male").value;
      } else {
        element.gender = "Female";
      }

      element.hobbies = [];
      if (document.getElementById("cricket").checked) {
        element.hobbies.push("Cricket");
      } if (document.getElementById("chess").checked) {
        element.hobbies.push("Chess");
      } if (document.getElementById("music").checked) {
        element.hobbies.push("Music");
      }
    }
  });
  localStorage.setItem('employees', JSON.stringify(employees));
  showBasicData();
  showAdvanceData();
  document.getElementById("form").reset();
}

function showBasicData() {
  var html = "";
  employees.forEach((element, index) => {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.gender + "</td>";
    html += "<td>" + element.dob + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.phone + "</td>";
    html += "<td>" + element.hobbies + "</td>";
    html += `<td> <button class="edit-btn" onclick="selectData(${index})"> Edit </button>
                    <button class="delete-btn" onclick="deleteData(${index})"> Delete </button></td>`;
    html += "</tr>";
  });
  document.querySelector(".table-body table tbody").innerHTML = html;
}

function showAdvanceData() {
  let columnNumber = 0;
  let html = `<tr id="nameRow">
                  <th>Name</th>
                </tr>
                <tr id="genderRow">
                  <th>Gender</th>
                </tr>
                <tr id="dobRow">
                  <th>DOB</th>
                </tr>
                <tr id="emailRow">
                  <th>Email</th>
                </tr>
                <tr id="phoneRow">
                  <th>Phone</th>
                </tr>
                <tr id="hobbiesRow">
                  <th>Hobbies</th>
                </tr>
                <tr id="actionRow">
                  <th>Action</th>
                </tr>`;
  document.querySelector(".advance-table-body table tbody").innerHTML = html;
  employees.forEach((element, index) => {
    columnNumber++;
    let nameCell = document.getElementById("nameRow").insertCell(columnNumber);
    nameCell.innerHTML = element.name;
    let genderCell = document.getElementById("genderRow").insertCell(columnNumber);
    genderCell.innerHTML = element.gender;
    let dobCell = document.getElementById("dobRow").insertCell(columnNumber);
    dobCell.innerHTML = element.dob;
    let emailCell = document.getElementById("emailRow").insertCell(columnNumber);
    emailCell.innerHTML = element.email;
    let phoneCell = document.getElementById("phoneRow").insertCell(columnNumber);
    phoneCell.innerHTML = element.phone;
    let hobbiesCell = document.getElementById("hobbiesRow").insertCell(columnNumber);
    hobbiesCell.innerHTML = element.hobbies;
    let actionCell = document.getElementById("actionRow").insertCell(columnNumber);
    actionCell.innerHTML = `<button class="edit-btn" onclick="selectData(${index})"> Edit </button>
                              <button class="delete-btn" onclick="deleteData(${index})"> Delete </button></td>`;
  });

}

function deleteData(index) {
  employees.splice(index, 1);
  localStorage.setItem('employees', JSON.stringify(employees));
  showBasicData();
  showAdvanceData();
}

function selectData(index) {
  document.getElementById("form").reset();
  document.getElementById("name").value = employees[index].name;
  document.getElementById("dob").value = employees[index].dob;
  document.getElementById("email").value = employees[index].email;
  document.getElementById("phone").value = employees[index].phone;
  document.getElementById("employee-id").value = employees[index].employeeId;
  if (employees[index].gender == "Male") {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }
  employees[index].hobbies.forEach((element, index) => {
    if (element == "Cricket") {
      document.getElementById("cricket").checked = true;
    } if (element == "Chess") {
      document.getElementById("chess").checked = true;
    } if (element == "Music") {
      document.getElementById("music").checked = true;
    }
  })
}