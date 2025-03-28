const handleAddCart=()=>{
    const productName=document.getElementById('productName');
    const productQuantity=document.getElementById('productQuantity');
    const name=productName.value;
    const quantity=productQuantity.value;

    saveProductToLocalStorage(name,quantity)
    displayProduct(name,quantity)

    productName.value="";
    productQuantity.value="";

}

const displayProduct=(productName,quantity)=>{
    const productContainer=document.getElementById('product-container');

    const li=document.createElement('li');
    li.innerText=`${productName}:${quantity}`
    productContainer.appendChild(li);
}

const getProductFromLocalStorage=()=>{

    let cart={};
    const getProduct=localStorage.getItem('cart');

    if(getProduct){
        cart=JSON.parse(getProduct);

    }
    return cart;
}

const displayProductFromLocalStorage=()=>{
    const products=getProductFromLocalStorage();
    for(const product in products){
        // console.log(product)
        // console.log(products[product])
        displayProduct(product,products[product]);
        
    }
    
}

const saveProductToLocalStorage=(productName,quantity)=>{
    const cart=getProductFromLocalStorage();
    // console.log(cart);

    cart[productName]=quantity;

    const cartString=JSON.stringify(cart)
    localStorage.setItem("cart",cartString);

}

displayProductFromLocalStorage();

// const product={
// //    name:"laptop",
// //    quantity:13
//      laptop:12
// }

// product["test"]=100;
// console.log(product);

