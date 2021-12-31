import React from "react";
import { NavDropdown } from "react-bootstrap";

export const ShoppingCartItem = ({item}) => (
  <NavDropdown.Item>{item.title} - {item.category} - ${item.price} </NavDropdown.Item>
);
