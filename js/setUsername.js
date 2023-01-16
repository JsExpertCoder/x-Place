// function setUsername() {
//   const username = document.querySelector(".userName");


// Cookies.set('nome', 'valor');

// console.log(Cookies.get("nome"));

//   // window.location.href = "home.html";
// }


// const firstText = document.querySelector("#firstText");
const user = document.querySelector(".userName");
const submitBtn = document.querySelector(".submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("username", user.value, 365);
});
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}