let hamburger = document.getElementById("hamburger_outer")
let nav_icons = document.getElementById("res_nav_icons")
let navbar = document.getElementById("links_outer")
let marker =  document.getElementById("marker")
let item = document.querySelectorAll("ul li a")

hamburger.addEventListener("click", () =>{
    nav_icons.classList.toggle("toggle_nav_icons")
    hamburger.classList.toggle("burger")
    navbar.classList.toggle("nav_active")

})

// function indicator(e){
//     marker.style.top = e.offsetTop+'px'
//     marker.style.width = e.offsetWidth+'px'
// }
// item.forEach(link =>{
//     link.addEventListener('mousemove', (e) =>{
//         indicator(e.target)
//     })
// })