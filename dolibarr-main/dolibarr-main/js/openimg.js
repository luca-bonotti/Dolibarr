/* 
var openimg = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('imgnote');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
    let readerData = reader["FileReader"]["result"]
    console.table(reader);
  };


function convertImg(){
  fileSelect = document.getElementById("fileUp").files;
  if(fileSelect.lenght > 0){
    var fileSelect = fileSelect[0];
    var fileReader = new FileReader();

    fileReader.onload = function(FileLoadEvent){
      var srcData = FileLoadEvent.target.result;

      document.getElementById("imgFile").src = srcData
      document.getElementById("imgFile").innerHTML = srcData
    }
    fileReader.readAsDataURL(fileSelect)

  }
}

var fileUp = document.getElementById("fileUp");
fileUp.addEventListener("change",function(){
  convertImg()

})

*/

const fileInput = document.getElementById("fileUp");

fileInput.addEventListener("change", event => {
  // console.log(event);
  const file = fileInput.files[0];
  const reader = new FileReader();               // Permet de récupérer l'image jointe
                                                 // prend son contenu en Base64 et le stocke
  reader.addEventListener("load", () => {
    // console.log(reader.result);
    localStorage.setItem("image", reader.result)
  });
  reader.readAsDataURL(file);

});