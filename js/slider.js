const slider__productos= document.querySelector("#slider__productos");
let sliderSection=document.querySelectorAll(".slider__categorias__section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
const btn__rigth=document.querySelector("#btn__rigth");
const btn__left=document.querySelector("#btn__left");

slider__productos.insertAdjacentElement("afterbegin",sliderSectionLast);

function siguiente(){
    let sliderSectionFirst=document.querySelectorAll(".slider__categorias__section")[0];
    slider__productos.style.marginLeft="-200%";
    slider__productos.style.transition="all 0.5s";
    setTimeout (function(){
        slider__productos.style.transition="none";
        slider__productos.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider__productos.style.marginLeft="-100%";
        }, 500);
}


function anterior(){
    let sliderSection =document.querySelectorAll(".slider__categorias__section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
    slider__productos.style.marginLeft="0";
    slider__productos.style.transition="all 0.5s";
    setTimeout (function(){
        slider__productos.style.transition="none";
        slider__productos.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider__productos.style.marginLeft="-100%";
        }, 500);


}
btn__rigth.addEventListener('click', function(){siguiente();});
btn__left.addEventListener('click', function(){anterior();});





const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
});

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}
