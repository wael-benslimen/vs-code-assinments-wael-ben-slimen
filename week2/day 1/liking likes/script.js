function likes(element, id) {
    var x=document.getElementById(id).innerHTML;
    y = Number(x) + 1
    document.getElementById(id).innerHTML = y
}