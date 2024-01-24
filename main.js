document.getElementById("LULZ").addEventListener('click', e => {
  document.getElementById("LULZ").remove();
  setInterval(function(){
    window.open("popup.html","","left=100,top=100,width=220,height=240");
  },9000);
})
