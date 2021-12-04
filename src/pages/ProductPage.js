import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Button, Spinner, Alert } from "react-bootstrap";
import { listProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { OPEN_CART } from "../constants/cartConstants";

export const ProductPage = ({ match }) => {
  const { productId } = match.params;

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [productId, dispatch]);

  return (
    <Row className="justify-content-center">
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row className="flex-column align-items-center">
          <Link className="mt-3" to={`/${product.category}`}>
            <i className="bi bi-arrow-left"></i> Back to {product.category}
          </Link>
          <Col xs={10} md={6} className="mt-4 mb-3 text-center">
            <img src={product.image} alt={product.title} />
          </Col>
          <Col className="text-center" xs={12} md={6}>
            <h1>{product.title}</h1>
            <Link
              className="text-uppercase text-muted"
              to={`/${product.category}`}
            >
              {product.category}
            </Link>
            <p className="description text-muted">{product.description}</p>
            <h2 className="text-bold mb-4">${product.price}</h2>
            <Button
              className="mb-3"
              onClick={() => {
                dispatch(addToCart(product));
                dispatch({ type: OPEN_CART });
              }}
              variant="warning"
            >
              <i className="bi bi-cart4"></i> Add To Cart
            </Button>
          </Col>
        </Row>
      )}
    </Row>
  );
};