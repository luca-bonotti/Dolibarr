function getinfo(){

    var prix= document.getElementById("prix");
    localStorage.setItem("prix", prix.value);

    var desc= document.getElementById("desc");
    localStorage.setItem("desc", desc.value);
              // récupère les différents contenues des inputs dans des variables
              // et les stockent dans le stockage local
    var dateStart= document.getElementById("dateStart");
    localStorage.setItem("dateStart", dateStart.value);

    var dateEnd= document.getElementById("dateEnd");
    localStorage.setItem("dateEnd", dateEnd.value);
   }