function search(seletor) {
  return Array.from(window.document.querySelectorAll(seletor))
}

const animationDownload = search('#stranger-things > img:nth-of-type(2)')[0]
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

const listOfHeights = [ '339', '202', '448', '202', '165', '375' ]
var previousElement;

function thePlusAnimation(childrenImg) {
  if (childrenImg.children[0].classList.contains('rotate-plus-symbol')) {
    childrenImg.children[0].classList.remove('rotate-plus-symbol')
  } else {
    childrenImg.children[0].classList.add('rotate-plus-symbol')
  }
  console.log(childrenImg.children[0])
}

function resetThePevious(i) {
  if (previousElement) {
    previousElement.style.height = "0px"
    thePlusAnimation(previousElement.previousElementSibling)
    previousElement = null
  }
}
search('.help-button').forEach((e, i) => {
  e.onclick = function () {
    if (previousElement == this.nextElementSibling) {
      resetThePevious()
      return
    }
    resetThePevious()
    this.nextElementSibling.style.height = `${listOfHeights[i]}px`
    previousElement = this.nextElementSibling
    
    thePlusAnimation(this)
  }
})

const input = search(".input-email")
const labelimput = search(".label-input")
input.forEach((element, i) => {
  element.addEventListener("focusout", ({target}) => {
    if (!target.value) labelimput[i].classList.remove("label-input-active")
  })
  element.addEventListener("focus", ({target}) => 
    labelimput[i].classList.add("label-input-active")
  )
})