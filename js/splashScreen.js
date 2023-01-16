class SplashScreen {
  constructor(splashScreen, btnGetStart) {
    this.btnGetStart = document.querySelector(btnGetStart);
    this.splashScreen = document.querySelector(splashScreen);
    this.changeScreen = this.changeScreen.bind(this)
  }
  splash() {
    this.splashScreen.classList.add("active");
  }
  changeScreen() {
    this.splashScreen.classList.add("goLeft")
    setTimeout(() =>  window.location.href = "sign-in-form.html", 100)
  }
  start() {
    this.splash()
    this.btnGetStart.addEventListener("click", this.changeScreen)
  }
}
const splashscreen = new SplashScreen(".splashScreen", ".btnGetStart");
splashscreen.start();

// for (let width = 0; width < 101; width++) {
      //   setTimeout(() => {
      //     this.progress.setAttribute("style", `width:${width}% `);
      //     this.progressSpan.innerText = `${width}%`;

      //     if(width > 40) 
      //       this.progress.style.background = "violet"
      //     if (width == 100) {
      //       this.splashScreen.classList.remove("active");
      //       this.progress.style.background = "#07d400"
      //       this.splashScreen.classList.add("goLeft")
            
      //     }
      //     setTimeout(() =>  window.location.href = "http://localhost/learning-php/projects/crud/sign-in.php", 1500)
      //   }, 20 * width);
      // }