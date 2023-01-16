function disablePrice() {
  let price = document.querySelector(".price");
  price.toggleAttribute("disabled");
  price.value = "0000";
}