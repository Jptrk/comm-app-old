//Variables
var dropdown = document.querySelector(".dropdown");
var dropdownHeader = document.querySelector(".dropdown-header .selected");
var dropdownList = document.querySelector(".dropdown-list");
var dropdownOptions = document.querySelectorAll(".option");
var selectedUser = document.querySelector(".selected-user");

var selected = "J Bose";

// Functions
function show() {
  dropdownList.classList.toggle("show");
}

// Events
dropdownOptions.forEach((el) =>
  el.addEventListener("click", function () {
    selected = this.innerText;
    dropdownHeader.innerText = selected;
    selectedUser.value = selected;
  })
);

dropdown.addEventListener("click", show);
