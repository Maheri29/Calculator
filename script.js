//*variables globales
//elements memoire et ecran
const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran");
 
//stocke valeur de l'ecran precedent
let precedent = 0;

//stocke l'affichage
let affichage = "";

//stocke l'operation
let operation = null;

//initialise la memoire
let memoire;

window.onload = () => {
    let touches = document.querySelectorAll("span");

    for(let touche of touches){
        touche.addEventListener("click", gererTouches)
    }
}
 function gererTouches(){
     let touche = this.innerText

            //verifie hoe chiffre sa tsia
            if (parseFloat(touche) >= 0 || touche === ".") {
         //manao azy afaka misy chiffre bdb
         affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
            ecranElt.innerText = affichage;

        
    }else{
        switch(touche){
            //reset avec C
            case "C":
                precedent = 0;
                affichage = "";
                operation = null;
                ecranElt.innerText= 0;
                break;
                //calcul
                case "+":
                    case "-":
                        case "X":
                            case "/": 
                            //calculvaleur resultat precedente
                            precedent = (precedent === 0) ? parseFloat(affichage) 
                            : calculer(precedent, parseFloat(affichage), operation); 
                            //maj l'ecran
                            ecranElt.innerText = precedent;
                            //stocker l'operation
                            operation = touche;
                            //reinitialise var d'affichage
                            affichage = "";
                            break;
                                        case "=":
                                            //calculvaleur resultat precedente
                                        precedent = (precedent === 0) ? parseFloat(affichage) 
                                        : calculer(precedent, parseFloat(affichage), operation); 
                                        //maj l'ecran
                                        ecranElt.innerText = precedent;
                                        //stocker l'operation
                                        operation = touche;
                                        //stocke le resultat precedent
                                        affichage = precedent;
                                        //reinitialise precedent
                                        precedent = 0;
                                        break;

        }
    }
 }
/**
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation 
 * @returns number
 */
 function calculer(nb1, nb2, operation){
     nb1 = parseFloat(nb1);
     nb2 = parseFloat(nb2);
     if(operation === "+") return nb1+nb2;
     if(operation === "-") return nb1-nb2;
     if(operation === "X") return nb1*nb2;
     if(operation === "/") return nb1/nb2;

 }