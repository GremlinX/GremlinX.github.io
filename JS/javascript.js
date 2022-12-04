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