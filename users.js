let redirect = document.getElementById("logo");
redirect.addEventListener("click",()=>{
    window.location.href="dashboard.html"
});



async function users(){
    try {
        let req= await fetch("https://iris-conscious-potential.glitch.me/users");
        let data = await req.json();
        console.log(data);
        displayUser(data)
    } catch (error) {
        
    }
   

}
users();

let userTable = document.getElementById("user_table");
function displayUser(data){
    userTable.innerHTML="";
    data.forEach((user)=>{
        
        let row= document.createElement("tr");
        let id = document.createElement("td");
        let username = document.createElement("td");
        let fname = document.createElement("td");
        let lname = document.createElement("td");
        let email= document.createElement("td");
        let Pass= document.createElement("td");
        let del= document.createElement("td");
        del.classList.add("deleteBtn")
        
        id.textContent=user.id;
        username.textContent=user.username;
        fname.textContent=user.firstname;
        lname.textContent=user.lastname;
        email.textContent=user.email;
        Pass.textContent=user.password;
        del.innerText="delete user"
       
        del.addEventListener("click",()=>{
            // console.log("hey!")
          DeleteProduct(user.id);
        })
    
      
    
        row.append(id,username,fname,lname,email,Pass,del);
        userTable.append(row);
    
    })
}

async function DeleteProduct(id){
    try {
      let req = await fetch(`https://iris-conscious-potential.glitch.me/users/${id}`,{
      method:"DELETE"
     })
    users();
    } catch (error) {
      console.log(error);
    }
    
  
     
  }


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
let LogoutBtn = document.getElementById("logout");
LogoutBtn.addEventListener("click",()=>{
    window.location.href="index.html";
})