// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCZ8YSXecz3vftPBtQeqYNdtz7cyvS5sco",
  authDomain: "erick-solutions.firebaseapp.com",
  databaseURL: "https://erick-solutions-default-rtdb.firebaseio.com",
  projectId: "erick-solutions",
  storageBucket: "erick-solutions.appspot.com",
  messagingSenderId: "629049235964",
  appId: "1:629049235964:web:8854fd86bbee6f1f91fa79",
  measurementId: "G-SP53W03ZW1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
var ref = firebase.database().ref("proposals");

function submitform(reqBody) {
  const output = document.getElementsByClassName("output")[0];
  if (ref.push(reqBody)) {
    output.innerHTML =
      "Your proposal has been accepted. You will receive a response via your mail within 24 hours. Thank you for contacting us.";
    output.style.color = "green";
  } else {
    output.innerHTML =
      "An Error Occured while processing your information. Please try again.";
    output.style.color = "red";
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let reqBody = {};
  Object.keys(form.elements).forEach((key) => {
    let element = form.elements[key];
    if (element.type !== "submit") {
      reqBody[element.name] = element.value;
    }
  });
  console.log(reqBody);
  submitform(reqBody); // Call to function for form submission
});
