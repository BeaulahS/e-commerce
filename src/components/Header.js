import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Nav, Navbar,Form,FormControl } from "react-bootstrap";
import { OPEN_CART } from "../constants/cartConstants";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import ProductData from "./mock-data.json"


export const Header = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const links = [
    "home",
    "men's",
    "women's",
    "electronics",
    "jewelery",
  ];

  return (
    <header className="border-bottom border-light">
      <Navbar bg="white" expand="lg">
        <Container>
          <Link className="d-flex align-items-center" to="/">
            <img
              width="50px"
              height="50px"
              className="img-responsive"
              src={logo}
              alt="logo"
            />
            <Navbar.Brand className="d-none d-sm-block flex">
              <b>Shopoholics</b>
            </Navbar.Brand>
          </Link>
          <SearchBar placeholder="Search a Product" data={ProductData} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-5" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {links.map((link) => (
                <Link
                  key={link}
                  to={`/${link === "home" ? "" : link}`}
                  className={`text-capitalize mx-2 ${
                    location.pathname === "/" + link ? "text-danger" : ""
                  }`}>
                  {link}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Button
            variant="white"
            onClick={() => dispatch({ type: OPEN_CART })}
            className="mb-0 mx-3 p-0 order-2"
          >
            Cart(
            {cartItems.reduce((acc, item) => acc + item.qty, 0)})
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};