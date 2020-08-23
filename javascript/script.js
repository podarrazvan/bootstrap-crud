let users = [];
let content = '<div class="row">';
let edit = false;
let editIndex = 0;

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function addYears() {
    let years = '';
    for(let i = 1 ; i < 100; i++){
        years += `<option>${i}</option>`;
    }
    return years;
}



(function (){
    
//col 1 START
content += '<div class="col-sm">'; 

content += `<h1>Singup</h1>`;
content += '<form onsubmit="event.preventDefault(); onFormSubmit();" class="">';//form START
content += '<div class="form-group">'; 
content += `<label for="validationCustom01"><b>First name</b></label>`;
content += ` <input  placeholder="First name" type="text" class="form-control" id="inputFirstName">`;
content += `<div class="valid-feedback">✓</div>`;
content += '</div>';
content += '<div class="form-group">';
content += `<label for="validationCustom02"><b>Last name</b></label>`
content += `<input placeholder="Last name" type="text" class="form-control" id="inputLastName" >`;
content += `<div class="valid-feedback">✓</div>`;
content += '</div>';
content += '<div class="form-group">'
content += `<label for="exampleFormControlSelect1"><b>Age</b></label>`;
content += ' <select class="form-control" id="ageInput">';
content += addYears();
content += '</select>';
content += ' </div>';
content += '<div class="float-right">'
content += `<button  id="createBtn" class="btn btn-primary">Send</button>`;
content += '</div>'
content += ' </form>'; // form END

content += '</div>' 
//col 1 END

////////////////////////////

content += '<div class="col-sm">' 

content += '<table class="table">' // table START
content += `<h3>Users</h3>`;
content += '<thead>' // first row
content += '<tr>'
content += '<th scope="col">#</th>';
content += `<th scope="col">First name </th>`;
content += `<th scope="col">Last name </th>`;
content += `<th scope="col">Age </th>`
content += `<th scope="col">Created </th>`
content += `<th scope="col">Active/Inactive</th>`
content += `<th scope="col"></th>`;
content += `<th scope="col"></th>`;
content +=  '</tr>';
content +=  ' </thead>';
// CONTENT
content +=  '<tbody>'
content += ' </tbody>';
///
content += ' </table>'; //table END

content += '</div>';
content += '</div>'

$('.container').append(content);

})();


function readFormData (){  
    let user = {};
    let nr = Math.floor(Math.random() * Math.floor(2));
    user.firstName = document.getElementById('inputFirstName').value;
    user.lastName = document.getElementById('inputLastName').value;
    user.age = document.getElementById('ageInput').value;
    nr === 1 ? user.isActive = 'active' : user.isActive = 'inactive';
    return user;
}

function updateTable(arr){
  
  let d = new Date();

  $(".content").remove();
  let row = '';
  for(let i = 0 ; i < arr.length ; i++) {
  row +='<thead class="content">';
  row += '<tr>';
  row += `<td>${i}</td>`;
  row += `<td>${arr[i].firstName}</td>`;
  row += `<td>${arr[i].lastName}</td>`;
  row += `<td>${arr[i].age}</td>`;
  row += `<td>${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}</td>`
  row += `<td>${arr[i].isActive}</td>`;
  row += `<td><button onClick="onDelete(${i})" id="deleteBtn" class="btn btn-danger">Delete</button></td>`;
  row += `<td><button onClick="onEdit(${i})" id="deleteBtn" class="btn btn-primary">Edit</button></td>`;
  row += '</tr>';
  row +='</thead>';
  }
  $('.table').append(row);
}

function resetForm(){
    document.getElementById('inputFirstName').value = "";
    document.getElementById('inputLastName').value = "";
    document.getElementById('ageInput').value = "";
}
function onEdit(index) {
  document.getElementById('inputFirstName').value = users[index].firstName;
  document.getElementById('inputLastName').value = users[index].lastName;
  document.getElementById('ageInput').value = users[index].age;
  edit = true;
  editIndex = index;
}
function onDelete(index) {
  users.splice(index,1);
  updateTable(users);
}
function onFormSubmit() {
  const user = readFormData();
  if(edit === false){
    users.push(user);
  }else{
    users[editIndex] = user;
    edit = false;
  }
  updateTable(users);
  resetForm();
}

