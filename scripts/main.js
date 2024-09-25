// Array of 5 laptops
const laptops = [
    {
      name: "Dell XPS 13",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=427&qlt=100,1&resMode=sharp2&size=427,320&chrss=full",
      description: "The Dell XPS 13 is a high-performance ultrabook with a stunning 13.4-inch display, Intel i7 processor, and long battery life.",
      quantity: 1,
      price: 1200
    },
    {
      name: "Apple MacBook Air",
      image: "https://i.pcmag.com/imagery/reviews/07f8FmuWzIKHir2YRAXsK7G-1.fit_lim.size_919x518.v1716757237.jpg",
      description: "The Apple MacBook Air is a lightweight and powerful laptop featuring the Apple M1 chip, Retina display, and 18-hour battery life.",
      quantity: 1,
      price: 999
    },
    {
      name: "HP Spectre x360",
      image: "https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=",
      description: "The HP Spectre x360 is a premium 2-in-1 laptop with a 13.3-inch touchscreen, Intel i7 processor, and a sleek design.",
      quantity: 1,
      price: 1300
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      image: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",
      description: "The Lenovo ThinkPad X1 Carbon is a durable, business-class laptop with a 14-inch display, Intel i7 processor, and excellent security features.",
      quantity: 6,
      price: 1500
    },
    {
      name: "Asus ROG Zephyrus G14",
      image: "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=",
      description: "The Asus ROG Zephyrus G14 is a powerful gaming laptop with an AMD Ryzen 9 processor, 14-inch display, and dedicated NVIDIA RTX graphics.",
      quantity: 1,
      price: 1400
    }
  ];

  //render product to the D0M
  const cartContainer = document.getElementById("cart-list");
  console.log(cartContainer);

  //handle increment
  function incrementquantity(param){
    let clickProductName = param.target.id;

    //find the product in the array
    let product;
    for (item of laptops){
        if (item.name === clickProductName){
            product = item;
            break;
        }
    }

    //increment the quantity
  product.quantity++;

  //update the quantity element for this product
    let quantityEle = document.getElementById(`quantity-${clickProductName}`);
    quantityEle.textContent = product.quantity;

    totalEle.innerHTML = sumObject()
}

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