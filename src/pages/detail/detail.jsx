import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {Button} from "react-bootstrap";

const Detail = () => {
  // const { id } = useParams() || {};
  const { state } = useLocation() || {};
  // const [cart, setCart] = useState([]);



  return (
    <div className="container">
      {state ? (
        <Card key={state.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={state.image} />
          <Card.Body>
            <Card.Title>{state.Title}</Card.Title>
            <Card.Text>{state.description}</Card.Text>
            <Button variant="primary">
              COMPRAR
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Link to="/">
          Go Home
        </Link>
      )}
    </div>
  );
};

export default Detail;
