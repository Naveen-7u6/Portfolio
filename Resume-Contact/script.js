function sendMail(params){
    
    var temParams = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        contact:document.getElementById("contact").value,
        message:document.getElementById("msg").value,
    };
 
    emailjs.send('service_ahkbo0i','template_duvtq4r',temParams)
    .then(function(res){
        console.log("success",res.status);
    })
    
      document.getElementById("myButton").onclick = function () {
        location.href = "./thank.html";
    };
 
 
 }
