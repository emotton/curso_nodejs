function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            resolve(true)
        }, 5000);
    })
}

espera_ai().then(()=>{
    console.log('ufa, demorou heim')
    console.log('ao final, volte sempre ...')
})

