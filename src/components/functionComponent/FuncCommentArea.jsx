import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import FuncCommentList from "./FuncCommentList";
import FuncAddComment from "./FuncAddComment";

const FuncCommentArea = (props) => {
  const [comment, setComment] = useState([]);
  const [openmodal, setOpenModal] = useState(false);
  const [upDated, setUpDated] = useState(0);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.elementID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        // this.setState({
        //   comment: data,
        // });
        setComment(data);
      }
    } catch (error) {
      console.log("c'e un errore grave");
    }
  };

  const upDate = () => {
    // this.setState({ upDated: this.state.upDated + 1 });
    setUpDated(upDated + 1);
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementID !== this.props.elementID) {
  //     this.fetchComments();
  //   }
  //   if (prevState.upDated !== this.state.upDated) {
  //     this.fetchComments();
  //   }
  // }
  useEffect(() => {
    fetchComments();
  }, [props.elementID, upDated]);

  return (
    <>
      <button
        className="catBtn"
        onClick={() => {
          // this.setState({ openmodal: !this.state.openmodal });
          setOpenModal(!openmodal);
        }}
      >
        Add Comment
      </button>

      {openmodal && <FuncAddComment upDate={upDate} nuovoID={props.elementID} />}

      <ListGroup>
        <FuncCommentList commentiM={comment} upDate={upDate} />
      </ListGroup>
    </>
  );
};

export default FuncCommentArea;
