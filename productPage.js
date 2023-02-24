const ProductAPI="https://frantic-gaiters-pig.cyclic.app/products";


async function fetchProduct(A)
 {
    try{
        let PromiseData=await fetch(A);
        let Data=await PromiseData.json();
        Display(Data)
    }
    catch(err){
        console.log(err)

    }
 }
 fetchProduct(ProductAPI)
 function Display(obj){
    const MainDoc=document.querySelector("#items");
    MainDoc.innerHTML=null;
    
    console.log(obj)
    obj.forEach(element => {
        let div=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let image=document.createElement("img");
        image.src=element.image;
        div1.append(image)
        let title=document.createElement("p");
        title.innerText=element.Description;
        let Price=document.createElement("p");
        Price.innerText=element.price;
        let AddToCart=document.createElement("button");
        let BuyNow= document.createElement("button");
        AddToCart.innerText="Add To Cart";
        BuyNow.innerText="Buy Now";
        div2.append(AddToCart,BuyNow);
        div.append(div1,title,Price,div2)
        MainDoc.append(div);
        // image.src=
    });
    // console.log(obj)
 }