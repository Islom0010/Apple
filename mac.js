let link = document.querySelector("a")
let white = document.querySelector(".white")
let grey = document.querySelector(".grey")
let changeImg = document.querySelector(".gr")
let ss = document.querySelector(".img")
let block_1 = document.querySelector(".block_1")
let block_2 = document.querySelector(".block_2")
let block_3 = document.querySelector(".block_3")
let block_4 = document.querySelector(".block_4")
let price = document.querySelector(".bottom")



grey.onclick = () => {
   changeImg.src = "./asseds/imgs/mac-1.jpg"
   grey.style.background = 'rgba(0, 113, 227, 1)';
   white.style.background = '#CFE7FF'
   grey.style.color = '#fff';
   white.style.color = '#000';


}
white.onclick = () => {
    changeImg.src = "./asseds/imgs/mac-2.jpg"
    white.style.background = 'rgba(0, 113, 227, 1)';
    grey.style.background = '#CFE7FF';
    white.style.color = '#fff';
    grey.style.color = '#000';
}

block_1.onclick = () => {
    price.textContent = '$2,199'
    block_1.style.border = '2px solid blue'
    block_2.style.border = ' 2px solid #CFE7FF'
    block_3.style.border = ' 2px solid #CFE7FF'
    block_4.style.border = ' 2px solid #CFE7FF'
}
block_2.onclick = () => {
    price.textContent = '$2,399'
    block_1.style.border = ' 2px solid #CFE7FF'
    block_2.style.border = '2px solid blue'
    block_3.style.border = ' 2px solid #CFE7FF'
    block_4.style.border = ' 2px solid #CFE7FF'


}
block_3.onclick = () => {
    price.textContent = '$2,599'
    block_1.style.border = ' 2px solid #CFE7FF'
    block_2.style.border = ' 2px solid #CFE7FF'
    block_3.style.border = '2px solid blue'
    block_4.style.border = ' 2px solid #CFE7FF'
}
block_4.onclick = () => {
    price.textContent = '$2,799'
    block_1.style.border = ' 2px solid #CFE7FF'
    block_2.style.border = ' 2px solid #CFE7FF'
    block_3.style.border = ' 2px solid #CFE7FF'
    block_4.style.border = '2px solid blue'
}

