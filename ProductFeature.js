let clickedProduct=JSON.parse(localStorage.getItem("Product"))
let ProductFrame=document.querySelector("#productContainer>img");
ProductFrame.src=clickedProduct.image;

console.log(clickedProduct)
// let image=document.createElement("img");
