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

function search(seletor) {
  return Array.from(window.document.querySelectorAll(seletor))
}

const listOfHeights = [ '339', '202', '448', '202', '165', '375' ]
var previousElement;
function resetThePevious(i) {
  if (previousElement) {
    previousElement.style.height = "0px"
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
    // this.nextElementSibling.style.height = `${listOfHeights[i]}px`
    this.nextElementSibling.style.height = `${listOfHeights[i]}px`
    previousElement = this.nextElementSibling
  }
})