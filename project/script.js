var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tikla = document.querySelector('#tikla');
const asked = document.querySelector('.asked');
const wis = document.querySelector('#wis');
const wisp = document.querySelector('#wisp');

tikla.addEventListener('click', () =>{

  if(tikla.classList.contains('fa-minus')){
    asked.style.display = 'block';
    tikla.classList.replace('fa-minus', 'fa-plus');
    wis.style.backgroundColor = '#f8f8f8';
    wisp.style.color = '#3daa62';
    tikla.style.backgroundColor = '#3daa62';
  }
  else{
    asked.style.display = 'none';
    tikla.classList.replace('fa-plus', 'fa-minus');
    wis.style.backgroundColor = '#fff';
    wisp.style.color = '#333';
    tikla.style.backgroundColor = '#202830';
  }
})