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

function openWindow(url){
        aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=220,height=240,titlebar=no,alwaysRaised=yes');
}

document.getElementById("LULZ").addEventListener('click', e => {
  openWindow('popup.html')
  openWindow('popup.html')
  document.getElementById("LULZ").click()
  
})
