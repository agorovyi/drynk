import React from 'react';
import Product from './Product';

const Listview = props => {
  return (
    <div className="listview">
      {props.data
        .filter(
          product =>
            `${product.name} ${props.primary_category} ${props.secondary_category}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map((product, index) => {
          if (index === 0) {
            return <Product {...product} key={product.id} className="product--featured" />;
          } else if (index === 1 || index === 2) {
            return <Product {...product} key={product.id} className="product--secondary" />;
          } else if (index < 20) {
            return <Product {...product} key={product.id} />;
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default Listview;
