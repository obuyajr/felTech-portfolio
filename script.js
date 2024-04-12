const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

function sendMail(){
	var params = {
		name : document.getElementById("name").value,
		email : document.getElementById("email").value,
		message : document.getElementById("message").value,
	};


const serviceID = "service_0prqz6j"
const templateID = "service_0prqz6j"

emailjs.send(serviceID,templateID,params)
.then(
	res=>{
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";

		console.log(res);
		alert("Message Sent Successfully!!");
	}
)
.catch((err)=>console.log(err));
}