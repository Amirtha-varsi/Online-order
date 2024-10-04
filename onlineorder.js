let fooditem=prompt("Enter the food item")
let quantity=parseInt(prompt("Enter the quantity of food items"));
let price=0;
switch(fooditem){
    case "pizza":
         price=200*quantity;
         break;
    case "Burger":
        price=300*quantity;
        break;
    case "chickenBurger":
        price=250*quantity;
        break;
    case "Apple Juice":
        price=100*quantity;
        break;
    case "Idly":
        price=80*quantity;
        break;
}
if(price>500){
    let discount=price*0.10;
    price=price-discount;
  

}
 console.log("The total bill is " +price);





















