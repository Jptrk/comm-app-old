//---------------//
//---Variables---//
//---------------//

// Upload Modal
var fileButton = document.querySelector(".choose-file-button");
var fileInput = document.querySelector(".choose-file-input");
var filePreview = document.querySelector(".file-preview h5");

var addUploadButton = document.querySelector(".add-upload");
var uploadModal = document.querySelector(".add-upload-modal");
var uploadClose = document.querySelector(".add-upload-modal .close");
var cancelUpload = document.querySelector(".add-upload-modal .cancel-upload");

// Edit Modal
var editUpload = document.querySelectorAll("table .edit");
var editClose = document.querySelector(".edit-modal .close");
var cancelEdit = document.querySelector(".edit-modal .cancel-edit");
var editModal = document.querySelector(".edit-modal");

// Global Variables
var state = false;

//---------------//
//---Functions---//
//---------------//

// Set File
function openFile(e) {
  var { value } = e.target;
  const filename = value.split("\\");
  filePreview.innerText = filename[2];
}

// Show Hide Modal
function showModal(el) {
  el.classList.toggle("show");
}

//------------//
//---Events---//
//------------//

// File Upload Modal
fileButton.addEventListener("click", function (e) {
  e.preventDefault();
  fileInput.click();
});

fileInput.addEventListener("change", function (e) {
  openFile(e);
});

addUploadButton.addEventListener("click", function () {
  showModal(uploadModal);
});

uploadClose.addEventListener("click", function () {
  showModal(uploadModal);
});

cancelUpload.addEventListener("click", function (e) {
  e.preventDefault();
  showModal(uploadModal);
});

// Edit Modal
editClose.addEventListener("click", function () {
  showModal(editModal);
});

editUpload.forEach((el) =>
  el.addEventListener("click", function () {
    showModal(editModal);
  })
);

cancelEdit.addEventListener("click", function () {
  showModal(editModal);
});
