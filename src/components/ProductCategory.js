import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../services/Products';

class ProductCategory extends React.Component {
    handleCategory = () => {
      const { categoryId, query } = this.props;
      getProductsFromCategoryAndQuery(categoryId, query);
    }

    render() {
      return (
        <div>
          {
            produtos.map((item) => (
              <Product
                key={ item.id }
                imagem={ item.imagem }
                nome={ item.nome }
                valor={ item.valor }
              />
            ))
          }
        </div>
      );
    }
}

export default ProductCategory;
