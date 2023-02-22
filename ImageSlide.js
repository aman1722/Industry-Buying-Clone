const ImageSlider=document.querySelector("#imageSlider>img");


const ImageArr=["https://static3.industrybuying.com/c0_category/2384/221023image%20(5).png",
"https://static3.industrybuying.com/c0_category/2384/220316Agriculture-3.jpg",
"https://static3.industrybuying.com/c0_category/2384/221130jetfire-Category-bnr.png",
"https://static3.industrybuying.com/c0_category/2384/220316Agriculture-1.jpg"]


let i=0;
function ImageSlide(a,i=0)
{
setInterval(()=>{
ImageSlider.src=ImageArr[i];
i++;
if(i===ImageArr.length)
{
    i=0;
}
},a)
}
ImageSlide(3000)

