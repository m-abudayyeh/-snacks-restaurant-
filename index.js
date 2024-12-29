// person name 
const name = prompt("Please enter your name:");

// gender 
const gender = prompt("Please enter your gender (male or female):").toLowerCase();

if (gender === "male") {
    alert(`Welcome, Mr. ${name}!`);
} else if (gender === "female") {
    alert(`Welcome, Ms. ${name}!`);
} else {
    alert(`Welcome, ${name}!`);
}

// Order 
const orderType = prompt("Would you like shawarma, zenger, or burger?");
let orderName = ""; 

switch (orderType.toLowerCase()) { 
    case "shawarma":
        orderName = prompt("Please enter the name of the shawarma you want to order:");
        break;

    case "zenger":
        orderName = prompt("Please enter the name of the zenger you want to order:");
        break;

    case "burger":
        orderName = prompt("Please enter the name of the burger you want to order:");
        break;

    default:
        orderName = "not available";
        alert("The order you selected does not exist.");
        break;
}

// Alert 
alert(`Your ${orderName} is getting prepared.`);

// Console print
console.log(`${name} has ordered a ${orderName} (${orderType}).`);

