//function fibonacci 
//elle prend en paramètre un terme 
//et retourne la valeur de ce terme avec la suite de Finonacci
//Ex: terme 6 retourne 8
function fibonacci(terme) {
   //TO DO coder la suite de Fibonacci avec une boucle 
    result = 0;
    if(terme <= 1) {
        result = terme;
    } else {
        result = fibonacci(terme - 1) + fibonacci(terme - 2)
    }
    return result;
}

module.exports= {
    fibonacci
}