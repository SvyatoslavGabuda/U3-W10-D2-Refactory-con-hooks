import { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";

class AllTheBooks extends Component {
  state = {
    buyed: null,
  };
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <h2>Our Fantasy Books:</h2>
        </Row>
        <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-stretch">
          {fantasyBooks.map((book, index) => (
            <Col className="my-2" key={`Book-${index}`}>
              <Card className="myCard">
                <Card.Img className="myCardImg" src={book.img} />
                <Card.Body className="myCardBody">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>$ - {book.price}</Card.Text>
                  <Button
                    className="bookBtn"
                    onClick={(e) => {
                      console.log("click", e);

                      this.setState({ buyed: book });
                    }}
                  >
                    Add to Cart <i className="bi bi-cart4"></i>
                  </Button>
                  {this.state.buyed && (
                    <p>
                      You've buyed: "<strong>{this.state.buyed.title}</strong>"
                    </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
