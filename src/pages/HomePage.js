import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Row, Spinner } from "react-bootstrap";
import { ProductCard } from "../components";
import { listTopProducts } from "../actions/productActions";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <Row>
      <h1 className="text-uppercase my-5 text-center">All Products</h1>
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : error ? (
        <Alert vaiant="danger">{error}</Alert>
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Row>
  );
};