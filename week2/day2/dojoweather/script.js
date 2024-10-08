function city() {
    alert("Loading weather report. ")
}
function del(id){
    var x = document.getElementById(id)
    x.remove()
}
function feh(element){
    x = document.getElementById("temp").value
    if (x == "°C") {
        document.getElementById("t1").innerHTML = "24°"
        document.getElementById("t2").innerHTML = "18°"
        document.getElementById("t3").innerHTML = "27°"
        document.getElementById("t4").innerHTML = "19°"
        document.getElementById("t5").innerHTML = "21°"
        document.getElementById("t6").innerHTML = "16°"
        document.getElementById("t7").innerHTML = "26°"
        document.getElementById("t8").innerHTML = "21°"
    }
    else if (x == "°F") {
        document.getElementById("t1").innerHTML = "75°"
        document.getElementById("t2").innerHTML = "65°"
        document.getElementById("t3").innerHTML = "80°"
        document.getElementById("t4").innerHTML ="66°"
        document.getElementById("t5").innerHTML = "69°"
        document.getElementById("t6").innerHTML = "61°"
        document.getElementById("t7").innerHTML = "78°"
        document.getElementById("t8").innerHTML = "70°"
    }
}