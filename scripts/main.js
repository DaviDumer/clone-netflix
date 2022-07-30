const animationDownload = document.querySelector('#stranger-things > img:nth-of-type(2)')
setInterval(() => {
  const src = animationDownload.getAttribute('src')
  if(src === './img/g0R5.gif'){
    animationDownload.setAttribute('src', './img/cell-with-check.svg')
  } else if(src === './img/cell-with-check.svg'){   
    animationDownload.setAttribute('src', './img/download_arrow.svg')
  } else{
    animationDownload.setAttribute('src', './img/g0R5.gif')
  }
}, 3000
)

const buttonQuestion = document.querySelectorAll('#common-questions button')
const spanOpen = (val, boo) => document
  .querySelectorAll('#common-questions button + span')[val]
  .setAttribute('data-open', boo)

let value = 0
const openHelp = function(){
  if(value){
    if(value === this.getAttribute('data-id')){
      spanOpen(value-1, false)
      value = 0
    } else {
      spanOpen(value-1, false)
      value = this.getAttribute('data-id')
      spanOpen(value-1, true)
    }
  } else {
    value = this.getAttribute('data-id')
    spanOpen(value-1, true)
  }
}
buttonQuestion.forEach((i, v) => {
  i.addEventListener('click', openHelp , false)
  // spanQuestion[v].setAttribute('class', "asdf")
  buttonQuestion[v].setAttribute('data-id', v + 1)
  spanOpen(v, false)
  i.innerHTML = i.textContent + '<img class="img-plus" src="./img/plus.svg" alt="Mais">'
})
