var Imagen = document.getElementById('LogGraf');

function CargaImg(IDimagen, URLimagen){
   var tiempo = new Date();   // Leer el timestamp

   Imagen.src += '?'+tiempo;  // Usar el timestamp para hacer unico el URL de la imagen

   var tLocal = new Date(tiempo.getTime() - (tiempo.getTimezoneOffset() * 60000 )).toISOString();
   var tISO = tLocal.substr(0, 10)+" a las "+tLocal.substr(11, 5);
   document.getElementById("subtit").innerHTML = "Actualizado el "+tISO;
}

function ListaLogs(){
  const [input, select, textarea, reader] = [
    document.querySelector("input[type=file]")
    , document.querySelector("select")
    , document.querySelector("textarea")
    , new FileReader
  ]
  let [files, data, fn] = [
    [],
    [], (file, reader) => new Promise((resolve, reject) => {
      reader.onload = () => {
        reader.onload = reader.onerror = null;
        resolve(reader.result);
      }
      reader.onerror = reject;
      reader.readAsText(file);
    })
  ];
  input.onchange = async() => {
    select.innerHTML = "";
    files.length = data.length = 0;
    for (const file of input.files) {
      const {
        name
      } = file;
      const option = new Option(name, files.length);
      files.push(file);
      select.appendChild(option);
      let result = await fn(file, reader);
      data.push(result);
    }
  }

  select.onchange = () => {
    textarea.value = data[select.value];
  }
}