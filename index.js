function typeEffect(element, need) {
  const text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, need);
}


// application
var need = 90;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * need + need;

// type affect to header
 typeEffect(h1, need);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, need);
}, delay);




// Fonction pour calculer la moyenne des notes
function calculerMoyenne(notes) {
  const somme = notes.reduce((acc, note) => acc + note, 0);
  return somme / notes.length;
}

// Tableau pour stocker les notes
let notes = [];
let saisie;

//  demande de saisie pour des notes
do {
  saisie = prompt("Entrez une note en Mathématiques (0 à 20)");

  if (saisie.toLowerCase() !== 'stop') {
      const note = parseFloat(saisie);

      // Vérifie si la note est valide
      if (note >= 0 && note <= 20) {
          notes.push(note);
      } else {
          alert("Veuillez entrer une note valide entre 0 et 20.");
      }
  }
} while (saisie.toLowerCase() !== 'stop' && saisie !== null);

// Affiche la moyenne si des notes ont été saisies
if (notes.length > 0) {
  const moyenne = calculerMoyenne(notes);
  alert("Votre moyenne en Mathématiques est : " + moyenne.toFixed(2));
} else {
  alert("Aucune note saisie.");
}

