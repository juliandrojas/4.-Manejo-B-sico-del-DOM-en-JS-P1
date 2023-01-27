//Seleccionamos Elementos por id
let elementoPorId = document.getElementById('parrafo1');
//Cambiamos palabra Parrafo 1 por HTML
elementoPorId.innerHTML = 'HTML';
//Seleccionamos Elementos por clase
let elementoPorClase = document.getElementsByClassName('parrafos');
//Retorna un arreglo (Varios elementos pueden tener la misma clase)
console.log("Total Elementos por clase: "+elementoPorClase.length);
//HTMLCollection(3) [p#parrafo1.parrafos, p#parrafo2.parrafos, p#parrafo3.parrafos, parrafo1: p#parrafo1.parrafos, parrafo2: p#parrafo2.parrafos, parrafo3: p#parrafo3.parrafos]
//Accedemos al arreglo para poder cambiar un elemento (Los arreglos inician por 0)
elementoPorClase[1].innerHTML = 'CSS';
//Seleccionamos Elementos por etiqueta
let elementoPorEtiquetas = document.getElementsByTagName('p');
//Retorna un arreglo (Puede haber varias etiquetas)
console.log("Total Elementos por etiqueta: "+elementoPorEtiquetas.length);
//Accedemos a la última posición del arreglo para modificarla
elementoPorEtiquetas[2].innerHTML = 'JavaScript';
//Modificamos estilos para qeu el primer elemento parezca un botón
elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '25px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';