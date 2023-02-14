import { Component } from "react";
import { Container, Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import horrorBooks from "../books/horror.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    genres: ["Fantasy", "History", "Horror", "Romance", "Scifi"],
    book: [],
    foundBook: [],
    bookID: null,
  };

  loadBooks = (e) => {
    if (e.target.id === "Fantasy") {
      this.setState({ book: fantasyBooks });
    }
    if (e.target.id === "History") {
      this.setState({ book: historyBooks });
    }
    if (e.target.id === "Horror") {
      this.setState({ book: horrorBooks });
    }
    if (e.target.id === "Romance") {
      this.setState({ book: romanceBooks });
    }
    if (e.target.id === "Scifi") {
      this.setState({ book: scifiBooks });
    }
    if (e.target.id === "CloseAll") {
      this.setState({ book: [] });
    }
  };

  findBook = (e) => {
    const librtoTrovarto = [
      ...fantasyBooks,
      ...historyBooks,
      ...horrorBooks,
      ...romanceBooks,
      ...scifiBooks,
    ].filter((book) => book.title.toLowerCase().includes(e.target.value.toLowerCase()));

    this.setState({ foundBook: librtoTrovarto });
  };

  close = () => {
    this.setState({ foundBook: [] });
  };

  takeBookID = (newBookID) => {
    this.setState({ bookID: newBookID });
  };

  render() {
    return (
      <>
        <Container>
          <Row className="mt-4">
            <h2>Cerca un libro in base al titolo nel nostro database:</h2>
          </Row>
          {/* imput per cercare il libro */}
          <Row className="mt-4 align-items-center">
            <Col xs="10">
              <FloatingLabel
                controlId="floatingInput"
                label="Inserisci il TITOLO del libro che stai cercando:"
                className="mb-3"
              >
                <Form.Control
                  onChange={this.findBook}
                  type="search"
                  placeholder="es. Sword of Destiny"
                />
              </FloatingLabel>
            </Col>
            <Col xs="2">
              <Button className="closeBtn" onClick={this.close}>
                Close
              </Button>
            </Col>
          </Row>
          {/* libri in base al search Imput */}
          <Row>
            <Col xs="9">
              <Row className="mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch">
                {this.state.foundBook.length > 0 &&
                  this.state.foundBook.map((el, index) => (
                    <SingleBook
                      book={el}
                      key={`book-${index}-${el.asin}`}
                      takeBook={this.takeBookID}
                      bookID={this.state.bookID ? this.state.bookID : 0}
                    ></SingleBook>
                  ))}
              </Row>
              <Row>
                <h2>
                  {" "}
                  <i className="bi bi-x-diamond-fill"></i> Oppure scegli una delle categorie
                  sottostanti:
                </h2>
              </Row>
              {/* Libri in base ai bottoni di categoria  */}
              {/* Bottini selezione */}
              <Row className="mt-4">
                {this.state.genres.map((el, index) => (
                  <Col className="text-center" key={`categoria-${index}`}>
                    <Button className="w-100 catBtn" onClick={this.loadBooks} id={el}>
                      {el}
                    </Button>
                  </Col>
                ))}
                <Col>
                  <Button className="closeBtn" onClick={this.loadBooks} id="CloseAll">
                    Close
                  </Button>
                </Col>
              </Row>
              {/* libiri in base ai bottoni */}
              <Row className="mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3  align-items-stretch">
                {this.state.book.map((bookF) => (
                  <SingleBook
                    book={bookF}
                    key={bookF.asin}
                    takeBook={this.takeBookID}
                    bookID={this.state.bookID ? this.state.bookID : 0}
                  ></SingleBook>
                ))}
              </Row>
            </Col>

            {/* commenti */}
            <Col xs="3" className="position-relative">
              <Col className="commenti">
                <h2>Commmenti:</h2>
                {this.state.bookID ? (
                  <CommentArea elementID={this.state.bookID} />
                ) : (
                  <p>clicca su un libro</p>
                )}
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
