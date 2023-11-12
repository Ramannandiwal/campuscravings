let divbutton = document.querySelector(".cartbtn")
let deletebutton =document.querySelector(".deleteorder");

 divbutton.addEventListener("click",()=>{
   let divboxbtn=document.querySelector(".cart");
    if(divboxbtn.classList.contains("visible")){
      divboxbtn.classList.remove("visible");
    }
    else{
      divboxbtn.classList.add("visible")
    }
 })

let buybtn=document.querySelectorAll(".buynow");
for(let i =0;i<24;i++){
  buybtn[i].addEventListener("click",()=>{
  let strname=buybtn[i].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  let strprice =buybtn[i].previousElementSibling.previousElementSibling.innerHTML;

  let divbox=document.querySelector(".cartcontainer");
  let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerHTML = strname +":" + strprice;
ul.appendChild(li);
divbox.appendChild(ul);
strname="";
strprice="";

})
}

let divbox=document.querySelector(".cartcontainer");



// Get the "Place order" button and the cartcontainer div
let placeOrderButton = document.querySelector('.placeorder');

// let cartContainer = document.querySelector('.cartcontainer');

// Add an event listener to the button
placeOrderButton.addEventListener('click',  async function () {
  let json =""
  for(let i =0;i<divbox.children.length;i++){

      json+=divbox.children[i].innerText;
  };
  if(json!=""){
    await fetch('http://localhost:3000/place', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain', // Set the content type to text/plain for a string
  },
  body:json,
})
  .then(response => response.json()) // assuming the response is JSON, adjust as needed
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  alert("Order placed Succesfully >>>>>>enjoy food ..>>>>>>>");
  let divboxbtn=document.querySelector(".cart");
  divboxbtn.classList.add("visible");

  }
divbox.innerHTML=" ";




});


deletebutton.addEventListener("click",()=>{
    console.log(divbox.lastChild.remove())
})