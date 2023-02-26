


let FetchedData =[];

// function fetchAndRenderData(){
//   fetch("https://iris-conscious-potential.glitch.me/products")
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data)=>{
//     FetchedData=data;
//    console.log(data);

//    displayAsCards(data)
//   })
// }
async function fetchData(page=1){
  try {
   const user_list = await fetch(`https://iris-conscious-potential.glitch.me/products?_limit=9&_page=${page}`);
   const totalItem = user_list.headers.get('X-Total-Count');
   const totalPages = Math.ceil(totalItem/10);
   const data = await user_list.json();
   displayAsCards(data)
   paginationBtn(totalPages);
  } catch (error) {
   console.log(error);
  }
 }
 fetchData();

function displayAsCards(data) {
    let container = document.getElementById("display");
    container.innerHTML="";
    data.map(element => {
      let card = document.createElement("div");
      card.classList.add("card-element")

        let cardElement = `
        <div>
        <div class="card-img-div">
        <img class="card-img" src="${element.image}" >
        </div>
        <div class="card-des-div">
        <h3><span id="head">Name:-</span> ${element.name}</h3>
        <p><span id="head1">Description:-</span> ${element.Description}</p>
        <p><span id="head1">Category:-</span> ${element.category}</p>
        <p><span id="head1">Price:-</span> Rs. ${element.price}</p>
        <p><span id="head1">ID:-</span> ${element.id}</p>
        </div>
        </div>
        `

      


        card.innerHTML=cardElement;

        container.append(card);
    })
  
};




let addProduct = document.getElementById("addProduct");

addProduct.addEventListener("submit",(e)=>{
     e.preventDefault();
  
   AddProduct();
   
   addProduct.reset();
   
});

let deleteProduct = document.getElementById("deleteProduct");

deleteProduct.addEventListener("submit",(e)=>{
   e.preventDefault();
   DeleteProduct();

   deleteProduct.reset();
})

let updatePrice = document.getElementById("updatePrice");

updatePrice.addEventListener("submit",(e)=>{
     e.preventDefault();
     let productId = document.getElementById("productID").value;
     let updatedPrice = document.getElementById("updatedPrice").value;

     fetch(`https://iris-conscious-potential.glitch.me/products/${productId}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "price": updatedPrice
      })
    
     })


});

let updateFullDetails = document.getElementById("updateProduct");
updateFullDetails.addEventListener("submit",(e)=>{
     e.preventDefault();
     let proid = document.getElementById("ProID").value;
     let Newname = document.getElementById("newname").value;
     let Newtitle = document.getElementById("newtitle").value;
     let Newcategory = document.getElementById("newcategory").value;
     let Newdesc = document.getElementById("newdesc").value;
     let NEWIMG = document.getElementById("imgUrl").value;
     let Newprice = document.getElementById("Newprice").value;
  

     fetch(`https://iris-conscious-potential.glitch.me/products/${proid}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "name": Newname,
        "title": Newtitle,
        "category": Newcategory,
        "Description": Newdesc,
        "price": Newprice,
        "rating": "4",
        "inStock": true,
        "image": NEWIMG
      })
     })
})


async function AddProduct(){

  try {
    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let catagory = document.getElementById("category").value;
    let Desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let ImgUrl = document.getElementById("imgUrl").value;
    let req = await fetch("https://iris-conscious-potential.glitch.me/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "name": name,
        "title": title,
        "category": catagory,
        "Description": Desc,
        "price": price,
        "rating": "4",
        "inStock": true,
        "image": ImgUrl
      })
     
    })
    displayAsCards(FetchedData);
  } catch (error) {
    console.log(error);
  }
}

async function DeleteProduct(){
  let productId = document.getElementById("ID").value;
  try {
    let req = await fetch(`https://iris-conscious-potential.glitch.me/products/${productId}`,{
    method:"DELETE"
   })
   displayAsCards(FetchedData);
  } catch (error) {
    console.log(error);
  }
  

   
}

let buttonSection = document.getElementById("buttonSection");


function paginationBtn(page){
  let btn_arr=[];
  for(let i=1;i<=page;i++){
    btn_arr.push(`
    <button class="pagination-button" data-page-number=${i}>${i}</button>
    `)
  }
  buttonSection.innerHTML=btn_arr.join("");
 
  const all_btn = document.querySelectorAll("#buttonSection button");
  console.log(all_btn);


  for(let btn of all_btn){
    btn.addEventListener("click",(e)=>{
      console.log(e.target.dataset.pageNumber);
      fetchData(e.target.dataset.pageNumber);
    })
  }
}




















// fetchAndRenderData();
