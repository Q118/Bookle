
import React from "react";
import SaveBtn from "../SaveBtn";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../DeleteBtn";

function BookList({ id, title, authors, description, thumbnail, infoLink,onClick, btntype }) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
        
         <h3>{title}</h3>
         </Col>
         <Col size="md-6">
           {btntype==="save"?(<SaveBtn onClick={onClick}/>):(<DeleteBtn onClick={onClick}/>)}
         
         </Col>
      </Row>
      <h6>Written by {authors}</h6>
     <img
        src={thumbnail}
        alt={title}
        className="img-thumbnail rounded float-left"
      />

      <p>
        {description} <br />
      <a href={infoLink}>{infoLink}</a>
      </p>
    </Container>
  );
}

export default BookList;