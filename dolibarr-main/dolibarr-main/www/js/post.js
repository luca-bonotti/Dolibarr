

function postnote(url, type, data){
let ip = localStorage.getItem("ip");
let dateStart = localStorage.getItem("dateStart");   // définit des variables en récupérant les valeurs
let dateEnd = localStorage.getItem("dateEnd");       // précédemment stocker
let iduser = localStorage.getItem("id");
// console.log(iduser);
// console.log(date1);
// console.log(date2);
    fetch(`https://${ip}/dolibarr/api/index.php/expensereports`, {
  method: 'POST',
  headers: {
    'Accept' : 'application/json',
    'Content-Type': 'application/json',
    "DOLAPIKEY": `${token}`,
    
  },
  body: JSON.stringify(                            // créer une note de fraits
    {                                              // et insère le contenue des variables
    'fk_user_author': `${iduser}`,                 // l'id et la date de début et de fin
    'date_debut': `${dateStart}` ,
    'date_fin': `${dateEnd}`
    }
  )
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);          // récupère l'id de la note
    localStorage.setItem("idnote", data)    // et elle est ensuite stocker en local    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
modifnote()                                 //appel la fonction modifnote()


}