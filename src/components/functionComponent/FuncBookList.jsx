import { useState } from "react";
import { Container, Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";

import fantasyBooks from "../../books/fantasy.json";
import historyBooks from "../../books/history.json";
import horrorBooks from "../../books/horror.json";
import romanceBooks from "../../books/romance.json";
import scifiBooks from "../../books/scifi.json";

import FuncSingleBook from "./FuncSingleBook";
import FuncCommentArea from "./FuncCommentArea";

const FuncBookList = () => {
  // eslint-disable-next-line
  const [genres, setGenres] = useState(["Fantasy", "History", "Horror", "Romance", "Scifi"]);
  const [book, setBook] = useState([]);
  const [foundBook, setFoundBook] = useState([]);
  const [bookID, setBookID] = useState(null);

  const loadBooks = (e) => {
    if (e.target.id === "Fantasy") {
      // this.setState({ book: fantasyBooks });
      setBook(fantasyBooks);
    }
    if (e.target.id === "History") {
      // this.setState({ book: historyBooks });
      setBook(historyBooks);
    }
    if (e.target.id === "Horror") {
      setBook(horrorBooks);
    }
    if (e.target.id === "Romance") {
      setBook(romanceBooks);
    }
    if (e.target.id === "Scifi") {
      setBook(scifiBooks);
    }
    if (e.target.id === "CloseAll") {
      setBook([]);
    }
  };

  const findBook = (e) => {
    const librtoTrovarto = [
      ...fantasyBooks,
      ...historyBooks,
      ...horrorBooks,
      ...romanceBooks,
      ...scifiBooks,
    ].filter((book) => book.title.toLowerCase().includes(e.target.value.toLowerCase()));

    // this.setState({ foundBook: librtoTrovarto });
    setFoundBook(librtoTrovarto);
  };

  const close = () => {
    // this.setState({ foundBook: [] });
    setFoundBook([]);
  };

  const takeBookID = (newBookID) => {
    // this.setState({ bookID: newBookID });
    setBookID(newBookID);
  };

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
              <Form.Control onChange={findBook} type="search" placeholder="es. Sword of Destiny" />
            </FloatingLabel>
          </Col>
          <Col xs="2">
            <Button className="closeBtn" onClick={close}>
              Close
            </Button>
          </Col>
        </Row>
        {/* libri in base al search Imput */}
        <Row>
          <Col xs="9">
            <Row className="mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch">
              {foundBook.length > 0 &&
                foundBook.map((el, index) => (
                  <FuncSingleBook
                    book={el}
                    key={`book-${index}-${el.asin}`}
                    takeBook={takeBookID}
                    bookID={bookID ? bookID : 0}
                  ></FuncSingleBook>
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
              {genres.map((el, index) => (
                <Col className="text-center" key={`categoria-${index}`}>
                  <Button className="w-100 catBtn" onClick={loadBooks} id={el}>
                    {el}
                  </Button>
                </Col>
              ))}
              <Col>
                <Button className="closeBtn" onClick={loadBooks} id="CloseAll">
                  Close
                </Button>
              </Col>
            </Row>
            {/* libiri in base ai bottoni */}
            <Row className="mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3  align-items-stretch">
              {book.map((bookF) => (
                <FuncSingleBook
                  book={bookF}
                  key={bookF.asin}
                  takeBook={takeBookID}
                  bookID={bookID ? bookID : 0}
                ></FuncSingleBook>
              ))}
            </Row>
          </Col>

          {/* commenti */}
          <Col xs="3" className="position-relative">
            <Col className="commenti">
              <h2>Commmenti:</h2>
              {bookID ? <FuncCommentArea elementID={bookID} /> : <p>clicca su un libro</p>}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FuncBookList;
