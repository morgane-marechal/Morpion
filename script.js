let player1=true;
let player2 = false;
let gameOne = true;
let count = 9; //pour compter nombre de tours en cas de match nul 

         //fonction qui affiche la valeur
         function afficher(val) { 
          if ((player1==true)&&(gameOne==true)){
            document.getElementById(val).innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            document.getElementById(val).style.color = "#F27F24";
            count = count-1;
            checkVictory();
          }else if((player2==true)&&(gameOne==true)){
            document.getElementById(val).innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            document.getElementById(val).style.color = "#0E8DA9";
            count = count-1;
            checkVictory();
          }
       }


       function checkVictory(){
        if((document.getElementById("C3").innerHTML== "X") && (document.getElementById("C2").innerHTML== "X") && (document.getElementById("C1").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }
        else if((document.getElementById("C3").innerHTML== "O") && (document.getElementById("C2").innerHTML== "O") && (document.getElementById("C1").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }
        else if((document.getElementById("B3").innerHTML== "X") && (document.getElementById("B2").innerHTML== "X") && (document.getElementById("B1").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }
        else if((document.getElementById("B3").innerHTML== "O") && (document.getElementById("B2").innerHTML== "O") && (document.getElementById("B1").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A3").innerHTML== "X") && (document.getElementById("A2").innerHTML== "X") && (document.getElementById("A1").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A3").innerHTML== "O") && (document.getElementById("A2").innerHTML== "O") && (document.getElementById("A1").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A1").innerHTML== "X") && (document.getElementById("B1").innerHTML== "X") && (document.getElementById("C1").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A1").innerHTML== "O") && (document.getElementById("B1").innerHTML== "O") && (document.getElementById("C1").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A2").innerHTML== "X") && (document.getElementById("B2").innerHTML== "X") && (document.getElementById("C2").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A2").innerHTML== "O") && (document.getElementById("B2").innerHTML== "O") && (document.getElementById("C2").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A3").innerHTML== "X") && (document.getElementById("B3").innerHTML== "X") && (document.getElementById("C3").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A3").innerHTML== "O") && (document.getElementById("B3").innerHTML== "O") && (document.getElementById("C3").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A1").innerHTML== "X") && (document.getElementById("B2").innerHTML== "X") && (document.getElementById("C3").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A1").innerHTML== "O") && (document.getElementById("B2").innerHTML== "O") && (document.getElementById("C3").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if((document.getElementById("A3").innerHTML== "X") && (document.getElementById("B2").innerHTML== "X") && (document.getElementById("C1").innerHTML== "X")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 1 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#F27F24";

        }else if((document.getElementById("A3").innerHTML== "O") && (document.getElementById("B2").innerHTML== "O") && (document.getElementById("C1").innerHTML== "O")){
          document.getElementById("displayPlayer").innerHTML = "Le joueur 2 a gagné !";
          gameOne = false;
          document.getElementById("displayPlayer").style.color = "#0E8DA9";
        }else if(count==0){
          document.getElementById("displayPlayer").innerHTML = "Match nul !";
        }
    }

    function rejouer(){
      //alert(" Vous allez lancé une nouvelle partie");
      window.location.reload(); // recharge la page
    }



/*
         function afficherA2() { 
          if((player1==true)&&(gameOne==true)){
            document.getElementById("A2").innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            checkVictory();
          }else if((player2==true)&&(gameOne==true)){
            document.getElementById("A2").innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            checkVictory();
          }
       }

         function afficherA3() { 
            if ((player1==true)&&(gameOne==true)){
              document.getElementById("A3").innerHTML = "X";
              let displayTurn = document.getElementById("displayPlayer");
              player1=false;
              player2 = true;
              displayTurn.innerHTML = "C'est au joueur 2 de jouer avec les O";
              checkVictory();
            }else if ((player2==true)&&(gameOne==true)){
              document.getElementById("A3").innerHTML = "O";
              player1=true;
              player2 = false;
              document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
              checkVictory();
            }
         } 

         function afficherB1() { 
          if ((player1==true)&&(gameOne==true)){
            document.getElementById("B1").innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            checkVictory();
          }else if((player2==true)&&(gameOne==true)){
            document.getElementById("B1").innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            checkVictory();
          }
       }

         function afficherB2() { 
          if ((player1==true)&&(gameOne==true)){
            document.getElementById("B2").innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            checkVictory();
          }else if((player2==true)&&(gameOne==true)){
            document.getElementById("B2").innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            checkVictory();
          }
       }

         function afficherB3() { 
            if ((player1==true)&&(gameOne==true)){
              document.getElementById("B3").innerHTML = "X";
              let displayTurn = document.getElementById("displayPlayer");
              player1=false;
              player2 = true;
              displayTurn.innerHTML = "C'est au joueur 2 de jouer avec les O";
              checkVictory();
            }else if ((player2==true)&&(gameOne==true)){
              document.getElementById("B3").innerHTML = "O";
              player1=true;
              player2 = false;
              document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
              checkVictory();
            }
         } 

         function afficherC1() { 
          if ((player1===true)&&(gameOne==true)){
            document.getElementById("C1").innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            checkVictory();
          }else if((player2===true)&&(gameOne==true)){
            document.getElementById("C1").innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            checkVictory();
          }
       }

         function afficherC2() { 
          if ((player1==true)&&(gameOne==true)){
            document.getElementById("C2").innerHTML = "X";
            player1=false;
            player2 = true;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 2 de jouer avec les O";
            checkVictory();
          }else if((player2==true)&&(gameOne==true)){
            document.getElementById("C2").innerHTML = "O";
            player1=true;
            player2 = false;
            document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
            checkVictory();
          }
       }

         function afficherC3() { 
            if ((player1==true)&&(gameOne==true)){
              document.getElementById("C3").innerHTML = "X";
              let displayTurn = document.getElementById("displayPlayer");
              player1=false;
              player2 = true;
              displayTurn.innerHTML = "C'est au joueur 2 de jouer avec les O";
              checkVictory();
            }else if ((player2==true)&&(gameOne==true)){
              document.getElementById("C3").innerHTML = "O";
              player1=true;
              player2 = false;
              document.getElementById("displayPlayer").innerHTML = "C'est au joueur 1 de jouer avec les X";
              checkVictory();
            }
         } 
         */

         