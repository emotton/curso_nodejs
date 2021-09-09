function espera_ai5(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar (5) ...')
            resolve("ok5")
        }, 5000);
    })
}
function espera_ai10(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar (10)...')
            resolve("ok10")
        }, 10000);
    })
}

const ret1 = espera_ai5()
const ret2 = espera_ai10()
const ret3 = espera_ai10()

Promise.all([ret1, ret2, ret3]).then((valores)=>{
    console.log(valores)
})


