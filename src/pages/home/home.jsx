import React from "react";
import PRODUCTS from "../../constants/data/products";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onHandlerSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="container">
      {/* <Progress scroll={scrollPosition}/> */}
      <h1>Productos destacados</h1>
      <div className="row">
        {PRODUCTS.map((product) => (
          <div className="col">
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.Title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button onClick={onHandlerSelect(product)} variant="primary">
                  COMPRAR
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
