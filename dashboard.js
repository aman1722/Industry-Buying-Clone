let ProductDiv = document.getElementById("Products");
let usersDiv = document.getElementById("users");
let ordersDiv = document.getElementById("orders");

let productCount = document.getElementById("totalPro");
let userCount = document.getElementById("totalUser");
let orderCount = document.getElementById("totalOrders");


ProductDiv.addEventListener("click",()=>{
    window.location.href="products.html";
});
usersDiv.addEventListener("click",()=>{
    window.location.href="users.html";
});
ordersDiv.addEventListener("click",()=>{
    window.location.href="orders.html";
});


function fetchProducts(){
    fetch("https://frantic-gaiters-pig.cyclic.app/products")
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{
     console.log(data);
     productCount.textContent = data.length;
    })
}

function fetchUsers(){
    fetch("https://frantic-gaiters-pig.cyclic.app/users")
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{
     console.log(data);
     userCount.textContent = data.length;
    })
}

function fetchOrders(){
    fetch("https://frantic-gaiters-pig.cyclic.app/orders")
    .then((res)=>{
     return res.json();
    })
    .then((data)=>{
     console.log(data);
     orderCount.textContent = data.length;
    })
}


fetchProducts();
fetchUsers();
fetchOrders();















