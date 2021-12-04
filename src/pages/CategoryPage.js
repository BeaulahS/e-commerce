import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Spinner, Alert } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { ProductCard } from "../components";

export const CategoryPage = ({ match }) => {
  const { categoryName } = match.params;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(categoryName));
  }, [categoryName, dispatch]);

  return (
    <Row>
      <h1 className="text-center text-capitalize my-5">{categoryName}</h1>
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Row>
  );
};