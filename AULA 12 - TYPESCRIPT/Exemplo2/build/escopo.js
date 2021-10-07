"use strict";
let bool = true;
if (bool) {
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}
// variável não existe fora do escopo do if(bool)
// porém no typescript já reclama, enquanto no javascript
// só será apresentado o problema em tempo de excecução
// console.log(i);
