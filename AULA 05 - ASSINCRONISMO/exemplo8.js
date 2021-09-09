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
            reject("ok10")
        }, 10000);
    })
}

const ret1 = espera_ai10(1)
const ret2 = espera_ai5(2)
const ret3 = espera_ai10(3)
const ret4 = espera_ai5(4)

// Processos de 10 segundos
Promise.all([ret1, ret3]).then((valores)=>{
    console.log('log chegaram os resultados do banco de dados Oracle')
    console.log(valores)
})

// Processos de 5 segundos
Promise.all([ret2, ret4]).then((valores)=>{
    console.log('log chegaram os resultados do banco de dados SQL Server')
    console.log(valores)
})


