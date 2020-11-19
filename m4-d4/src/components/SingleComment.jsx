import React from "react";
import { ListGroup } from "react-bootstrap";
import MyBadge from "./MyBadge";

class SingleComment extends React.Component {
  render() {
    return (
      <ListGroup.Item className=" w-100 d-flex justify-content-between align-items-center">
        <MyBadge
          color="success"
          text={this.props.commentObj.rate ? this.props.commentObj.rate : "ERR"}
        />{" "}
        {this.props.commentObj.comment}
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
