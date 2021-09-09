function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
        }, 5000);
    })
}

console.log(espera_ai())
console.log('ao final, volte sempre ...')