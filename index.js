let img = document.querySelector("#img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

btn1.addEventListener("click", () => {
  img.src = "./Asseds/Imgs/13-1.jpg";
});

btn2.addEventListener("click", () => {
  img.src = "./Asseds/Imgs/13-2.jpg";
});

btn3.addEventListener("click", () => {
  img.src = "./Asseds/Imgs/13-3.jpg";
});

btn4.addEventListener("click", () => {
  img.src = "./Asseds/Imgs/13-4.jpg";
});

let faq = document.querySelector(".text");
let faqBtn = document.querySelector(".faqbtn");
// console.log(faqBtn);
// console.log(faq);

faqBtn.addEventListener("click", () => {
  faq.innerHTML =
  "What is Frequently asked questions (FAQ) <br/> What is Frequently asked questions (FAQ) <br/> What is Frequently asked questions (FAQ) <br/> What is Frequently asked questions (FAQ) <br/> What is Frequently asked questions (FAQ)";
  faqBtn.innerHTML = "&nwarhk;";
});

let modal_bg = document.querySelector(".modal-bg");
let modal = document.querySelector(".modal");
let modal_btn = document.querySelector(".btn");
let btnClose = document.querySelector(".close");

console.log(modal_btn);

modal_btn.onclick = () => {
  modal.style.right = "40%";
  modal_bg.style.right = "0px";


  setTimeout(() => {
    modal_bg.style.opacity = "1";
  }, 200);
};

btnClose.onclick = () => {
  modal.style.right = "-100%";
  modal_bg.style.right = "-100%";
  
  
  setTimeout(() => {
    modal_bg.style.opacity = "0";
  }, 200);
};

// modal_bg.onclick = () => {
//   modal.style.right = "-100%";
//   modal_bg.style.right = "-100%";
  
  
//   setTimeout(() => {
//     modal_bg.style.opacity = "0";
//   }, 3000);
// }

// modal_bg.style.display = 'block'
