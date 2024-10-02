// Array of 5 laptops
class product {
  //constructor to initialize product properties
  constructor (id, name, price){
  this.id = id,
  this.name = name,
  this.price = price
  };

  //adding method
  displayproductInfo(){
    console.log (`Product id: ${this.id}, Name: ${this.name}, Price: $${this.price}`);
};
};

const laptops = [
new product (1, "Dell XPS 13", 1200),
new product (2, "Apple MacBook Air", 999),
new product (3, "HP Spectre x360", 1300),
new product (4, "LenovoLenovo ThinkPad X1 Carbon", 1500),
new product (5, "Asus ROG Zephyrus G14", 1400),
];

// D0M Element
  const cartContainer = document.getElementById("cart-list");
  let total = document.getElementById("cart-total");

  //intialize quantity for products
  for (let product of laptops) {
    product.quantity = 1;
  };

  //function to update the total price
  function sumObject(){
    let total = 0;
    for (let products of laptops) {
      total += product.price * product.quantity;
    }
    return total;
  }



  // //handle increment
  // function incrementquantity(param){
  //   let clickProductName = param.target.id;

    // //find the product in the array
    // let product;
    // for (item of laptops){
    //     if (item.name === clickProductName){
    //         product = item;
    //         break;
    //     }
    // }

    //increment the quantity
//   product.quantity++;

//   //update the quantity element for this product
//     let quantityEle = document.getElementById(`quantity-${clickProductName}`);
//     quantityEle.textContent = product.quantity;

//     totalEle.innerHTML = sumObject()
// // }

//handle decrement
function decrementQty(param){
    let clickProductName = param.target.id;
    //find the product in the array
    let product;
    for(let item of laptops){
        if(item.name === clickProductName){
            product = item;
            break;
        }
    }

    //decrement the quantity
    if (product.quantity > 1){
        product.quantity--;
    }

    let quantityEle = document.getElementById(`quantity-${clickProductName}`);
    quantityEle.textContent = product.quantity;

    totalEle.innerHTML = sumObject()
}
//add up function in the total
function sumObject(){
    total=0;
    for(product of laptops) {
        total += product.price * product.quantity;
    }
    return total;
}

//function to for the delete button
function removebtn(param) {
    let clickrm = param.target.id;
   let clearbtn;

    for(product of laptops) {
      if( product.name === clickrm){
        clearbtn = product;
        break;
      }
    }

    //remove from the array 
    let index = laptops.indexOf(clearbtn
        
    );
    laptops.splice(index, 1);

    //remove the product card from the DOM
    let cartcard = param.target.parentElement.parentElement;
    cartContainer.removeChild(cartcard);

    totalEle.innerHTML = sumObject();
}

//total number 
let totalEle = document.getElementById("total");
totalEle.innerHTML = sumObject()

//render products
function renderProducts() {
    for (let product of laptops){
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-Card");

        let productImg = document.createElement("img");
        productImg.src = product.image;

        let productName = document.createElement("p");
        productName.textContent = product.name;

        let productPrice =  document.createElement("p");
        productPrice.textContent = product.price;

        let productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        //buttons
        let incrementBtn = document.createElement("button");
        incrementBtn.textContent = "+";
         incrementBtn.addEventListener("click", incrementquantity);
         incrementBtn.setAttribute("id", product.name);

        let decrementBtn = document.createElement("button");
        decrementBtn.textContent = "-";
        decrementBtn.setAttribute("id", product.name);
        decrementBtn.addEventListener("click", function(eventObj) {decrementQty(eventObj)});

        let quantity = document.createElement("p");
        quantity.setAttribute("id", `quantity-${product.name}`)
        quantity.textContent = 1;

        let deleteEle = document.createElement("button");
        deleteEle.textContent = "Remove";
        deleteEle.setAttribute("id", product.name);
        deleteEle.addEventListener('click', (eventObj) =>{
            removebtn(eventObj);
        })

        let leftBox =  document.createElement("div");
        leftBox.setAttribute("class", "leftBox");
        leftBox.appendChild(decrementBtn);
        leftBox.appendChild(quantity);
        leftBox.appendChild(incrementBtn);
        let actionBox = document.createElement("div");
        actionBox.setAttribute("class", "action-box");
        actionBox.appendChild(leftBox);
        actionBox.appendChild(deleteEle);
        
        //add element to the product
        productCard.appendChild(productImg);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(actionBox);

        cartContainer.appendChild(productCard);
    }    
}

renderProducts();