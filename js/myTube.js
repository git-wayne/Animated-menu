const slides= document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalID=null;

document.addEventListener("DOMContentLoaded", initilializeSlider);
function initilializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide,5000);
    }
    
}

function showSlide(index ){
    if(index>=slides.length){
        slideIndex=0;
    }else if(index<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    clearInterval(intervalID);
    slideIndex++;
    showSlide(slideIndex);
}
console.log(Object.getOwnPropertyNames(Promise));
console.log(Object.getOwnPropertyNames(Promise.prototype));


/* POKEMONS */
fetchData = async()=>{
    const pokemonName= document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);

    try{
    if(response.ok){
        let data= await response.json();
        const pokemonSprite = data.sprites.front_default;
        const img = document.getElementById("displayPokemon");
        img.src= pokemonSprite;
        img.style.display= "block";
    }else{
        throw new Error("unable to fetch pokemon");
    }
    }catch(error){
        console.error(error); 
    }

}
/* const displayPokemonBtn=document.getElementById("getPokemon")
displayPokemonBtn.addEventListener("click", fetchData); */
alert(location)