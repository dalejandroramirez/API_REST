

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3&    <section>
<h2>api keys</h2>
<img src="./img/apiKeys.png" alt="" width="100%">
</section>";
const h1 = document.querySelector('h1');
const btnCat = document.querySelector(".btn-cat")

btnCat.addEventListener('click',renderImg);

 
async function renderImg() {
  const res = await fetch(API_URL);
  const data = await res.json();
  // const imgCat = document.querySelector('img');
   console.log(data);
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  // imgCat.src = data[0].url; 
  // imgCat.setAttribute("width",'100%');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;

};   

renderImg();





