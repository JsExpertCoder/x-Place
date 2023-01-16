const title = document.querySelector(".title");
const info = document.querySelector(".information");
const info2 = document.querySelector(".informationTwo");


function SetInformation(_title, _info) {
  title.innerText = _title;
  if (_info == "random") {
    info2.setAttribute("style", "display: block")
    info.innerText = createRandomContact();
    info2.innerText = createRandomEmail();
  }
  else {
    info2.setAttribute("style", "display: none")
    const infoToSet = document.querySelector(_info).innerText;
    info.innerText = infoToSet;
  }
  openModal("#moreAndContactModal");
}

function createRandomContact() {
    let phoneNumber = "";

    for (let i = 1; i < 9; i++) {
        phoneNumber += `${Math.ceil(Math.random() * 9)}`;
    }

    phoneNumber = `9${phoneNumber}`;

    return phoneNumber;
}

function createRandomEmail() {
  const randomsUsernames = ["user","John", "Luciano", "Gideão", 
                            "Daniel", "Alberto", "Junior", 
                            "Igor",    "Adolfo", "Isack",
                            "Celso",   "Fábio",  "Victória"
                          ];
  const randomDomain = ["gmail", "outlock", "xplace"];

  let randomNumberForUsers = Math.ceil(Math.random() * 13) - 1;                         
  let randomNumberForDomains = Math.ceil(Math.random() * 3) - 1;

  let selectedUsername = `${randomsUsernames[randomNumberForUsers]}@${randomDomain[randomNumberForDomains]}.com`;

  return selectedUsername;
}