import React from 'react';
import Checkbox from '../icons/Checkbox';

const Product = props => {
  return (
    <div className={`product ${props.className ? props.className : ''}`}>
      <img src={props.image_thumb_url} alt={props.primary_category} />
      <div className="product-info">
        <h2>{props.name}</h2>
        <div className="product-info__bottom">
          <div className="description">
            <h3>
              {props.primary_category}/{props.secondary_category}
            </h3>
            <p>
              {props.package} • {props.alcohol_content / 100}% Alcohol
            </p>
          </div>
          <div className="sp">
            <div className="sp-stock">
              <Checkbox /> {!props.is_dead ? 'In Stock' : 'Out of Stock'}
            </div>
            <div className="sp-price">
              <span>$</span> {(props.price_in_cents / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
