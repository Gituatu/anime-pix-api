const btnEl= document.getElementById("btn");

const animeContainerEl= document.querySelector(".anime-container");

const animeImgEl= document.querySelector(".anime-img");

const animeNameEl= document.querySelector(".anime-name");



btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled= true;
        btnEl.innerText= "Loading...";
        animeNameEl.innerText= "Updating...";
        animeImgEl.src= "roll.svg";
        const response= await fetch("https://api.catboys.com/img");
        const data= await response.json();
        btnEl.disabled= false;
        btnEl.innerText= "Generate";
        animeContainerEl.style.display= "block";
        animeImgEl.style.display= "";
        animeImgEl.src= data.url;
        animeNameEl.innerText= data.artist;
    } catch (error) {
        animeImgEl.style.display= "none";
        btnEl.disabled= false;
        btnEl.innerText= "Generate";
        animeNameEl.innerText= "An error occured, try again later.";
    }
});