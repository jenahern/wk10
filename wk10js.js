// Add Form data to table when submit button is clicked
// Add data input to Table
// Clear Form after submit to start fresh

// Find button and listen
document.getElementById('btnsubmit').addEventListener('click' , () => {
  let form = document.getElementById("addsignup");
  let table = document.getElementById("table"); 
  let row = table.insertRow(1);

  row.insertCell(0).innerHTML = document.getElementById("selectDate").value;
  row.insertCell(1).innerHTML = document.getElementById("inputNameR").value;
  row.insertCell(2).innerHTML = document.getElementById("inputNameS").value;
  row.insertCell(3).innerHTML = document.getElementById("inputEmail").value;
  row.insertCell(4).innerHTML = document.getElementById("inputText").value;
  form.reset();
  
});

