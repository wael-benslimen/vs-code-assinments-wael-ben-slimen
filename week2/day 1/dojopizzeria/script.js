function pizza_oven(crusttype,saucetype,cheeses,toppings{}) {
    var x = {};
    x.crusttype = crusttype;
    x.saucetype = saucetype;
    x.cheeses = cheeses;
    x.toppings = toppings;
    return x;
}
var s1 = pizza_oven("deepdish","traditional","mozzarella",["pepperoni", "sausage"]);
console.log(s1)

var s2 = pizza_oven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(s2)
