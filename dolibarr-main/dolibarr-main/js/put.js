function modifnote(url, type, data){
    let ip = localStorage.getItem("ip");
    let price = localStorage.getItem("prix");
    let desc = localStorage.getItem("desc");        // récupère les différentes données
    let IdNote = localStorage.getItem("idnote");    // pour la modification de la note
    let img64 = localStorage.getItem("image");
    
        fetch(`https://${ip}/dolibarr/api/index.php/expensereports/${IdNote}`, {
      method: 'PUT',
      headers: {                              
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        "DOLAPIKEY": `${token}`,
        
      },
      body: JSON.stringify(                
        {                                  
          "id": `${IdNote}`,
          "total_ttc": `${price}`,
          "note_public": `${desc}`, // Modifie le contenu de la note à l'aide de la méthode PUT
          "note_private": `${desc}`,// Insère les différentes info
          "filecontent": `${img64}`,
          "fileencoding": "base64"
        
        }
      )
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log('Success:', data);
       
      })
      .catch((error) => {
        console.error('Error:', error);
        
      });
    
    
    
    }