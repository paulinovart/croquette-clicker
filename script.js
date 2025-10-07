// ============================
// 1. Imports
// ============================
import "./style.css";

// ============================
// 2. Sélecteurs DOM (au plus haut niveau)
// ============================

const title = document.querySelector("#title");
// const buttons = document.querySelectorAll(".button");
const image = document.querySelector(".image");
const dog = document.querySelector("#dog");
const counter = document.querySelector("#counter");
const age = document.querySelector("#age");
const jauge = document.querySelector("#jauge");
const bouttonsContainer = document.querySelector(".bouttons-container");
const refreshButton = document.querySelector("#reset");
const floatNumber = document.querySelector("#float-number");

// ============================
// 3. Variables globales
// ============================

let croquettes = 0;
let croquette = ["petite", "grande", "géante",];

// ============================
// 4. Fonctions utilitaires
// ============================




/*let attribut = bouton.getAttribute("nbCroquette");
  console.log(attribut);
  if (attribut == 0) {

    bouton.style.backgroundImage("src", "/images/petite_croquette.svg");

  } else if (attribut == 1) {
    
  }else if (attribut == 3) {
    
  }

*/





function hover(button) {
  // button.style.backgroundColor = "#b08968";

  let attribut = button.getAttribute("nbCroquette");
  console.log(attribut);
  if (attribut == 0) {
    button.classList.add("petite");
  } else if (attribut == 1) {
    button.classList.add("grande");
  } else if (attribut == 2) {
    button.classList.add("geante");
  }
}
function nohover(button) {
  // button.style.backgroundColor = "#9c6644";
}

function refresh() {
  window.location.reload();
  console.log("refresh");
}

function addCroquette(bouton) {
  let h6 = document.querySelector("h6");

  let attribut = bouton.getAttribute("nbCroquette");
  console.log(attribut);
  if (attribut == 0) {
    croquettes = croquettes + 1;
    h6.textContent = "+1";
    floatNumber.classList.add("visible");

    floatNumber.style.animation = "none";
    void floatNumber.offsetWidth;
    floatNumber.style.animation = "floatUp 1s";
  } else if (attribut == 1) {
    croquettes = croquettes + 2;
    h6.textContent = "+2";
    floatNumber.classList.add("visible");

    floatNumber.style.animation = "none";
    void floatNumber.offsetWidth;
    floatNumber.style.animation = "floatUp 1s";
  } else if (attribut == 2) {
    croquettes = croquettes + 3;
    h6.textContent = "+3";
    floatNumber.classList.add("visible");

    floatNumber.style.animation = "none";
    void floatNumber.offsetWidth;
    floatNumber.style.animation = "floatUp 1s";
  }

  counter.textContent = " 🦴  Croquettes : " + croquettes;

  if (croquettes >= 10 && croquettes <= 19) {
    dog.setAttribute("src", "/images/vienne_2.jpg");
    console.log("atteint");
    age.textContent = " Vienne a 3 mois !";
    jauge.classList.remove("mois2");
    jauge.classList.add("mois3");

  } else if (croquettes >= 20 && croquettes <= 29) {
    dog.setAttribute("src", "/images/vienne_3.jpg");
    age.textContent = " Vienne a 4 mois !";
    jauge.classList.remove("mois3");
    jauge.classList.add("mois4");

  } else if (croquettes >= 30 && croquettes <= 39) {
    dog.setAttribute("src", "/images/vienne_4.jpg");
    age.textContent = " Vienne a 6 mois !";
    jauge.classList.remove("mois4");
    jauge.classList.add("mois6");

  } else if (croquettes >= 40 && croquettes <= 49) {
    dog.setAttribute("src", "/images/vienne_5.jpg");
    age.textContent = " Vienne a 8 mois !";
    jauge.classList.remove("mois6");
    jauge.classList.add("mois8");

  } else if (croquettes >= 50 && croquettes <= 59) {
    dog.setAttribute("src", "/images/vienne_6.jpg");
    age.textContent = " Vienne a 10 mois !";
    jauge.classList.remove("mois8");
    jauge.classList.add("mois10");

  } else if (croquettes >= 60 && croquettes <= 69) {
    dog.setAttribute("src", "/images/vienne_7.jpg");
    age.textContent = " Vienne a 1 an !";
    jauge.classList.remove("mois10");
    jauge.classList.add("mois12");

  } else if (croquettes >= 110) {
    dog.setAttribute("src", "/images/vienne_vieille.jpg");
    age.textContent = " Vienne a 100 ans !";
    jauge.classList.remove("mois12");
    jauge.classList.add("an100");
  }

  if (
    croquettes == 10 ||
    croquettes == 20 ||
    croquettes == 30 ||
    croquettes == 40 ||
    croquettes == 50 ||
    croquettes == 60
  ) {
    confetti();
  }
}

// ============================
// 5. Event listeners
// ============================

croquette.forEach((type, index) => {
  let bouton = document.createElement("button");
  bouton.classList.add("button");
  bouttonsContainer.appendChild(bouton);

  bouton.addEventListener("click", () => addCroquette(bouton));
  bouton.addEventListener("mouseover", () => hover(bouton));
  bouton.addEventListener("mouseout", () => nohover(bouton));

  bouton.setAttribute("nbCroquette", index);

  let h3 = document.createElement("h3");
  bouton.appendChild(h3);
  h3.textContent = `${type} croquette `;

  refreshButton.addEventListener("click", refresh);
});

// ============================
// 6. Init (point d’entrée)
// ============================

// ============================================
// 6. Zsxercices précédents, dans la console
// ============================================

// Confetti JS

// Exo 2, sur les boucles

/*let bonbons = 0;
let bonheur = 0;
for (bonbons  = 0; bonbons <= 10; bonbons++) {
    console.log("La friandise n°" + bonbons + " a été donnée !");
    bonheur ++;
}*/

/*
//un tableau avec plein de jouets differents
let jouet = ["Poulpe","Bois de cerf","Balle","kong","corde"];

//"type" est un paramètre qui peut etre nomé comme on veut
jouet.forEach((joujou,index)=>{
    console.log(`jouet n° ${index + 1} :  ${joujou}`);
})
    */
