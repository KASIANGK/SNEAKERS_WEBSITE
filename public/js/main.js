
//BODY

let boutonMode = document.querySelector("#darkBouton")
let body = document.getElementById("bodyID")


boutonMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
  let titrePrincipal = document.querySelector(".titrePrincipal img")
  let background = document.querySelector(".intro2 .BG")
  let video = document.querySelector("#video-pieces-uniques")
  let divPieces = document.querySelectorAll(".divPiecesUniques div");
  let premierA = document.querySelector(".nav-list a")
  let deuxiemeA = document.querySelector('.liensNav')
  let troisiemeA = document.querySelector('.liensNav3')
  let quatriemeA = document.querySelector('.liensNav4')
  let cinquiemeA = document.querySelector('.liensNav5')
  let boutonConnexion = document.querySelector("#boutonModal")
  


  if (body.classList.contains("dark-mode")) {
    divPieces.forEach((divPiece, index) => {
      let txt = divPiece.querySelector("p");
      txt.style.backgroundImage = `url('./public/modules/boxBlack.png')`;
    });
  } else {
    divPieces.forEach((divPiece, index) => {
      let txt = divPiece.querySelector("p");
      txt.style.backgroundImage = `url('./public/modules/box15.png')`;
    });
  }


  let tousLesBoutons = document.querySelectorAll('.touslesboutons button');

  if (body.classList.contains("dark-mode")) {
    tousLesBoutons.forEach((bouton) => {
      bouton.style.backgroundColor = "white";
    });

    titrePrincipal.src = './public/modules/sneakersBlanc.png';
    background.style.backgroundImage = 'url("./public/modules/SKY_DARK.jpg")';
    video.src = './public/modules/walkBlack.mp4';
    premierA.style.color = "rgb(154, 147, 147)";
    deuxiemeA.style.color = "rgb(154, 147, 147)";
    troisiemeA.style.color = "rgb(154, 147, 147)";
    quatriemeA.style.color = "rgb(154, 147, 147)";
    cinquiemeA.style.color = "rgb(154, 147, 147)";
    boutonMode.style.backgroundColor = "black";
    boutonConnexion.style.color = "#F3F0EC;";
  } else {
    tousLesBoutons.forEach((bouton) => {
      bouton.style.backgroundColor = "black";
    });

    titrePrincipal.src = './public/modules/sneakersBlack.png';
    background.style.backgroundImage = 'url("./public/modules/SKY_LIGHT.jpg")';
    video.src = './public/modules/walk.mp4';
    premierA.style.color = "rgb(57, 50, 50)";
    deuxiemeA.style.color = "rgb(57, 50, 50)";
    troisiemeA.style.color = "rgb(57, 50, 50)";
    quatriemeA.style.color = "rgb(57, 50, 50)";
    cinquiemeA.style.color = "rgb(57, 50, 50)";
    boutonMode.style.backgroundColor = "rgb(241, 231, 216)";
    boutonConnexion.style.color = "rgb(57, 50, 50)";
  }


  

})









// MODAL
let modal = document.getElementById('modal');
function ouvrirModal() {
  modal.style.display = 'block';
}
function fermerModal() {
  modal.style.display = 'none';
}
let boutonConnexion = document.getElementById("boutonModal")
boutonConnexion.addEventListener('click', ouvrirModal);

let boutonFermer = document.querySelector('.close');
boutonFermer.addEventListener('click', fermerModal);


//SECOND MPODAL

// let registerLink = document.querySelector('#registerLink');
// let secondModal = document.querySelector('#secondModal');
// let login2Link = document.querySelector('#2LOGIN');

// function ouvrirSecondModal() {
//     secondModal.style.display = 'block';
// }

// function fermerSecondModal() {
//     secondModal.style.display = 'none';
// }

// function retourAuPremierModal() {
//     fermerSecondModal();
//     ouvrirModal(); // Fonction pour ouvrir le premier modal
// }

// registerLink.addEventListener('click', ouvrirSecondModal);
// login2Link.addEventListener('click', retourAuPremierModal);




//MOUSEENTER TROIS IMAGES/DIV

// let troisDiv = document.querySelectorAll(".troisDiv div")

// troisDiv.forEach(div => {
//     let image = div.querySelector("img")
    
//     image.addEventListener("mouseenter", function () {
//     image.style.filter = "brightness(0.8)"
//     });

//     image.addEventListener("mouseleave", function () {
//     image.style.filter = "brightness(1)"
//     p.style.zIndex = 2
//     });

//     div.addEventListener("mouseenter", function () {
//     barre.style.width = "100%"
//     })

//     div.addEventListener("mouseleave", function () {
//     barre.style.width = "20%"
//     })
// });



let troisDiv = document.querySelectorAll(".troisDiv div")

troisDiv.forEach(div => {
    let image = div.querySelector("img")
    let barre = div.querySelector(".barre")
    let p = div.querySelector("p")

    image.addEventListener("mouseenter", function () {
        image.style.filter = "brightness(0.8)";
        barre.style.transform = "scaleX(2)";
        barre.style.color = "white"
        p.style.color = "white"
    });

    image.addEventListener("mouseleave", function () {
        image.style.filter = "brightness(1)";
        barre.style.transform = "scaleX(1)";
        barre.style.color = "black"
        p.style.color = "black"
    });

    div.addEventListener("mouseenter", function () {
        barre.style.width = "70%";
    });

    div.addEventListener("mouseleave", function () {
        barre.style.width = "20%";
    });
});

  

// CREATION OBJETS PIECES UNIQUES 

class Pieces {
    constructor(nom, dateSortie, prix, solde) {
        this.nom = nom;
        this.dateSortie = dateSortie;
        this.prix = prix;
        this.solde = solde;
    }
}

let piece1 = new Pieces("Produit 1", "2024-01-25", 20000, 0.2)
let piece2 = new Pieces("Produit 2", "2024-01-25", 30000, 0.3)
let piece3 = new Pieces("Produit 3", "2024-01-25", 40000)
let piece4 = new Pieces("Produit 4", "2024-01-25", 20000)
let piece5 = new Pieces("Produit 5", "2024-01-25", 30000)
let piece6 = new Pieces("Produit 6", "2024-01-25", 40000)
let piece7 = new Pieces("Produit 7", "2024-01-25", 20000, 0.1)
let piece8 = new Pieces("Produit 8", "2024-01-25", 30000)
let piece9 = new Pieces("Produit 9", "2024-01-25", 40000)
let piece10 = new Pieces("Produit 10", "2024-01-25", 20000)
let piece11 = new Pieces("Produit 11", "2024-01-25", 30000)
let piece12 = new Pieces("Produit 12", "2024-01-25", 40000)
let piece13 = new Pieces("Produit 13", "2024-01-25", 20000, 0.1)
let piece14 = new Pieces("Produit 14", "2024-01-25", 30000)
let piece15 = new Pieces("Produit 15", "2024-01-25", 40000)
let piece16 = new Pieces("Produit 16", "2024-01-25", 20000)

console.log("nom: " + piece1.nom);

let piecesTableau = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, 
    piece9, piece10, piece11, piece12, piece13, piece14, piece15, piece16]
let imagesPieces = ["./public/modules/Sujet3.png", 
    "./public/modules/Sujet3.png", "./public/modules/Sujet4.png", "./public/modules/Sujet5.png",
    "./public/modules/Sujet7.png", "./public/modules/Sujet21.png", "./public/modules/Sujet22.png", "./public/modules/Sujet9.png", "./public/modules/Sujet10.png", "./public/modules/Sujet11.png", "./public/modules/Sujet12.png", 
    "./public/modules/Sujet13.png", 
    "./public/modules/Sujet14.png", 
    "./public/modules/Sujet15.png", "./public/modules/Sujet16.png", "./public/modules/Sujet23.png"];



//AFFICHER PIECES DE FACON ALEATOIRE
function ordreAleatoire() {
    return Math.random() - 0.5
}

imagesPieces.sort(ordreAleatoire)
piecesTableau.sort(ordreAleatoire)



let divPieces = document.querySelectorAll(".divPiecesUniques div")
// divPieces.classList.add('classeAll')

for (let i = 0; i < divPieces.length; i++) {
  let cardPU = divPieces[i]; 

  let img = document.createElement("img");
  img.src = imagesPieces[i];
  img.style.width = '90%';
  img.style.margin = "-10%";
  img.style.zIndex = "2";
  cardPU.appendChild(img); 

  let txt = document.createElement("p");
  txt.classList.add('prixTexte');
  txt.textContent = "Modèle : " + piecesTableau[i].nom;
  txt.style.fontFamily = "'Bebas Neue'";
  txt.style.fontWeight = "italic";
  txt.style.color = "white";
  txt.style.fontSize = "1.3em";
  txt.style.backgroundImage = "url('./public/modules/box15.png')";
  txt.style.backgroundSize = "260px";
  txt.style.backgroundRepeat = "no-repeat";
  txt.style.backgroundPosition = "52% 0%";
  txt.style.width = "400%";
  txt.style.height = "197px";
  txt.style.paddingTop = "16.5%";
  txt.style.paddingLeft = '30%';

  txt.style.transition = "transform 5s linear infinite"; 
  txt.style.transform = "rotate(-6deg)";
  
  // txt.style.animation = "rotateBackground 5s linear infinite"; 


  cardPU.appendChild(txt); 
  
  let price = document.createElement("p");
  price.classList.add('prixTexte2');

  if (piecesTableau[i].solde !== undefined) {
      let prixSolde = piecesTableau[i].prix * (1 - piecesTableau[i].solde);
      price.innerHTML = "<del>Price : " + piecesTableau[i].prix + " </del><span style='color: red;'> " + prixSolde.toFixed(2) + "</span>";
  } else {
      price.textContent = "\nPrice : " + piecesTableau[i].prix;
  }
  price.style.fontFamily = 'Archivo';
  price.style.fontSize = "0.9em";
  price.style.color = "white";
  price.style.paddingTop = '40%';
  price.style.paddingLeft = '8%';
  price.style.transition = "transform 5s linear infinite"; 
  price.style.transform = "rotate(-6deg)";
  cardPU.appendChild(price); 


}






let imagesPiecesUniques = document.querySelectorAll('.divPiecesUniques div img');

imagesPiecesUniques.forEach((image) => {
  image.addEventListener('mouseenter', agrandirImage);
  image.addEventListener('mouseleave', retrecirImage);
});

function agrandirImage(event) {
  event.target.style.transform = 'scale(1.4)';
  event.target.style.transition = 'transform 0.5s ease'; 
}
function retrecirImage(event) {
  event.target.style.transform = 'scale(1)';
  event.target.style.transition = 'transform 0.5s ease';
}





// //CAROUSEL

function genererCarouselDiv(indexDebut, indexFin) {
    let carouselDiv = document.createElement('div');
    carouselDiv.classList.add('tout')

    for (let i = indexDebut; i <= indexFin; i++) {
        let pieceDiv = document.createElement('div');
        pieceDiv.classList.add("carouselElement");

        let img = document.createElement('img');
        img.src = imagesPieces[i];
        img.style.width = '300px';
        img.style.marginTop = '40px'
        pieceDiv.appendChild(img);

        let txt = document.createElement('p');
        txt.textContent = "Modèle : " + piecesTableau[i].nom + "\nPrix : " + piecesTableau[i].prix;
        txt.style.backgroundImage = 'url("./public/modules/ok.png")'
        txt.style.backgroundRepeat = "no-repeat";
        txt.style.backgroundPosition = "100% 70%";
        txt.style.height = '100px'
        txt.style.color = 'white'
        txt.style.backgroundSize = '100%'
        txt.style.paddingTop = '25px'
        txt.style.paddingLeft = '35px'
        pieceDiv.appendChild(txt);

        // pieceDiv.style.marginBottom = '5%'
        carouselDiv.appendChild(pieceDiv);
    }

    return carouselDiv;
}


function mettreAJourCarousel(indexDebut, indexFin) {
    let carouselContainer = document.querySelector('.carousel_container');
    
    if (carouselContainer) {
        carouselContainer.innerHTML = '';
        let nouvelleCarouselDiv = genererCarouselDiv(indexDebut, indexFin);
        carouselContainer.appendChild(nouvelleCarouselDiv);
    } else {
        console.error('ooops');
    }
}


let divTousLesBoutons = document.createElement('div');
divTousLesBoutons.classList.add('touslesboutons');

divTousLesBoutons.style.marginTop = '200px'
function resetColors() {
    boutonDiv1.style.backgroundColor = "black";
    boutonDiv2.style.backgroundColor = "black";
    boutonDiv3.style.backgroundColor = "black";
    boutonDiv4.style.backgroundColor = "black";
}

let boutonDiv1 = document.createElement('button');
boutonDiv1.style.border = "5px solid black"
boutonDiv1.style.borderRadius = "50px"
boutonDiv1.style.backgroundColor = "black"
boutonDiv1.style.width = "35px"
boutonDiv1.style.height = "35px"
boutonDiv1.style.marginTop = '-15%'
boutonDiv1.style.marginBottom = '17%'
boutonDiv1.addEventListener('click', function() {
    resetColors(); 
    boutonDiv1.style.backgroundColor = "rgb(182, 92, 111)";
    mettreAJourCarousel(0, 3);
});

let boutonDiv2 = document.createElement('button');
boutonDiv2.style.border = "5px solid black"
boutonDiv2.style.borderRadius = "50px"
boutonDiv2.style.backgroundColor = "black"
boutonDiv2.style.width = "35px"
boutonDiv2.style.height = "35px"
boutonDiv2.style.marginTop = '-15%'
boutonDiv2.style.marginBottom = '17%'
boutonDiv2.addEventListener('click', function() {
    resetColors(); 
    boutonDiv2.style.backgroundColor = "rgb(182, 92, 111)";
    mettreAJourCarousel(4, 7);
});

let boutonDiv3 = document.createElement('button');
boutonDiv3.style.border = "5px solid black"
boutonDiv3.style.borderRadius = "50px"
boutonDiv3.style.backgroundColor = "black"
boutonDiv3.style.width = "35px"
boutonDiv3.style.height = "35px"
boutonDiv3.style.marginTop = '-15%'
boutonDiv3.style.marginBottom = '17%'
boutonDiv3.addEventListener('click', function() {
    resetColors(); 
    boutonDiv3.style.backgroundColor = "rgb(182, 92, 111)";
    mettreAJourCarousel(8, 11);
});

let boutonDiv4 = document.createElement('button');
boutonDiv4.style.border = "5px solid black"
boutonDiv4.style.borderRadius = "50px"
boutonDiv4.style.backgroundColor = "black"
boutonDiv4.style.width = "35px"
boutonDiv4.style.height = "35px"
boutonDiv4.style.marginTop = '-15%'
boutonDiv4.style.marginBottom = '17%'
boutonDiv4.addEventListener('click', function() {
    resetColors(); 
    boutonDiv4.style.backgroundColor = "rgb(182, 92, 111)";
    mettreAJourCarousel(12, 15);
});


divTousLesBoutons.appendChild(boutonDiv1);
divTousLesBoutons.appendChild(boutonDiv2);
divTousLesBoutons.appendChild(boutonDiv3);
divTousLesBoutons.appendChild(boutonDiv4);


let carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(divTousLesBoutons);

mettreAJourCarousel(0, 3);








// // TROIS DIV BIS

let troisDivBisElements = document.querySelectorAll('.troisDivBis div');

troisDivBisElements.forEach(function(div) {
    div.addEventListener('mouseenter', function() {
      div.style.transition = 'background-color 0.5s ease';
      div.style.backgroundColor = 'black'; 
      div.style.color = 'white';
    });
  
    div.addEventListener('mouseleave', function() {
      div.style.transition = 'background-color 0.5s ease';
      div.style.backgroundColor = 'pink';
      div.style.color = 'black';
    });
  });


