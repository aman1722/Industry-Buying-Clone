const ProductAPI="https://iris-conscious-potential.glitch.me/products";
let Obj=JSON.parse(localStorage.getItem("Product"))||{};
let fetch_1;
let CartStorage=JSON.parse(localStorage.getItem("Cart"))||[]
let SelectOption=document.getElementById("Categories");
let Ratings=document.getElementById("Ratings");
let Select1 = document.querySelector("#Select")
SelectOption.addEventListener("change",()=>{
    if(SelectOption.value==="Brand")
    {
       fetch_1=`${ProductAPI}?category=IB POWER BRAND`
       fetchProduct(fetch_1) 
    }
    if(SelectOption.value==="bestSeller")
    {
       fetch_1=`${ProductAPI}?category=Best Sellers`
       fetchProduct(fetch_1) 
    }
    if(SelectOption.value==="newArrival")
    {
       fetch_1=`${ProductAPI}?category=NEW ARRIVALS`
       fetchProduct(fetch_1) 
    }
    if(SelectOption.value==="itElectronics")
    {
       fetch_1=`${ProductAPI}?category=IT & Electronics`
       fetchProduct(fetch_1) 
    }
    if(SelectOption.value==="oFFICSUPPLIES")
    {
       fetch_1=`${ProductAPI}?category=Office Supplies`
       fetchProduct(fetch_1) 
    }

})
Ratings.addEventListener("change",()=>{
    if(Ratings.value==="5")
    {
       fetch_1=`${ProductAPI}?rating=5`
       fetchProduct(fetch_1) 
    }
    if(Ratings.value==="4.5")
    {
        fetch_1=`${ProductAPI}?rating=4.5`
       fetchProduct(fetch_1) 
    }
    if(Ratings.value==="4")
    {
        fetch_1=`${ProductAPI}?rating=4`

       fetchProduct(fetch_1) 
    }
    if(Ratings.value==="3.5")
    {
        fetch_1=`${ProductAPI}?rating=3.5`
       
       fetchProduct(fetch_1) 
    }
    if(Ratings.value==="3")
    {
        fetch_1=`${ProductAPI}?rating=3`
       
       fetchProduct(fetch_1) 
    }

})

async function fetchProduct(A)
 {
    try{
        let PromiseData=await fetch(A);
        let Data=await PromiseData.json();
        Display(Data)
        Select1.addEventListener("change",()=>{
         if(Select1.value==="")
         {
             Display(Data)
         }
         else{
             if(Select1.value==="LowToHigh")
             {
                 function Compare(a,b){
                     return a.price-b.price;
                 }
                 let data1=Data.sort(Compare)
                    Display(data1)
                 
             }
             if(Select1.value==="HighToLow")
             {
                 function Compare(a,b){
                     return b.price-a.price;
                 }
                 let data1=Data.sort(Compare)
                    Display(data1)
                 
             }
         }
        });
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
        let div3 = document.createElement("div");
        div3.innerText = element.rating;
        image.src=element.image;
        
        div1.append(image)
        div1.addEventListener("click",()=>{
                window.location.href="ProductFeature.html"
                localStorage.setItem("Product",JSON.stringify(element))           
        })
        let title=document.createElement("p");
        title.innerText=element.Description;
        let Price=document.createElement("p");
        Price.innerText="Price: Rs"+element.price;
        let AddToCart=document.createElement("button");
        AddToCart.innerText="Add To Cart";
        
        AddToCart.addEventListener("click",()=>{
            CartStorage.push(element);
            // let flag = false;
            // for(let i=0;i<CartStorage.length;i++){
            //    if(CartStorage[i].id === element.id){
            //      break;
            //    }else{
            //     flag=true;
            //    }
            // }
            // if(flag){
               localStorage.setItem("Cart",JSON.stringify(CartStorage));
            alert("Product Added To Cart!")
            // }else{
            //    alert("Product Already In Cart!")
            // }
                        
        })
        div2.append(AddToCart);
        div.append(div1,title,Price,div3,div2)
        MainDoc.append(div);
        // image.src=
    });
    // console.log(obj)
 }
//  Display()
 const myDiv = document.querySelector('#categories');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    myDiv.style.display = 'none';
  } else {
    myDiv.style.display = 'flex';
  }
});

observer.observe(footer);

let cart = document.getElementById("cart");
cart.addEventListener("click",()=>{
   window.location.href="cart.html"
})


