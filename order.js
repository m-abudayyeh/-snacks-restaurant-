

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const orderNames = Array.from(document.querySelectorAll('input[name="ordername"]:checked')).map(el => el.value);
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value;

    const output = `
        Name: ${name}<br>
        Age: ${age}<br>
        Gender: ${gender || "Not selected"}<br>
        Orders: ${orderNames.length ? orderNames.join(", ") : "None"}<br>
        Order Type: ${orderType || "Not selected"}
    `;

    document.getElementById("output").innerHTML = output;
});


// Gender function
// function getgender() {
//     let gender = " ";
//     while (true) {
//         gender = prompt("Please enter your gender (male or female):").toLowerCase();
//         if (gender === "male" || gender === "female") {
//             return gender ;
//         }
//         alert("Invalid input. Please enter 'male' or 'female'.");
//     }
// }

// Person name and age 
// const name = prompt("Please enter your name:");
// const age = prompt("Please enter your age:");

// Gender
// let genderinput = getgender();

// // Greet the user based on gender
// if (genderinput === "male") {
//     alert(`Welcome, Mr. ${name}!`);
// } else if (genderinput === "female") {
//     alert(`Welcome, Ms. ${name}!`);
// }

// // Order 
// let orderType = "";
// let orderName = "";

// // Loop until a valid order type is entered
// while (true) {
//     // orderType = prompt("Would you like shawarma, zenger, or burger?").toLowerCase();

//     switch (orderType) { 
//         case "shawarma":
//             orderName = prompt("Please enter the name of the shawarma you want to order:");
//             break;

//         case "zenger":
//             orderName = prompt("Please enter the name of the zenger you want to order:");
//             break;

//         case "burger":
//             orderName = prompt("Please enter the name of the burger you want to order:");
//             break;

//         default:
//             alert("The order you selected does not exist. Please try again.");
//             continue; 
//     }
//     break; 
// }

// // Alert 
// alert(`Your ${orderName} ${orderType} is getting prepared.`);

// // Console print
// console.log(`${name} has ordered a ${orderName} (${orderType}).`);

// // user info 
// let user_info = [name, genderinput, orderType, orderName];

// for (let i = 0; i < user_info.length; i++) {
//     console.log(user_info[i]);
// }

// const userInfoDiv = document.getElementById("user-info");

// const mainDiv = document.createElement("div");
// const nameParagraph = document.createElement("p");
// const ol = document.createElement("ol");
// const genderLi = document.createElement("li");
// const ageLi = document.createElement("li");
// const orderLi = document.createElement("li");

// nameParagraph.textContent = name;
// genderLi.textContent = `Gender: ${genderinput}`;
// ageLi.textContent = `Age: ${age}`;
// orderLi.textContent = `Order: ${orderName} ${orderType}`;

// ol.appendChild(genderLi);
// ol.appendChild(ageLi);
// ol.appendChild(orderLi);

// mainDiv.appendChild(nameParagraph);
// mainDiv.appendChild(ol);

// userInfoDiv.appendChild(mainDiv);   