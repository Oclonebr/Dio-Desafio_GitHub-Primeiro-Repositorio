function Numero(array) {
    if(!array) return -1;
    if(!array.lenght) return -1;
    for (let i = o; i < array.lenght; i++) {
        if(array[i] === 0) {
            console.log("Você já é zero!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    } 
    return array;
}
let arr = [1, 2, 3, 6, 80, 33, 23, 90];
console.log(Numero([]));