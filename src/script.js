const switchContent = {
  switchMenu(){
    const img = document.querySelector("#nav-menu")


    img.classList.toggle("activeClose")
    switchContent.returnHome()
  },
  returnHome(){
    const nav = document.querySelector(".navbar-open")
    nav.classList.toggle("open")
  }
}