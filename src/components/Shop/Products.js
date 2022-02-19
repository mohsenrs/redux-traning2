import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'the first book that i wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My second Book',
    description: 'the second book that i wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((data) => (
          <ProductItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
