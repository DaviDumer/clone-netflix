const input = document.querySelector('#Input-Email');
const button = document.querySelector('.button');

button.addEventListener("click", 
(e) => {
  console.log('input')
  e.preventDefault()
}
)
console.log(button);