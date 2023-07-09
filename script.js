function callNow(){
    console.log('Call now');
}
function emailNow(){
    console.log('Email now');
}
function chatNow(){
    console.log('Chat now');
}

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var message = document.getElementById("msg").value;

    if(name,email,contact,message == ""){
        alert("All fields are mandatory")
    }
    else{
        const details = [name,email,contact,message]
        console.log(details)
        confirm("Details saved succussfully")
    }
}