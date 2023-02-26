let email = document.getElementById("email");
let password = document.getElementById("password");

let form = document.querySelector("form");
form.addEventListener("submit", async function(el){
    el.preventDefault();
    try {
        if(email.value==="admin@industech.com" && password.value==="admin"){
            window.location.href="dashboard.html"
        }else{
            let req = await fetch("https://iris-conscious-potential.glitch.me/users");
            let res = await req.json();
            let user={};
            let flag =false;
            for(let i=0 ; i<res.length ; ++i){
                if(email.value===res[i].email && password.value===res[i].password){
                  user = res[i];
                  flag = true;  
                }
            }
            if(flag){
                localStorage.setItem("loggedINUser", JSON.stringify(user));
                alert("login successful");
                window.location.href="index.html";
            }else{
                alert("user not found");
            }
        }
    

    } 
    catch (error) {
        console.log(error);    
    }
})