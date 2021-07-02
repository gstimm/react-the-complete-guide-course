import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/Products/p1">Book</Link>
        </li>
        <li>
          <Link to="/Products/p2">Notebook</Link>
        </li>
        <li>
          <Link to="/Products/p3">Xbox Controller</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
