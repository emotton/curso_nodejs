function espera_ai5(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`[${n}] obrigado por aguardar (5) ...`)
            resolve("ok5")
        }, 5000);
    })
}
function espera_ai10(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`[${n}] obrigado por aguardar (10) ...`)
            resolve("ok10")
        }, 10000);
    })
}

const ret1 = espera_ai10(1)
const ret2 = espera_ai5(2)
const ret3 = espera_ai10(3)

Promise.all([ret1, ret2, ret3]).then((valores)=>{
    console.log(valores)
})


