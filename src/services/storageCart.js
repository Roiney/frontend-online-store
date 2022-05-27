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
  const strinfyProductRemove = JSON.stringify(produto);
  const stringfySavedProducts = savedProducts.map((product) => JSON.stringify(product));
  // remove elemento da lista de produtos indexOf pega index do produto, slice remove produto "1" produto
  savedProducts.splice(stringfySavedProducts.indexOf(strinfyProductRemove), 1);
  localStorage.setItem('produtosCarrinho', JSON.stringify([...savedProducts]));
};

export const removeAllProduct = (produto) => {
  const savedProducts = readSavedProducts();
  const newSavedProducts = savedProducts.filter(({ id }) => id !== produto.id);
  localStorage.setItem('produtosCarrinho', JSON.stringify([...newSavedProducts]));
};
