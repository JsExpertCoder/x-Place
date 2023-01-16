const acticityFormInputs = document.querySelectorAll(".inputToCheck");
const dateInput = document.querySelector("input[type='date']");
// const btnPost = document.querySelector("modalPost");
// const modalElement = document.querySelector("#modalPost");

function checkInputs(modalToOpenAfterCheck, modalToCloseAfterCheck = false, msgAboutInputs) {
  // btnPost.addEventListener("click", () => {
    let justChar = false;
    let allChar = [];
    let inputLength = 0;
  
    acticityFormInputs.forEach((input, i) => {
      let value = input.value;
      value = value.split("");
  
      if (value.length != 0) {
        inputLength = value.length
        allChar = [];
  
        value.forEach(char => {
          if (char == " ") {
            allChar.push(true)
          }
        })
  
        if (allChar.length == inputLength) {
          justChar = true;
        }
      }
      else {
        justChar = true;
      }
    })
  
    if (justChar) {
      if (msgAboutInputs) 
        alert(msgAboutInputs)
      else
        alert("Preencha todos os compos")
    }
    else {
      // até aqui validou-se a maioria dos campos
      // modalElement.setAttribute("style", 
      // `display: flex; 
      //  align-items: center; 
      //  justify-content: center;`)    
      if (modalToCloseAfterCheck) {
        closeModal(modalToCloseAfterCheck);
      }
      openModal(modalToOpenAfterCheck)
    }
  // })
}



