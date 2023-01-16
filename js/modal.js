const generalModal = document.querySelectorAll("._modal");
const btnCloseModal = document.querySelectorAll(".btnClose");


btnCloseModal.forEach(btn => {
  const closeThisModal = `#${btn.classList[1]}`
  btn.addEventListener("click", ()=> {
    closeModal(closeThisModal)
  })
})

function openModal (modalElement) {
  const modal = document.querySelector(modalElement);
  modal.setAttribute("style", 
    `display: flex; 
     align-items: center; 
     justify-content: center;`)
}

function closeModal (modalElement) {
  const modal = document.querySelector(modalElement);
  modal.setAttribute("style", "display: none")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  generalModal.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }  
  })
} 