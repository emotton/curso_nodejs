function espera_ai(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`[${n}] obrigado por aguardar ...`)
            resolve(true)
        }, 5000);
    })
}

async function init(){ 
    await espera_ai(1)
    espera_ai(2)
    espera_ai(3)
    espera_ai(4)
    espera_ai(5)
    console.log('ufa, demorou heim')
    console.log('ao final, volte sempre ...')
}

init()