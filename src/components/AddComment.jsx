import { Component } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    myComment: {
      rate: "1",
      comment: "aaaaa",
      elementId: this.props.nuovoID,
    },
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      const manda = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.myComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
        },
      });
      if (manda.ok) {
        this.props.upDate();
        // const controllo = await manda.json();
        console.log("tutto ok");
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <div className="myModal">
          <p>inserisci il tuo commento:</p>
          <Form onSubmit={this.submitComment}>
            <Form.Select
              aria-label="rate select"
              onChange={(e) => {
                this.setState({
                  myComment: {
                    ...this.state.myComment,
                    rate: e.target.value,
                    elementId: this.props.nuovoID,
                  },
                });
              }}
            >
              <option>Rate the book:</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </Form.Select>

            <FloatingLabel controlId="floatingtext" label="Commento:">
              <Form.Control
                type="text"
                placeholder="Comment"
                onChange={(e) => {
                  this.setState({
                    myComment: {
                      ...this.state.myComment,
                      comment: e.target.value,
                    },
                  });
                }}
              />
            </FloatingLabel>
            <Button variant="info" type="submit" className="d-block mx-auto">
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
export default AddComment;
