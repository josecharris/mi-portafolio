const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);  

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeLanguage(){
  var actualLanguage = document.getElementById("textIcon");  
  var imagen = document.getElementById("iconLanguage");
  if( actualLanguage.textContent === "ES"){
    imagen.src = "assets/eng.png";
    actualLanguage.textContent = "EN";
  }else{
    imagen.src = "assets/espana.png";
    actualLanguage.textContent = "ES";
  }
}
