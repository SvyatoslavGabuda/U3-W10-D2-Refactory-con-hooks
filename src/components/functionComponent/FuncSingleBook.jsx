import { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import FuncCommentArea from "./FuncCommentArea";

const FuncSingleBook = (props) => {
  const [selezionato, setSelezionato] = useState(false);
  const [addedToCart, setAddToCart] = useState(null);
  const [buyed, setBuyed] = useState(null);

  const selected = () => {
    setSelezionato(!selezionato);
  };

  const buy = () => {
    setBuyed(true);
  };
  const addToCart = () => {
    setAddToCart(true);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Button onClick={buy}>buy now</Button>
    </Tooltip>
  );

  return (
    <>
      <Col className="my-2" id={props.book.asin}>
        <Card
          className="myCard"
          style={{
            borderColor: props.bookID === props.book.asin ? "red" : "lightblue",
          }}
        >
          <Card.Img
            onClick={() => {
              props.takeBook(props.book.asin);
            }}
            className="myCardImg"
            src={props.book.img}
          />
          <Card.Body className="myCardBody">
            <Card.Title className="myTitle" onClick={() => selected()}>
              {props.book.title}
            </Card.Title>
            <Card.Text>
              $ - {props.book.price} {addedToCart && <span> Aggiunto al carello </span>} -
              {buyed && <span> Comprato! </span>}
            </Card.Text>

            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 800 }}
              overlay={renderTooltip}
            >
              <Button onClick={addToCart} className="bookBtn">
                Add To Cart <i className="bi bi-cart4"></i>
              </Button>
            </OverlayTrigger>
            {selezionato && <FuncCommentArea elementID={props.book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default FuncSingleBook;
