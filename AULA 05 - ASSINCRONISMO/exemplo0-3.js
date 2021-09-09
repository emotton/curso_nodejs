function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            resolve(true)
        }, 5000);
    })
}

async function init(){ 
    await espera_ai()
    console.log('ufa, demorou heim')
    console.log('ao final, volte sempre ...')
}

init()


