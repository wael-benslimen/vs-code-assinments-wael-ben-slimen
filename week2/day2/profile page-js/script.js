function del(element,id,id2) {
    console.log(element.innerHTML)
    var x=document.getElementById(id2).innerHTML;
    console.log(x)
    y = Number(x) - 1
    document.getElementById(id2).innerHTML = y

    if (element.innerHTML == "✔") {
        
        var z=document.getElementById('yc').innerHTML;
        console.log(z)
        c = Number(z) + 1
        console.log(c)
        document.getElementById('yc').innerHTML = c
    }

    const ele = document.getElementById(id);
    ele.remove()
}


function change(id) {
    document.getElementById(id).innerHTML = "random name"
}

