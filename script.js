document.body.style.backgroundColor="Darkorange";
document.body.style.fontSize="22px";

function onooff() {
    a=document.getElementById("onoff").value;
    if (a == "OFF"){
        document.getElementById("onoff").value="ON";
        document.getElementById("onoff").style.backgroundColor="blue";

    }else {
        document.getElementById("onoff").value="OFF";  
        document.getElementById("onoff").style.backgroundColor="grey";
    }
}

var b=document.querySelector(".toggle");
var text=document.querySelector(".text");
function onoff(){
    b.classList.toggle('active');
    if (b.classList.contains('active')){
        text.innerHTML= "ON";
    }
    else {
        text.innerHTML= "OFF";
    }
}