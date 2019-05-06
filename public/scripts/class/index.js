'use strict'


let button1 = document.getElementById("add");
let button2 = document.getElementById("del");
let button3 = document.getElementById("edit");


button1.addEventListener('click', function (){
    let newName = document.getElementById("addStudent").value;
    
    fetch('/class/api/create', {
        method : 'POST',
        headers:  {"Content-Type" : "application/json"},
        body: JSON.stringify({student: newName})
    })
    .then(function(response){
        if (response.ok)
        {
        return response.json();
        }
        else throw "Failed to load web page";
        })
    .catch((e) => {alert(e)})

    fetch('/class/api/list') // Returns a Promise for the GET request
    .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok)
    return response.json() // Return the response parse as JSON if code is valid
    else
    throw 'Failed to load classlist: response code invalid!'
    })
    .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    let classList = document.getElementById('classList')
    // Iterate through all students
    classList.innerHTML = '';
    data.forEach(function (student) {
    // Create a new list entry
    let li = document.createElement('LI')
    let liText = document.createTextNode(student)
    // Append the class to the list element
    li.className += 'list-group-item disabled'
    // Append list text to list item and list item to list
    li.appendChild(liText)
    classList.appendChild(li)
    })
    })
    .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
    })

    document.getElementById("addStudent").value = '';
}, false)


button2.addEventListener("click", function () {
    let delName = document.getElementById("delStudent").value;
    let student = {student : delName};
    fetch('/class/api/delete', {
        method : 'POST',
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(student)
    })
    .then(res => res.json())
    .catch(e => alert(e))

    fetch('/class/api/list') // Returns a Promise for the GET request
    .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok)
    return response.json() // Return the response parse as JSON if code is valid
    else
    throw 'Failed to load classlist: response code invalid!'
    })
    .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    let classList = document.getElementById('classList')
    // Iterate through all students
    classList.innerHTML = '';

    data.forEach(function (student) {
    // Create a new list entry
    let li = document.createElement('LI')
    let liText = document.createTextNode(student)
    // Append the class to the list element
    li.className += 'list-group-item disabled'
    // Append list text to list item and list item to list
    li.appendChild(liText)
    classList.appendChild(li)
    })
    })
    .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
    })
    document.getElementById("delStudent").value = '';
    
}, false)

button3.addEventListener("click", () => {
    let oldName = document.getElementById("editStudent").value;
    let newName = document.getElementById("newVal").value;

    fetch('/class/api/edit', { 
    method : 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({student : oldName, newVal : newName})
})
    .then(res => res.json())
    .catch(e => alert(e))


    fetch('/class/api/list') // Returns a Promise for the GET request
    .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok)
    return response.json() // Return the response parse as JSON if code is valid
    else
    throw 'Failed to load classlist: response code invalid!'
    })
    .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    let classList = document.getElementById('classList')
    // Iterate through all students
    classList.innerHTML = '';

    data.forEach(function (student) {
    // Create a new list entry
    let li = document.createElement('LI')
    let liText = document.createTextNode(student)
    // Append the class to the list element
    li.className += 'list-group-item disabled'
    // Append list text to list item and list item to list
    li.appendChild(liText)
    classList.appendChild(li)
    })
    })
    .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
    })
    document.getElementById("editStudent").value = "";
    document.getElementById("newVal").value = "";
}, false)