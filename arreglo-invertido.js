/* Escribe una función que invierta los valores de un arreglo y los devuelva. */

function reverse(arr) {
    let inicio = 0;
    let fin = arr.length - 1;
    while(inicio < fin) {
        let temp = arr[inicio];
        arr[inicio] = arr[fin];
        arr[fin] = temp;
        inicio++;
        fin--;
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
