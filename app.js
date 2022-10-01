function circleShape(){
    var circle = document.getElementById('box')
    // console.log(circle);
    circle.style.borderRadius = '50%'
    circle.style.width = '350px'
    circle.style.height = '350px'
}

function rectangle(){
    var square = document.getElementById('box');
    // console.log(square)
    square.style.borderRadius = '0%'
    square.style.width = '300px'
    square.style.height = '400px'
}

function original(){

    var original = document.getElementById('box')
    original.style.borderRadius = '0'
    original.style.width = '350px';
    original.style.height = '350px';
}

function submit(){
    var fname = document.getElementById('fname').value;
    var lname =document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var zcode = document.getElementById('zcode').value;

    // var cfname = /^[A-Za-z]{3,40}$/;

    // console.log("First name: " + fname);
    
    if(fname == "" ){
        document.getElementById('ufname').innerHTML = "first name required";
    }

    else if(lname == ""){   
        document.getElementById('ulname').innerHTML = "last name required";
    }

    else if(email == ""){
        document.getElementById('uemail').innerHTML = "email is reuired";
    }
    else if (phone == ""){
        document.getElementById('uphone').innerHTML = "phone number is reuired";
    }
    else if (zcode == "" && zcode.length>5){
        document.getElementById('uzcode').innerHTML = "Wrong zip code";
    }
    else{
        return true;
    }
}
























