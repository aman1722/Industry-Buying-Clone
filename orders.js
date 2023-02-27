let redirect = document.getElementById("logo");
redirect.addEventListener("click",()=>{
    window.location.href="dashboard.html"
});
let ProductDiv = document.getElementById("Products");
let usersDiv = document.getElementById("users");
let ordersDiv = document.getElementById("orders");
ProductDiv.addEventListener("click",()=>{
window.location.href="./products.html";
});
usersDiv.addEventListener("click",()=>{
window.location.href="./users.html";
});
ordersDiv.addEventListener("click",()=>{
window.location.href="./orders.html";
});

async function users(){
    try {
        let req= await fetch("https://iris-conscious-potential.glitch.me/orders");
        let data = await req.json();
        console.log(data);
        displayUser(data);
    } catch (error) {
        
    }
   

}
users();

let orderTable = document.getElementById("order_table");
function displayUser(data){
    orderTable.innerHTML="";
    data.forEach((user)=>{
        
        let row= document.createElement("tr");

        let username = document.createElement("td");
        let pro = document.createElement("td");
        let price = document.createElement("td");
        let paymentstate= document.createElement("td");
        let orderno= document.createElement("td");
        let del= document.createElement("td");
        del.classList.add("deleteBtn")
        
        username.textContent=user.username;
        pro.textContent=user.name;
        price.textContent=user.price;
        paymentstate.textContent="False";
        orderno.textContent=user.id;
        del.innerText="Cancel Order"
       
        del.addEventListener("click",()=>{
            // console.log("hey!")
          DeleteProduct(user.id);
        })
    
      
    
        row.append(username,pro,price,paymentstate,orderno,del);
        orderTable.append(row);
    
    })
}
async function DeleteProduct(id){
    try {
      let req = await fetch(`https://iris-conscious-potential.glitch.me/orders/${id}`,{
      method:"DELETE"
     })
    users();
    } catch (error) {
      console.log(error);
    }
    
  
     
  }
  let LogoutBtn = document.getElementById("logout");
LogoutBtn.addEventListener("click",()=>{
    window.location.href="index.html";
})