const body = document.body;
console.log(body);

const id = setInterval(()=>{
const red = Math.floor(Math.random() * 126);
const green = Math.floor(Math.random() * 126);
const blue = Math.floor(Math.random() * 126);
const rgb = `rgb(${red}, ${green} , ${blue})`

body.style.backgroundColor = rgb;
}, 1000)

const button = document.querySelector("button");


button.addEventListener('click' , function(){
    clearInterval(id);
    button.textContent = 'Background Color: ' + body.style.backgroundColor;
});



