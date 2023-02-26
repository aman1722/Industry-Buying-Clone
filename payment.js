let AddressData= JSON.parse( localStorage.getItem("addressData")) ||[];



let data =  JSON.parse( localStorage.getItem("Cart")) ||[];


let tbody = document.querySelector("tbody");
function display(data){
  tbody.innerHTML="";
  for(let i=0 ; i<data.length ; ++i){
      let tr= document.createElement("tr");
      let td1 = document.createElement("td");
      let divp = document.createElement("div");
      let p = document.createElement("p");
      p.innerText=data[i].name;
      divp.append(p);
      let divc = document.createElement("div");
      divc.setAttribute("id" , "content");
      let divc1 = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src",data[i].image);
      divc1.append(img);
      let divc2 = document.createElement("div");
      let p1 =  document.createElement("p");
      p1.innerText="Brand: "
      let span1 =  document.createElement("span");
      span1.innerText= data[i].title;
      p1.append(span1);
      let p2 =  document.createElement("p");
      p2.innerText="Frequency: "
      let span2 =  document.createElement("span");
      span2.innerText= "50HZ";
      p2.append(span2);
      let p3 =  document.createElement("p");
      p3.innerText="Volatge: "
      let span3 =  document.createElement("span");
      span3.innerText= `220 volts`;
      p3.append(span3);
      let p4 =  document.createElement("p");
      p4.innerText="Model No: "
      let span4 =  document.createElement("span");
      span4.innerText= `PW 22${i}`;
      
      
      
      p4.append(span4);
      divc2.append(p1,p2,p3,p4);
      divc.append(divc1, divc2);

      td1.append(divp, divc);


      let td2 = document.createElement("td");
      let span=document.createElement("span");
      span.innerText=data[i].quantity;



      td2.append(span);

      let td3 = document.createElement("td");
      td3.innerText=`Rs ${data[i].price}`;
      let p5 = document.createElement("p");
      p5.innerText=`Delivery in ${4} days`;
      
      
      td3.append(p5);

      tr.append(td1 , td2 , td3 );
      tbody.append(tr);

  }
}
display(data);
if(AddressData.length!==0){
  dispalyAddress(AddressData);
  document.getElementById("reviewOrder").style.display="block";
  document.getElementById("paymentOptiions").style.display="block";
  document.getElementById("placeorder").style.display="block";
  document.getElementById("placeorder").style.display="flex";
  document.getElementById("placeorder").style.justifyContent="end";
  document.getElementById("placeorder").style.alignItems="center";
}

 function dispalyAddress(data){
    document.querySelector("#totalAdd").innerHTML="";
    for(let i=0 ; i<data.length ; ++i){
      let div1 = document.createElement("span");
      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "Address");
      input.setAttribute("checked","checked");
      div1.append(input)
      let div =document.createElement("div");
      let p=document.createElement("p");
      p.innerText=AddressData[i].name;
      let p2=document.createElement("p");
      p2.innerText=data[i].house+"\n"+data[i].area+"\n"+data[i].city+", "+data[i].state+"- "+data[i].pincode;
      let p3=document.createElement("p");
      p3.innerText="Mobile Number: +91"+data[i].mobile;
      div.append(p,p2,p3);
      document.getElementById("totalAdd").append(div1,div);
    }
    document.getElementById("showAdd").style.display="block"
}



let addAddBtn=document.getElementById("addAddress");
addAddBtn.addEventListener("click" , function(){
  document.getElementById("address").style.display="block";
});


let form=document.querySelector("form");
form.addEventListener("submit", function(el){
  el.preventDefault();
  let obj={
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    house: document.getElementById("house").value,
    area: document.getElementById("area").value,
    city: document.getElementById("city").value,
    pincode: document.getElementById("pincode").value,
    state:document.getElementById("state").value
  };
  AddressData.push(obj);
  // dispalyAddress(AddressData);
  localStorage.setItem("addressData", JSON.stringify(AddressData));
  document.location.reload();
  // document.getElementById("reviewOrder").style.display="block";
  // document.getElementById("placeorder").style.display="block";
  // document.getElementById("placeorder").style.display="flex";
  // document.getElementById("placeorder").style.justifyContent="end";
  // document.getElementById("placeorder").style.alignItems="center";
});



async function pushData(data){
  try {
    let res = await fetch("https://iris-conscious-potential.glitch.me/orders", {
      method:"POST",
      headers:{
          "Content-Type":"Application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(res);  
  } 
  catch (error) {
    console.log(error);
  }
}
document.getElementById("btnPlace").addEventListener("click",function(){
  document.querySelector(".otpPop").classList.add("showOtp");
});
let value=0;
document.getElementById("sub").addEventListener("click", function(){
  value= document.getElementById("otp").value;
  if(value==="1234"){
    document.querySelector(".otpPop").classList.remove("showOtp");
    document.getElementById("otp").value="";
    alert("purchase Successful");
    setTimeout(()=>{
      window.location.href="index.html";
    },3000)
    let obj =JSON.parse( localStorage.getItem("loggedInUser"));
    let user = obj.username;
    for(let i=0 ; i<data.length ; ++i){
      data[i]["username"]= user;
      let finalobj = data[i];
      pushData(finalobj);
    }
    setTimeout(function(){
      localStorage.clear();
    },9000);
  }
  else{
    document.getElementById("otp").value="";
    alert("Wrong OTP");
  }
})


let prices =JSON.parse( localStorage.getItem("prices"));

document.getElementById("subTotal").innerText= prices.subTotal;
document.getElementById("shippingCarges").innerText= prices.shippingCharges;
document.getElementById("total").innerText= prices.totalPrice;
document.getElementById("aamount").innerText= prices.totalPrice;