const produtos = [
    { valor: 6.50, id: 1, categoria: 'limpeza', name: 'Amaciante' },
    { valor: 1.20, id: 2, categoria: 'limpeza', name: 'Detergente' },
    { valor: 6.90, id: 3, categoria: 'alimento', name: 'ovo' },
    { valor: 2.00, id: 4, categoria: 'alimento', name: 'alface' },
  ];
  const total = produtos.reduce((acumulado, produto) => {
    if (acumulado.valor) {
      return acumulado.valor + produto.valor;
    }
    return acumulado + produto.valor;
  })

  console.log(total); // 16.6