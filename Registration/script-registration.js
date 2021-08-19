$(document).ready(function(){
    $(".icon").click(function (){
        
        //$("li").slideToggle();
        $(".toggler").toggleClass('responsive');

    })
})

function validate(){
    var nama = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var choose = document.getElementById('choose').value;
    var adress = document.getElementById('adress').value;
    var error = document.getElementById('errorMsg');
    var check = document.querySelector('input[name="preferences"]:checked');

    if(nama == "" && email == "" && pass == "" && choose == "" && adress == "" && !check){
        error.innerText = "form can't be empty"
        return false;
    }if(nama == ""){
        error.innerText = "username can't be empty"
        return false;
    }
    for(var i=0; i<nama.length; i++){
        var temp = nama.charCodeAt(i)
        if(temp != 32 && !(temp > 64 && temp < 91) && 
        !(temp > 96 && temp < 123)){
            error.innerText = "name must be alphabet"
            return false;
        }
    }
    if(email == ""){
        error.innerText = "email can't be empty"
        return false;
    }
    if (email.indexOf("@") == -1) {
        error.innerText = "invalid email address"
        return false;
    }
    if(pass == ""){
        error.innerText = "password can't be empty"
        return false;
    }if(pass.length < 5){
        error.innerHTML = "password must be minimal 5 character length"
        return false;
    }if(choose == ""){
        error.innerText = "country must be choosed"
        return false;
    }if(adress == ""){
        error.innerText = "address can't be empty"
        return false;
    }if(adress.trim().split(/\s+/).length < 5){
        error.innerHTML = "adress must be minimal 5 words"
        return false;
    }if(!check){
        error.innerHTML = "select one or more art preferences"
        return false;
    }
    alert('Successfully Registered')
    return true;

}