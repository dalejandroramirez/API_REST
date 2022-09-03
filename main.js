console.log("hello world");

const URL = "https://api.thecatapi.com/v1/images/search";
const h1 = document.querySelector('h1');
const btnCat = document.querySelector(".btn-cat")

btnCat.addEventListener('click',renderImg)

fetch(URL)
.then(res => res.json())
.then(data => {
  const imgCat = document.querySelector('img');
  imgCat.setAttribute("width",'100%');
  imgCat.src = data[0].url; 
}); 

async function renderImg() {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      const imgCat = document.querySelector('img');
      imgCat.src = data[0].url; 
      imgCat.setAttribute("width",'100%');
    });   
}





