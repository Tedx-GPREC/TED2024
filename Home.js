window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function sendMail()
{
  var params={
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
  };

const serviceid="service_7cuzav9";
const templetid="template_13p8skq";
emailjs.send(serviceid,templetid,params)
.then(
  res=>{
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("Your message sent successfully");

  }
)
.catch((err)=>console.log(err));}