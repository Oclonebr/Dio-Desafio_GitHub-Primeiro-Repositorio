// Solução 1

/*
function verificaPalindromo(string) {
    if (!string) return;
   return string.split("").reverse().join("") === string;
}
 console.log(verificaPalindromo("gato"));
 */


// Solução 2

function verificaPalindromo2(string) {
    if (!string) return "String inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 - i]){
            return false;}
    }
    return true;
}

console.log(verificaPalindromo2("ovo"))