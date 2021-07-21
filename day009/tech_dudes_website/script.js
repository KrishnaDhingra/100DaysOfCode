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

function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("name_input").value,
        to_name: "Tech Dudes Team",
        email_name: document.getElementById("email_input").value,
        message: document.getElementById("message").value
    }
    emailjs.send('service_hmoj43t', 'template_mxy5jps', tempParams)
    .then(function(res){
        console.log("success", res.status)
        res.status == 200 ? alert("Thank you, Email has been sent") : alert("There was a problem while sending the Email")
    })

}


// function indicator(e){
//     marker.style.top = e.offsetTop+'px'
//     marker.style.width = e.offsetWidth+'px'
// }
// item.forEach(link =>{
//     link.addEventListener('mousemove', (e) =>{
//         indicator(e.target)
//     })
// })