// array di invitati
// chiedere nome
// display messaggio permesso

const userName = document.querySelector("#userName");
const userBtn = document.querySelector("#userBtn");
const finalMsg = document.querySelector("#finalMsg");

const guestList = [
  "Daniel E. Zambrana",
  "Jeffrey H. Paul",
  "Darlene J. Vogler",
  "Frances J. Bertram",
  "Sharon R. Anderson",
  "Paul J. Sanders",
  "Leslie R. Brubaker",
  "Andrew L. Parker",
  "Jennifer B. Serrano",
  "Scott C. Gaspar",
  "Paul M. Dole",
  "Georgia K. Stutler",
  "Debbie P. Miller",
  "Kyle E. Hunt",
  "Echo E. Bell",
  "Clinton I. O'Connor",
  "Martha T. Owens",
  "Erica J. Rogers",
  "Phyllis R. Pierce",
  "Michele M. Johnson",
];

// TODO Ask the name
userBtn.addEventListener("click", () => {
  if (guestList.includes(userName.value)) {
    finalMsg.innerHTML = "You are Allowed";
  } else {
    finalMsg.innerHTML = "You are not Allowed";
  }
});
