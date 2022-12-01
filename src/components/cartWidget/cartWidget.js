import React from "react";
import './styles.css';
import { Badge } from "react-bootstrap";

const CartWidget = ({ numbersOfItems = 0, onHandlerCart}) => {
    return (<>
        <img src="/carrito.png" 
                            width="15"
                            height="15"
                            alt="carrito"/>
        <span className="ms-1">
            <Badge bg="success">{numbersOfItems}</Badge>
        </span>
    </>);
}

export default CartWidget;