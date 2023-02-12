const burgerMenu = document.querySelector("#burger-menu")
const navMenu = document.querySelector(".header-right")


burgerMenu.addEventListener("click", ()=> {
  if (!burgerMenu.classList.contains("active")){
      burgerMenu.classList.add("active")
      navMenu.style.right = "0"

  }
  else{
      burgerMenu.classList.remove("active")
      navMenu.style.right = ""
  }
})


