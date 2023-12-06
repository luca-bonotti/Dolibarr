let ip = localStorage.getItem("ip");                //récupère l'ip et le token du local storage
let token = localStorage.getItem("token");


function userid(){
    fetch(`https://${ip}/dolibarr/api/index.php/users`, {       // contacte avec la méthode GET
        method: "GET",
        headers: {
            "Accept": "application/json",
            "DOLAPIKEY": `${token}`,
        },
    })
    .then((reponse) => {
        if (reponse.ok) {
            reponse.json()
            .then (data => {                      // si la reponse est ok -> la met en json
                // console.log(data)              // la data est le contenu du json
                let iduser = data["0"]["id"]      // définit la variable qui contiendra l'id de l'user
                localStorage.setItem('id',iduser);// puis le stocke dans le stockage local
                // console.log(iduser);
            
            })
            console.log("Success");
        } else {
            console.log("Error");
        }
    })
    getinfo()
    postnote()
}