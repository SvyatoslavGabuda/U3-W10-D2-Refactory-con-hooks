import { Component } from "react";
import { Col, Button, Card } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selezionato: false,

    addedToCart: null,
    buyed: null,
    selezionatoNeiCommenti: false,
  };

  selected = () => {
    this.setState({
      selezionato: !this.state.selezionato,
    });
  };

  buy = () => {
    this.setState({ buyed: true });
  };
  addToCart = () => {
    this.setState({ addedToCart: true });
  };

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Button onClick={this.buy}>buy now</Button>
    </Tooltip>
  );

  selezinatoDaiCommenti = () => {
    if (this.props.bookID === this.props.book.asin) {
      this.setState({ selezionatoNeiCommenti: true });
    } else {
      this.setState({ selezionatoNeiCommenti: false });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookID !== this.props.bookID) {
      //  console.log("update");
      this.selezinatoDaiCommenti();
    }
  }

  render() {
    return (
      <>
        <Col className="my-2" id={this.props.book.asin}>
          <Card
            className="myCard"
            style={{
              borderColor: this.state.selezionatoNeiCommenti ? "red" : "lightblue",
            }}
          >
            <Card.Img
              onClick={() => {
                this.props.takeBook(this.props.book.asin);
                this.selezinatoDaiCommenti();
              }}
              className="myCardImg"
              src={this.props.book.img}
            />
            <Card.Body className="myCardBody">
              <Card.Title className="myTitle" onClick={() => this.selected()}>
                {this.props.book.title}
              </Card.Title>
              <Card.Text>
                $ - {this.props.book.price}{" "}
                {this.state.addedToCart && <span> Aggiunto al carello </span>} -
                {this.state.buyed && <span> Comprato! </span>}
              </Card.Text>

              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 800 }}
                overlay={this.renderTooltip}
              >
                <Button onClick={this.addToCart} className="bookBtn">
                  Add To Cart <i className="bi bi-cart4"></i>
                </Button>
              </OverlayTrigger>
              {this.state.selezionato && <CommentArea elementID={this.props.book.asin} />}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
