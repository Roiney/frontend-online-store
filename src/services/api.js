export async function getCategories() {
  // Implemente aqui
  const request = await
  fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

const categoria = async (palavra) => {
  const categorias = await
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${palavra}`);
  const categoriaJson = await categorias.json();
  return categoriaJson;
};

const termo = async (b) => {
  const termos = await
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${b}`);
  const termoJson = await termos.json();
  return termoJson;
};

const categoryTermo = async (a, b) => {
  const api = await
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${a}&q=${b}`);
  const fetchTudo = await api.json();
  return fetchTudo;
};

const detalhes = async (a) => {
  const api = await
  fetch(`https://api.mercadolibre.com/items/${a}`);
  const json = await api.json();
  return json;
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (query.length === 0) {
    const category = await categoria(categoryId);
    return category;
  }
  if (categoryId === undefined) {
    const word = await termo(query);
    return word;
  }
  if (query.length === 0 || categoryId === undefined) {
    const info = await detalhes(query);
    return info;
  }
  if (query.length > 0 || categoryId !== undefined) {
    const tudo = await categoryTermo(categoryId, query);
    return tudo;
  }
}
