//---------------//
//---Variables---//
//---------------//
var textarea = document.querySelector(".message-input");

//---------------//
//---Functions---//
//---------------//
function autoHeight() {
  // Set initial height
  textarea.style.height = "30px";

  // Add more height based on element's scroll height
  textarea.style.height = textarea.scrollHeight + "px";
}

//------------//
//---Events---//
//------------//
textarea.addEventListener("input", function () {
  autoHeight(textarea);
});

// This will automatically add more height to textarea on input change
