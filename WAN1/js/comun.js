// var Imagen = document.getElementById('LogGraf');

function CargaImg(IDimagen, URLimagen){
   var tiempo = new Date();   // Leer el timestamp
   var Imagen = document.getElementById(IDimagen);
   Imagen.src += '?'+tiempo;  // Usar el timestamp para hacer unico el URL de la imagen

   var tLocal = new Date(tiempo.getTime() - (tiempo.getTimezoneOffset() * 60000 )).toISOString();
   var tISO = tLocal.substr(0, 10)+" a las "+tLocal.substr(11, 5);
   document.getElementById("subtit").innerHTML = "Actualizado el "+tISO;
   
   console.log(tISO+" "+IDimagen+" "+URLimagen);
}
