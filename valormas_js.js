function  extraerListaPalabras(t, n) {
    var palabras = t.split(" ");  //se obtine la lista de palabras hacindo uso de la función split().
    var lista = [palabras.filter((palabras) => palabras.length >= n && palabras === palabras.toLowerCase()).sort()]; //se asigna a la variable lista un array ordenado el cual contine los items que cumplen con las condicionres establecidas.
    return lista; //se retorna la varible de tipo array.
}

var texto = prompt("Por favor, ingresa una cadena de texto:"); //Entrada: "El desarrollo de software es una habilidad fundamental para los ingenieros informáticos".
var numeroCaracteres = parseFloat(prompt("Por favor, ingresa numero de caracteres a seleccionar:")); //Debe ser un Numero.

console.log(extraerListaPalabras(texto, numeroCaracteres)) // llamamos la función, pasamos los parametro ingresados e impprimimos por pantalla.
  