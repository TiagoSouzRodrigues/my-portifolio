AOS.init({
  duration: 1000,
});



let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
let header = document.querySelector("header>h1")
let par = document.querySelector("p")
let txtp = document.querySelector(".welcome")
let btn1 = document.querySelector("button")
let cite = document.querySelector("cite")
let par2 = document.querySelector(".txt2>p")
let h1 = document.querySelector("h1")
let nameh1 = document.querySelector(".name-title")
let portfh1 = document.querySelector(".portifolio>h1")
let h2 = document.querySelector("h2")
let h2_2 = document.querySelector(".txt2>h2")
let lua = document.querySelector(".lua")
let sol = document.querySelector(".sol")

function activeDarkMode(){
  toggle.classList.toggle("active")

  if(toggle.classList.contains("active")){

    par.style.color = "#d3d3d3"
    par2.style.color = "#d3d3d3"
    txtp.style.color = "#d3d3d3"
    h1.style.color = "#e4dfdfba"
    btn1.style.backgroundColor ="#d3d3d3"
    nameh1.style.color = "#445964"
    h2.style.color = "#d3d3d3"
    h2_2.style.color = "#d3d3d3"
    cite.style.color = "#d3d3d3"
    body.style.backgroundColor = "#445964"
    portfh1.style.color ="#ffffff"
    lua.style.display = "block"
    sol.style.display = "none"
    
    
    
  } else{ 
    par.style.color = "#445964"
    par2.style.color = "#445964"
    txtp.style.color = "#445964"
    h1.style.color = "#445964"
    btn1.style.backgroundColor ="#445964"
    nameh1.style.color = "#445964"
    h2.style.color = "#445964"
    h2_2.style.color = "#445964"
    cite.style.color = "#445964"
    body.style.backgroundColor = "#d3d3d3"
    portfh1.style.color ="#445964"
    lua.style.display = "none"
    sol.style.display = "block"
   
  }
  
}

