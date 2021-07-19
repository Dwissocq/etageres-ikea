// Gérer l'évènement sur le click
// Récupérer l'élement sur lequel il y a le click
const addNewBox = document.getElementById("ajouter-boite");

// Ajouter un event listener sur cet élément
addNewBox.addEventListener("click", function () {

    // Récupérer l'élément dans lequel on veut ajouter la boîte
    const row = document.querySelector(".rangee");

    // Créer une boîte
    let newBox = document.createElement("div");
    newBox.className = "boite";

    // Insérer la boîte
    row.appendChild(newBox);
});


// Gérer l'évènement sur le click
// Récupérer l'élement sur lequel il y a le click
const deleteBox = document.getElementById("supprimer-boite");

// Ajouter un event listener sur cet élément
deleteBox.addEventListener("click", function () {

    // Récupérer l'élément dans lequel on veut supprimer la boîte
    const row = document.querySelector(".rangee");

    // Supprimer une boîte
    row.removeChild(row.firstChild);
});

// Exercice 3
const whichBox = document.querySelectorAll(".boite");

for (let i = 0; i < whichBox.length; i++) {
    whichBox[i].addEventListener("click", function () {
        if (whichBox[i].className === "boite grosse") {
            console.log("Vous avez cliqué sur une GROSSE boîte")
        } else {
            if (whichBox[i].className === "boite") {
                console.log("Vous avez cliqué sur une Moyenne boîte")
            } else {
                if (whichBox[i].className === "boite petite") {
                    console.log("Vous avez cliqué sur une petite boîte")
                }
            }
        }
    })
};