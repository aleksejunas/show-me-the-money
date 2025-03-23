// Show Me The Money Button to generate random image of money
var showMeTheMoneyImageBtn = document.getElementById("showMeTheMoneyImageBtn");

// Output Div
var imageOutputDiv = document.getElementById("imageOutputDiv");

// Variables
var randomIndex;

// Image Array
var moneyImageArray = [
  "norwegianKroner.jpg",
  "chineseYuan.jpg",
  "czechKoruna.jpg",
  "danishKroner.jpg",
  "dollarBill.jpg",
  "hongKongDollar.jpg",
  "hundredPoundNote.jpg",
  "kenyanShilling.jpg",
  "swedishKroner.jpg",
  "tanzanianShilling.jpg",
  "goldBars.jpg",
];

// Functions
function setRandomIndex() {
  randomIndex = Math.floor(Math.random() * moneyImageArray.length);
}

function showMeTheMoney() {
  // First remove any existing active class
  showMeTheMoneyImageBtn.classList.remove("button-active");

  // Force a reflow before adding the class again
  void showMeTheMoneyImageBtn.offsetWidth;

  // Add active class to button for extended visibility
  showMeTheMoneyImageBtn.classList.add("button-active");

  // Set a reasonable timeout (500ms is noticeable but not too long)
  setTimeout(function () {
    showMeTheMoneyImageBtn.classList.remove("button-active");
  }, 100);

  setRandomIndex(); // Initiates randomIndex

  // Create a new image element for better control
  const img = new Image();

  // Set up image loading handler
  img.onload = function () {
    // Clear the output div
    imageOutputDiv.innerHTML = "";
    // Add class for styling consistency
    img.className = "money-image";
    // Add the loaded image to the DOM
    imageOutputDiv.appendChild(img);
  };

  // Set error handler
  img.onerror = function () {
    imageOutputDiv.innerHTML = '<div class="error-message">Image failed to load</div>';
  };

  // Set the source to start loading
  img.src = `images/${moneyImageArray[randomIndex]}`;
  img.alt = `Currency image: ${moneyImageArray[randomIndex].replace(".jpg", "")}`;
}

// Initiate onclick Section
showMeTheMoneyImageBtn.onclick = showMeTheMoney;
