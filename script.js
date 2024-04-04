let swiperWrapper = document.querySelector(".swiper-wrapper");
let cart_btn = document.querySelector(".nav-3 i")
let black_bg = document.querySelector(".black-bg")
let cart_content = document.querySelector(".cartContent")

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
});

let products = [
  {
    name: "brown wooden chair",
    price: "$350.00",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "black chair on white snow",
    price: "$250.00",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "white leather sofa chair",
    price: "$450.00",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "brown wooden chair",
    price: "$150.65",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let clutter = "";
products.forEach((elem,index) => {
  clutter += `    <div class="swiper-slide">
  <div class="img">
  <img src="${elem.image}" alt="">
  <div class="fav">
      <i class="ri-heart-line"></i>
  </div>
</div>
  <div class="desc">
      <h5>${elem.name}</h5>
      <p>${elem.price}<span>/price</span></p>
      <button data-index = "${index}">Buy Now</button>
  </div>
</div>
`
 
});

swiperWrapper.innerHTML = clutter

let fav = document.querySelectorAll(".fav i")
let btn =  document.querySelectorAll(".desc button")


let icon1 = 'ri-heart-line'
let icon2 = 'ri-heart-fill'
// Add event listener to each favorite icon
fav.forEach(icon => {
  icon.addEventListener("click", (e)=>{
    fav.forEach((elem)=>{
      
      e.target.classList.replace(icon1,icon2)
      
    })
    alert("added to favorites")
  });
});
let count = 0;
let cartp = document.querySelector(".atc");
let newCart = [];
btn.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    count++;
    alert(" successfully added to cart");
    cartp.style.display = "flex";
    cartp.innerHTML= `<p>${count}</p>`;
    newCart.push(products[e.target.dataset.index]);

    // Move the code to update cart items here
    let cart_items = "";
    newCart.forEach((prods)=>{
      cart_items += `
        <div class="prods">
          <img src="${prods.image}" alt="">
          <div class="para">
            <h5>${prods.name}</h5>
            <p>${prods.price}<span>/price</span></p>
          </div>
        </div>`;
    });
    document.querySelector(".items").innerHTML = cart_items;
  });
});

let flag = false;
cart_btn.addEventListener("click",()=>{
  if(flag == false){
    cart_content.style.right = "0";
    black_bg.style.right = "0";
    flag = true;
  } else if(flag == true){
    cart_content.style.right = "-100%";
    black_bg.style.right = "-102%";
    flag = false;
  }
});
