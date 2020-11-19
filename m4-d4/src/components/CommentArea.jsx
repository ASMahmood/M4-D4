import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./CommentArea.css";

class CommentArea extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Container id="commentArea" className={this.props.className}>
        <Row>
          <h1>{this.props.bookId}</h1>
          <img src={this.props.bookImg} alt="" width="100%" />
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
