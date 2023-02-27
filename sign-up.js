const form = document.querySelector("form");
const email = document.getElementById("email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");

form.addEventListener("submit", async function(e) {
    e.preventDefault();
    try {
        let obj = {
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
            email: email.value,
            firstname: fname.value,
            lastname: lname.value,
            password: password.value,
            username: fname.value
        }
        let flag = true;
        let re = await fetch("https://iris-conscious-potential.glitch.me/users");
        let rs = await re.json();
        for(let i=0 ; i<rs.length ; ++i){
            if(rs[i].email===obj.email){
                flag=false;
            }
        }
        if(flag===true){
            let req = await fetch("https://iris-conscious-potential.glitch.me/users" , {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(obj)
        });
        email.value="";
        fname.value="";
        lname.value="";
        password.value="";
        fname.value="";
        alert("Account Created");
        window.location.href="sign-In.html"
        }else{
            alert("User already registered");
            window.location.href="sign-In.html"
        }
    } 
    catch (error) {
        console.log(error);
    }
});
