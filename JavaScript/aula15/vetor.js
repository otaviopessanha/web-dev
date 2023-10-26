let valores = [8, 1, 7, 4, 2, 9]

// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}
/*
A posição 0 tem o valor 8
A posição 1 tem o valor 1
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //versao simplificada