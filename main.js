
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_HZZPd8O6HZu4BT0ypIXP5vxe6tanPja6OLN9RbeQoM5a6XBXYnSewUhXUgoeiY7h";
const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites?api_key=live_HZZPd8O6HZu4BT0ypIXP5vxe6tanPja6OLN9RbeQoM5a6XBXYnSewUhXUgoeiY7h";
const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_HZZPd8O6HZu4BT0ypIXP5vxe6tanPja6OLN9RbeQoM5a6XBXYnSewUhXUgoeiY7h`;



const h1 = document.querySelector('h1');
const btnCat = document.querySelector(".btn-cat-primary");
// const btnCatAdd = document.querySelector(".btn-cat-add");

const spanError = document.getElementById('error');

btnCat.addEventListener('click',renderImg);

// btnCatAdd.addEventListener('click',function() {saveFavouriteCat()} );

 
async function renderImg() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  // const imgCat = document.querySelector('img');
  if (res.status !== 200) {

    spanError.innerHTML = "Hubo un error" + res.status + data.messenge;
    
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    
    btn1.onclick = () => saveFavouriteCat(data[0].id);
    btn2.onclick = () => saveFavouriteCat(data[1].id);


    // imgCat.src = data[0].url; 
    // imgCat.setAttribute("width",'100%');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }

};   

async function loadFavouriteCats() {
  const res = await fetch(API_URL_FAVOURITES);
  const data = await res.json();

  
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.messenge;
  } else {
    console.log("load");
    console.log(data);
    
    const section = document.getElementById("favouriteCats");
    section.innerHTML = "";
    const h2 = document.createElement("h2");
    const h2Text = document.createTextNode("Favourite Cats")
    h2.appendChild(h2Text);
    section.appendChild(h2);
    
    data.forEach(cat => {
      const article = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const btnText = document.createTextNode("delete favourite");

      img.src = cat.image.url
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteCat(cat.id); 
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
      
    });
  }
};

async function saveFavouriteCat(id) {

  const res = await fetch(API_URL_FAVOURITES, {
    method: 'POST',
    headers: { 
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
      image_id: id
    }),
  });

  const data = await res.json();

  console.log("save");
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.messenge;

  }else{
    console.log("cat Save of favourite");
    loadFavouriteCats();
  
  
  } 

};

async function deleteFavouriteCat(id){
  const res = await fetch(API_URL_FAVOURITES_DELETE(id), {
    method: 'DELETE',
  });

  const data = await res.json();

  console.log("delete");
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.messenge;
  } else{
    console.log("cat delete of favourite")
    loadFavouriteCats();
  }
};


renderImg();

loadFavouriteCats();





