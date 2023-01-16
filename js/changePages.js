function changePageWithThis(_page, _post) {
  const page = _page;
  const post = document.querySelector(_post).value;
  let completePath = `${page}#${post}`
  
  window.location.href = completePath;
}

function changePageWithUsername (_page) {
  const username = getUsername();
  const completePath = `${_page}#${username}`
  window.location.href = completePath;

}
function changePage(_page) {
  window.location.href = _page;
}

function getUsername() {
  let URL_username = window.location.href;
  let isEmpty = window.location.href.split("#")

  URL_username = URL_username.split("#");
  URL_username = URL_username[URL_username.length - 1]

  if (URL_username.includes("%20")) {
    URL_username = URL_username.replace(/%20/ig, " ");
  }
   return URL_username;
}

function setUsername(username) {
  let SPAN_Username = document.querySelector("._user");
  SPAN_Username.innerText = username;
}

function changeToSamePage(_page) {
  const username = getUsername();

  const completePath = `${_page}#${username}`
  
  window.location.href = completePath;
  setUsername(username);
}