function login(element) {
    console.log(element.innerHTML)
    if (element.innerHTML == "login") {
        element.innerHTML = "logout";
    }
    else{
        element.innerHTML = "login";
    }
};
function remove(element){
    element.remove();
};
function msg(){
    alert("Ninja was liked");
};