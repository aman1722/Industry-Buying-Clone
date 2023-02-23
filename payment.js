let AddressData= JSON.parse( localStorage.getItem("addressData")) ||[];


let data = [
    {
      "name": "Compressor",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "price": 10800,
      "rating": "4.5",
      "inStock": true,
      "id": "2",
      "image": "https://static1.industrybuying.com/products/pneumatics/air-compressors/air-tank-compressor/PNE.AIR.24347772_1668115052521.webp"
    },
    {
      "name": "Pressure POWER",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty",
      "price": 40001,
      "rating": "3.5",
      "inStock": true,
      "id": "3",
      "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp"
    },
    {
      "name": "Gayle Hoeger MD",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "Fulcrum 2 Ton 3Mtr Chain Pulley Block 2T3M",
      "price": 3008,
      "rating": "3",
      "inStock": true,
      "id": "4",
      "image": "https://static1.industrybuying.com/products/material-handling-and-packaging/chain-pulley-blocks-and-accessories/chain-pulley-block/MAT.CHA.91518751_1667990374012.webp"
    },
    {
      "name": "Tina Vandervort",
      "title": "By AgriPro",
      "category": "Best Sellers",
      "Description": "Voltas Floor Mounted Water Dispenser Minimagic Pure-F",
      "price": 9002,
      "rating": "4",
      "inStock": true,
      "id": "5",
      "image": "https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/water-dispensers/FUR.WAT.14570895_1667958140407.webp"
    },
    {
      "name": "Core/Solid",
      "title": "By AgriPro",
      "category": "Best Sellers",
      "Description": "iBELL M200-105 IGBT Inverter 2 in 1 Flux Core/Solid Wire MAG Welding Machine with 1 Year Warranty",
      "price": 12002,
      "rating": "4.3",
      "inStock": true,
      "id": "6",
      "image": "https://static1.industrybuying.com/products/welding/welding-machine/arc-welding-machine/WEL.ARC.65308964_1668172023800.webp"
    },
    {
      "name": "Pressure POWER",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty",
      "price": 40001,
      "rating": "3.5",
      "inStock": true,
      "id": "80",
      "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp"
    },
    {
      "name": "Pressure POWER",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty",
      "price": 40001,
      "rating": "3.5",
      "inStock": true,
      "id": "52",
      "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp"
    },
    {
      "name": "Pressure POWER",
      "title": "By AgriPro",
      "category": "IB POWER BRAND",
      "Description": "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty",
      "price": 40001,
      "rating": "3.5",
      "inStock": true,
      "id": "89",
      "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp"
    }
];
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
  document.getElementById("placeorder").style.display="block";
  document.getElementById("placeorder").style.display="flex";
  document.getElementById("placeorder").style.justifyContent="end";
  document.getElementById("placeorder").style.alignItems="center";
}

 function dispalyAddress(data){
  document.getElementById("add").style.display="none";
    for(let i=0 ; i<data.length ; ++i){
      let div =document.createElement("div");
      let p=document.createElement("p");
      p.innerText=AddressData[i].name;
      let p2=document.createElement("p");
      p2.innerText=data[i].house+"\n"+data[i].area+"\n"+data[i].city+", "+data[i].state+"- "+data[i].pincode;
      let p3=document.createElement("p");
      p3.innerText="Mobile Number: +91"+data[i].mobile;
      div.append(p,p2,p3);
      document.getElementById("showAdd").append(div);
    }
    document.getElementById("showAdd").style.display="block"
}



let addAddBtn=document.getElementById("addAddress");
addAddBtn.addEventListener("click" , function(){
  document.getElementById("add").style.display="none";
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
  document.getElementById("add").style.display="none";
  AddressData.push(obj);
  dispalyAddress(AddressData);
  localStorage.setItem("addressData", JSON.stringify(AddressData));
  document.getElementById("reviewOrder").style.display="block";
  document.getElementById("placeorder").style.display="block";
  document.getElementById("placeorder").style.display="flex";
  document.getElementById("placeorder").style.justifyContent="end";
  document.getElementById("placeorder").style.alignItems="center";
});
