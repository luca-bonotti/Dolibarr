
function log(){
    let ip = document.getElementById("IP").value;
    localStorage.setItem('ip', ip);                  // Récupère les info dans les input (identifiant, mdp et ip)
    let id = document.getElementById("name").value; // et stocke en local l'ip
    let pwd = document.getElementById("pass").value;
   // console.log(id);
  //  console.log(pwd);

        fetch(`https://${ip}/dolibarr/api/index.php/login?login=${id}&password=${pwd}`)
        .then(reponse => {
            if(reponse.ok){
                reponse.json()
                .then(data => {
                //  console.log(data);
                 let token = data["success"]["token"]    // permet de récupérer le token de l'user
                //  console.log(token);                  // en  contactant dolibarr puis le stocke en local
                localStorage.setItem('token',token);
                document.location.href="note.html";
                })
            } else {                                     // Si cela échoue renvoi une erreur
                console.log("ERREUR !");
                document.getElementById('error').innerHTML = "Erreur"

            }

        })
        
        

}

