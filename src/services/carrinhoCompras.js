if (!JSON.parse(localStorage.getItem('produtosCarrinho'))) {
  localStorage.setItem('produtosCarrinho', JSON.stringify([]));
}

export const saveProduct = (produto) => {
  const savedProducts = JSON.parse(localStorage.getItem('produtosCarrinho'));
  localStorage.setItem('produtosCarrinho', JSON.stringify([...savedProducts, produto]));
};

export const readSavedProducts = () => JSON
  .parse(localStorage.getItem('produtosCarrinho'));

// export const removeProduct = (id) => {

// }
