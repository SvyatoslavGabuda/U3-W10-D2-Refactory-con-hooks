import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const FuncSingleComment = (props) => {
  const deleteComment = async (commentID) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentID,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
          },
        }
      );
      if (response.ok) {
        alert("you have deleted a comment");
        props.upDate();
      } else {
        alert("Some error occur, comment wasn't deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ListGroup.Item key={props.commento._id}>
        <p>
          <span>{props.commento.author}</span>
        </p>
        <Badge bg="warning" text="dark">
          Voto: {props.commento.rate}
        </Badge>
        <p>
          <span> {props.commento.comment}</span>
        </p>
        <button className="closeBtn" onClick={() => deleteComment(props.commento._id)}>
          Del
        </button>
      </ListGroup.Item>
    </>
  );
};

export default FuncSingleComment;
