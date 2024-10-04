/*odds */
for ( i = 0; i <20; i++) {
    if (i%2 != 0) {
        console.log(i)
    }
    
}
/*dec multi 3 */
for (let i = 100; i > 0; i--) {
    if (i%3 == 0) {
        console.log(i)
    }
    
}
/*secuence */
for (let i = 4; i > -4 ; i = i-1.5) {
    console.log(i)
    
}
/*sigma */
var sum = 0
for (let i = 0; i < 101; i++) {
    sum = sum + i;
    
}
console.log(sum)
/*fact*/
var x = 1
for (let i = 1; i < 13; i++) {
    x = x*i
}
console.log(x)