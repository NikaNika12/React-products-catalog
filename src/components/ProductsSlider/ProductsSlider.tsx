import { memo, useState } from 'react';
import classNames from 'classnames';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductsSlider.scss';

type Props = {
  title: string;
  products: Product[];
};

export const ProductsSlider: React.FC<Props> = memo(({ title, products }) => {
  const [start, setStart] = useState(0);

  return (
    <div className="products-slider">
      <div className="products-slider__container">
        <h2 className="products-slider__header">{title}</h2>
        <div className="products-slider__buttons">
          <button
            aria-label="products-slider__buttons"
            type="button"
            className={classNames('products-slider__button', {
              'products-slider__button--disabled': start <= 0,
            })}
            onClick={() => setStart((prev) => prev - 1)}
          >
            <span
              className="products-slider__icon products-slider__icon--left"
            />
          </button>
          <button
            aria-label="products-slider__buttons"
            type="button"
            className={classNames('products-slider__button', {
              'products-slider__button--disabled':
              start + 4 > products.length - 1,
            })}
            onClick={() => setStart((prev) => prev + 1)}
          >
            <span
              className="products-slider__icon products-slider__icon--right"
            />
          </button>
        </div>
      </div>
      <div className="products-slider__products">
        {products.slice(start, start + 4).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
});
