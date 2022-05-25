if (!JSON.parse(localStorage.getItem('produtosCarrinho'))) {
  localStorage.setItem('produtosCarrinho', JSON.stringify([]));
}

export const readSavedProducts = () => JSON
  .parse(localStorage.getItem('produtosCarrinho'));

export const saveProduct = (produto) => {
  const savedProducts = readSavedProducts();
  localStorage.setItem('produtosCarrinho', JSON.stringify([...savedProducts, produto]));
};

export const removeProduct = (produto) => {
  const savedProducts = readSavedProducts();
  const newSavedProducts = savedProducts.filter(({ id }) => id !== produto.id);
  localStorage.setItem('produtoCarrinho', JSON.stringify([...newSavedProducts]));
};
