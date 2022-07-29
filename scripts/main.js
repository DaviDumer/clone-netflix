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

// const buttonQuestion = document.querySelectorAll('#common-questions button')[0]
// const text = buttonQuestion.value
// console.log(text)
// buttonQuestion.children = `${text}${`
// <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>`}`