function useDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var moon = document.getElementById("moon").innerHTML;
  if (moon === '<i class="fas fa-moon" aria-hidden="true"></i>') {
    document.getElementById("moon").innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.getElementById("moon").innerHTML = '<i class="fas fa-moon"></i>';
  }
}

function slider() {
  var btnSliderDown = document.getElementById("btn-sliderDown");
  var btnSliderUp = document.getElementById("btn-sliderUp");
  if (btnSliderDown.style.display === "none") {
    btnSliderDown.style.display = "block";
  } else {
    btnSliderDown.style.display = "none";
    btnSliderUp.style.display = "block";
  }
}

// .click(function() {
//   alert( "Handler for .click() called." );
// });