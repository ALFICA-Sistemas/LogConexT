// var Imagen = document.getElementById('LogGraf');

function CargaImg(objImagen, URLimagen){
   console.log('CargaImg en '+URLimagen)
   var tiempo = new Date();                                          // Leer el timestamp
   // Asignar el source a la imagen con el mismo URL + timestamp para diferenciarlo y que no la agarre del cache
   objImagen.setAttribute('src', URLimagen+'?'+tiempo.getTime());
//   var objImg = document.getElementById("LogConex");
//   objImg.setAttribute('src', URLimagen+'?'+tiempo.getTime());
   // Determinar el tiempo local de esta zona horaria:
   var tLocal = new Date(tiempo.getTime() - (tiempo.getTimezoneOffset() * 60000 )).toISOString();
   // Componer el timestamp amistoso:
   var tISO = tLocal.substr(0, 10)+" a las "+tLocal.substr(11, 5);
   // Mostrar el timestamp amistoso:
   document.getElementById("subtit").innerHTML = "Actualizado el "+tISO;

}

function LeerTexto(URL){
   console.log('LeerTexto en '+URL)
   var Solic = new XMLHttpSolic();
   Solic.open('GET', URL, true);
   Solic.send(null);
   Solic.onreadystatechange = function () {
      if (Solic.readyState === 4 && Solic.status === 200) {
         var type = Solic.getResponseHeader('Content-Type');
         if (type.indexOf("text") !== 1) {
            return Solic.responseText;
            console.log(Solic.responseText);
            }
      }
   }
}

