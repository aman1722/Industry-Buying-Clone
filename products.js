






fetch("https://frantic-gaiters-pig.cyclic.app/products")
.then((res)=>{
  return res.json();
})
.then((data)=>{
 console.log(data);
 displayAsCards(data)
})

function displayAsCards(data) {
    let container = document.getElementById("display");
    data.map(element => {
    
        

        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        
        let name = document.createElement("h3");
         name.textContent = element.title;
             
        let brand = document.createElement("p");
        brand.textContent = element.brand;

        let catagorey = document.createElement("p");
        catagorey.textContent = element.category;

        let price = document.createElement("p");
        price.textContent = element.price;

        let AddtoCartBtn = document.createElement(`button`);
        AddtoCartBtn.textContent = "Add To Cart";

        AddtoCartBtn.addEventListener("click",()=>{
            let isalreadyadd = false;
            for(let i=0;i<pro.length;i++){
             if(pro[i] === element.id){
                isalreadyadd=true;
               break;
             }
            }
            if(isalreadyadd===true){
                alt.textContent = "Product already in the cart";
                alert("Product already in the cart");
           }else{
            pro.push(element.id);
            localStorage.setItem("cart",JSON.stringify(pro));
            alt.textContent = "Product added to The cart";
            alert("Product added to The cart");
           }
        })


        card.append(image,name,brand,catagorey,price);

        container.append(card);
    })
    // buttonClickEvent(data);
}