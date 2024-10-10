function calculate() {
    var calc = 0
    arr.push(chnum)
    console.log(arr) 
    
    var calc = 0
    if (arr[1] = '+'){
       calc= Number(arr[0]) + Number(arr[2])
    }else    if (arr[1] = '-'){
        calc= Number(arr[0]) - Number(arr[2])
     }else    if (arr[1] = '*'){
        calc= Number(arr[0])*Number(arr[2])
     }else    if (arr[1] = '/'){
        calc= Number(arr[0])/Number(arr[2])
     }

    disp = document.querySelector("#display")
    disp.innerHTML = calc
};
var chnum = ""
function press(num) {
    chnum = chnum + String(num);
    disp = document.querySelector("#display")
    disp.innerHTML = chnum
    console.log(arr)   
};
function setOP(op) {
    arr.push(chnum)
    disp = document.querySelector("#display")
    disp.innerHTML = op
    arr.push(disp.innerHTML)
    console.log(arr) 
    chnum = ""
};
function clr() {
    disp = document.querySelector("#display")
    disp.innerHTML = 0
};
var arr = []