function openPage(evt, pageName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

function toggleLightMode() { //manage light mode
  var global = document.body;
  global.classList.toggle("light-mode-body");
}

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var li_nav = document.getElementById('c-nav');

burgerMenu.addEventListener('click', function() { //open menu burger overlay and add event to close it when clicked
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

overlay.addEventListener('click', function() { //add event to the titles to close the overlay when clicked
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});