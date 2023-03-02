let data = JSON.parse( localStorage.getItem("Cart"));
if(data==null){
  data = [];
}
for(let i=0 ; i<data.length ; ++i){
  data[i]["quantity"] = 1;
}
let amount= 0;
let datacheck=data;
localStorage.setItem("Cart" , JSON.stringify(data));
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
        let bt1 = document.createElement("button");
        bt1.setAttribute("class", "btn");
        bt1.innerText="-";
        bt1.addEventListener("click" , function(){
          if(data[i].quantity===1){
            let data1 = data.filter(function(el){
              if(data[i].id===el.id){
                return false;
              }
              else{
                return true;
              }
            });
            if(document.getElementById("coupon").value!==""){
              document.getElementById("coupon").value="";
              document.getElementById("pincode").value="";
              document.getElementById("pin").value="";
              document.getElementById("sippingCharges").innerText=`FREE`;
              alert("Coupon and pincode removed");
            }
            localStorage.setItem("Cart" , JSON.stringify(data1));
            datacheck=data1;
            display(data1);
          }
          else{
            --data[i].quantity;
            datacheck=data
            display(data);
            if(document.getElementById("coupon").value!==""){
              document.getElementById("coupon").value="";
            alert("Coupon removed");
            }
          }
        })
        let span=document.createElement("span");
        span.innerText=data[i].quantity;
        let bt2 = document.createElement("button");
        bt2.setAttribute("class", "btn");
        bt2.innerText="+";
        bt2.addEventListener("click" , function(){
          ++data[i].quantity;
          localStorage.setItem("Cart" , JSON.stringify(data));
          datacheck=data
          display(data);
          if(document.getElementById("coupon").value!==""){
              document.getElementById("coupon").value="";
              document.getElementById("pincode").value="";
              document.getElementById("pin").value="";
              document.getElementById("sippingCharges").innerText=`FREE`;
              alert("Coupon and pincode removed");
          }
        })


        td2.append(bt1 , span , bt2);

        let td3 = document.createElement("td");
        td3.innerText=`Rs ${data[i].price}`;
        let p5 = document.createElement("p");
        p5.innerText=`Delivery in ${4} days`;
        td3.append(p5);

        tr.append(td1 , td2 , td3 );
        tbody.append(tr);

    }
    document.getElementById("count").innerText=data.length;
    total(data);
    
}
display(data);

function total(data){
  let total=0;
  for(let i=0 ; i<data.length ; ++i){
    total += Number(data[i].price)*Number(data[i].quantity);
    amount=total;
  }
  document.getElementById("total").innerText =`Rs ${total}`;
  document.getElementById("subTotal").innerText =`Rs ${total}`;
  document.getElementById("aamount").innerText=`Rs ${total}`;
}

document.getElementById("btnCoupon").addEventListener("click", function(){
  let total1=amount;
  if(document.getElementById("coupon").value==="masai" && total1!==0){
    total1 -= Math.ceil(total1*.4);
    document.getElementById("total").innerText =`Rs ${total1}`;
    document.getElementById("subTotal").innerText =`Rs ${total1}`;
    document.getElementById("aamount").innerText=`Rs ${total1}`;
    alert("Coupon applied");
  }else{
    alert("Invalid Coupon or total");
  }
});



document.getElementById("check").addEventListener("click", function(){
  if(document.getElementById("pincode").value.length===6){
      if(document.getElementById("pincode").value!=="123456"){
        document.getElementById("sippingCharges").innerText=`Rs 1200`;
        let total1=0;
        let data1 =JSON.parse( localStorage.getItem("Cart"));
        for(let i=0 ; i<data1.length ; ++i){
          total1 += Number(data1[i].price)*Number(data1[i].quantity);
        }
        if(total1>0){
          document.getElementById("total").innerText =`Rs ${total1+1200}`;
          document.getElementById("subTotal").innerText =`Rs ${total1}`;
          amount=total1+1200;

        }else{
          alert("Invalid Coupon or total");
        }
      }else if(document.getElementById("pincode").value=="123456"){
        document.getElementById("sippingCharges").innerText="FREE"
        let total1=0;
        let data1 = JSON.parse( localStorage.getItem("Cart"));
        for(let i=0 ; i<data1.length ; ++i){
          total1 += Number(data1[i].price)*Number(data1[i].quantity);
        }
        if(total1>0){
          document.getElementById("total").innerText =`Rs ${total1}`;
          document.getElementById("subTotal").innerText =`Rs ${total1}`;
          amount = total1;
        }else{
          alert("Invalid Coupon or total");
        }
      } 
  }else{
    alert("Invalid Pincode");
  }
  
});


document.getElementById("form").addEventListener("submit", function(el){
  el.preventDefault();
  if(document.getElementById("pin").value.length===6){
    if(document.getElementById("pin").value!=="123456"){
      document.getElementById("sippingCharges").innerText=`Rs 1200`;
      let total=0;
      for(let i=0 ; i<data.length ; ++i){
        total += Number(data[i].price)*Number(data[i].quantity);
      }
      if(total>0){
        document.getElementById("total").innerText =`Rs ${total+1200}`;
        document.getElementById("subTotal").innerText =`Rs ${total}`;
        document.getElementById("aamount").innerText=`Rs ${total+1200}`;
        document.getElementById("pin").value="";
        document.getElementById("charges").style.display="block"
        amount=total+1200;
      }else{
        alert("Invalid Coupon or total");
      }
    }else{
      document.getElementById("sippingCharges").innerText="FREE"
      let total=0;
      for(let i=0 ; i<data.length ; ++i){
        total += Number(data[i].price)*Number(data[i].quantity);
      }
      if(total>0){
          document.getElementById("total").innerText =`Rs ${total}`;
          document.getElementById("subTotal").innerText =`Rs ${total}`;
          document.getElementById("aamount").innerText=`Rs ${total}`;
          document.getElementById("pin").value="";
          document.getElementById("charges").style.display="none"
        }else{
          alert("Invalid Coupon or total");
        } 
      } 
  }else{
    alert("Invalid Pincode");
  }
})
let userData=JSON.parse(localStorage.getItem("loggedINUser"));
let btnPlace= document.getElementById("placeOrder");
btnPlace.addEventListener("click", function(){
if(userData){
  if(datacheck.length>0){
    let prices ={
      subTotal:document.getElementById("subTotal").innerText,
      shippingCharges:document.getElementById("sippingCharges").innerText,
      totalPrice:document.getElementById("total").innerText,
    }
    localStorage.setItem("prices", JSON.stringify(prices));
    window.location.href="payment.html";
    
  }
  else{
    alert("Cart can't be empty!");
  }
}else{
  alert("please login first!");
  setTimeout(()=>{
    window.location.href="sign-In.html"
  },2000)
}
  
});


let btncontinue= document.getElementById("continueShopping");
btncontinue.addEventListener("click", function(){
  window.location.href="index.html";
});




