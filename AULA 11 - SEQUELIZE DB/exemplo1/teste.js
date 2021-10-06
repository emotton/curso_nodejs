function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            resolve(true)
        }, 5000);
    });
}

(async () => {
    await espera_ai();
    console.log('terminei');
})();

espera_ai().then(()=>{
    console.log('terminei parte 2');
})
