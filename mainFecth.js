

let cart = document.getElementById("cart");
cart.addEventListener("click",()=>{
    window.location.href="cart.html"
})


let FetchedData =[];
async function fetchData(page=1){
    try {
     const user_list = await fetch(`https://iris-conscious-potential.glitch.me/products?_limit=12&_page=${page}`);
     const totalItem = user_list.headers.get('X-Total-Count');
     const totalPages = Math.ceil(totalItem/10);
     const data = await user_list.json();
     FetchedData=data;
     console.log(data);
     console.log(FetchedData);
     displayAsCards(data)
     paginationBtn(totalPages);

     let lowtohigh = document.getElementById("lowToHigh");
     let hightolow = document.getElementById("HighToLow");
     let  ratinglow = document.getElementById("LowToHigh");
     let ratinghigh = document.getElementById("highToLow");
     let power = document.getElementById("brand1");
     let best = document.getElementById("brand2");
     let newA = document.getElementById("brand3");
     let office = document.getElementById("brand4");
     let It = document.getElementById("brand5");
     lowtohigh.addEventListener("click",()=>{
        console.log("hiiiii");
        function Compare(a,b){
            return a.price-b.price;
        }
        let data1=FetchedData.sort(Compare)
           
        displayAsCards(data1);
     });
     hightolow.addEventListener("click",()=>{
        console.log("hiiiii");
        function Compare(a,b){
            return b.price-a.price;
        }
        let data1=FetchedData.sort(Compare)
           
        displayAsCards(data1);
     });
     ratinglow.addEventListener("click",()=>{
        console.log("hiiiii");
        function Compare(a,b){
            return a.rating-b.rating;
        }
        let data1=FetchedData.sort(Compare)
           
        displayAsCards(data1);
     });
     ratinghigh.addEventListener("click",()=>{
        console.log("hiiiii");
        function Compare(a,b){
            return b.rating-a.rating;
        }
        let data1=FetchedData.sort(Compare)
           
        displayAsCards(data1);
     });
     power.addEventListener("click",()=>{
        let data1=  FetchedData.filter((item)=>
         item.category==="IB POWER BRAND"
       )
       displayAsCards(data1);
     })
     best.addEventListener("click",()=>{
        let data1=  FetchedData.filter((item)=>
         item.category==="Best Sellers"
       )
       displayAsCards(data1);
     })
     newA.addEventListener("click",()=>{
        let data1=  FetchedData.filter((item)=>
         item.category==="NEW ARRIVALS"
       )
       displayAsCards(data1);
     })
     office.addEventListener("click",()=>{
        let data1=  FetchedData.filter((item)=>
         item.category==="Office Supplies"
       )
       displayAsCards(data1);
     })
     It.addEventListener("click",()=>{
        let data1=  FetchedData.filter((item)=>
         item.category==="IT & Electronics"
       )
       displayAsCards(data1);
     })
    } catch (error) {
     console.log(error);
    }
}
fetchData();


function displayAsCards(data) {
    let container = document.getElementById("fetchedCard");
    container.innerHTML="";
    data.map(element => {
      let card = document.createElement("div");
      card.classList.add("card-element")

       let cardElement = document.createElement("div");
       let ImgDiv = document.createElement("div");
       ImgDiv.classList.add("card-img-div");

       let image = document.createElement("img");
       image.setAttribute("src",element.image);
       image.classList.add("card-img");

       ImgDiv.append(image);

       let cardDesc = document.createElement("div");
       cardDesc.classList.add("card-des-div");

       let name = document.createElement("h3");
       name.innerText = element.name;

       let des = document.createElement("p");
       des.innerText = element.Description;
       let category = document.createElement("p");
       category.innerText = element.category;
       let price = document.createElement("p");
       price.innerHTML =`Rs. ${element.price}`
       let rating = document.createElement("p");
       rating.innerHTML=`<span id="head1">Rating:-</span> ${element.rating}`
        
       let Addtocart = document.createElement("div");
       Addtocart.innerText="Add To Cart"
       Addtocart.setAttribute("id","addToCartBtn");


       Addtocart.addEventListener("click",()=>{
        
        let CartProducts = JSON.parse(localStorage.getItem("Cart"))||[];
        let isalreadyadd = false;
             for(let i=0;i<CartProducts.length;i++){
              if(CartProducts[i].id === element.id){
                isalreadyadd=true;
                break;
              }
             }
             if(isalreadyadd===true){
              alert("Product Already in Cart!");
            }else{
                CartProducts.push(element);
            localStorage.setItem("Cart",JSON.stringify(CartProducts));
          alert("Product Added To Cart!");


            }
    
       })

       cardDesc.append(name,des,category,price,rating,Addtocart)

       cardElement.append(ImgDiv,cardDesc)
        card.append(cardElement);

        container.append(card);
      
    })
  
};
let buttonSection = document.getElementById("pagination-wrapper");
function paginationBtn(page){
    let btn_arr=[];
    for(let i=1;i<=page;i++){
      btn_arr.push(`
      <button class="pagination-button" data-page-number=${i}>${i}</button>
      `)
    }
    buttonSection.innerHTML=btn_arr.join("");
   
    const all_btn = document.querySelectorAll("#pagination-wrapper button");
    console.log(all_btn);
  
  
    for(let btn of all_btn){
      btn.addEventListener("click",(e)=>{
        console.log(e.target.dataset.pageNumber);
        fetchData(e.target.dataset.pageNumber);
      })
    }
  }

  let userData = JSON.parse(localStorage.getItem("loggedINUser"));
  let SignIN = document.getElementById("signin");
  if(userData){
      SignIN.innerText=userData.username;
  }else{
      SignIN.innerText="Sign-In"
  }