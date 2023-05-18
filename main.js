//numbers select configuration
const btns = document.querySelector('.card-rating-number');
const icons = document.querySelectorAll('.icon');

btns.addEventListener('click', (e) =>{
  if(e.target.classList.contains('card-number')){
    icons.forEach((e) => {
    e.classList.remove('icon-active')
  })
    e.target.classList.toggle('icon-active');
    
  }
})

//button configuration
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const cardRating = document.querySelector('.card-rating');
const cardThank = document.querySelector('.card-thank');
btn.addEventListener('click', ()=>{
  icons.forEach(e => {
    if(e.classList.contains('icon-active')){
      console.log(e.textContent);
      result.textContent =e.textContent;
      cardRating.style.display = "none";
      cardThank.style.display = "flex";
    }
  })
})
