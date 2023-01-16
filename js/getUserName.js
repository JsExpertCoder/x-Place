let SPAN_Username = document.querySelector("._user");
let URL_username = window.location.href;
let isEmpty = window.location.href.split("#")

URL_username = URL_username.split("#");
URL_username = URL_username[URL_username.length - 1]
isEmpty      =      isEmpty[isEmpty.length - 1]

if (URL_username.includes("%20")) {
  
  URL_username = URL_username.replace(/%20/ig, " ");
}



if (!SPAN_Username.innerText && URL_username) {
  SPAN_Username.innerText = URL_username;
}

else if (!SPAN_Username.innerText) {
  SPAN_Username.innerText = "Fábio Nicolau"
  window.location.href += "Fábio Nicolau"
}



