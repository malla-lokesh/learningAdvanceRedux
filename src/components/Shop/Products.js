import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: 'product1',
      price: 20,
      description: 'This is the first product.'
    },
    {
      id: 2,
      title: 'product2',
      price: 10,
      description: 'This is the second product.'
    },
    {
      id: 3,
      title: 'product3',
      price: 50,
      description: 'This is the third product.'
    },
    {
      id: 4,
      title: 'product4',
      price: 15,
      description: 'This is the fourth product.'
    },
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          products={products}
        />
      </ul>
    </section>
  );
};

export default Products;
