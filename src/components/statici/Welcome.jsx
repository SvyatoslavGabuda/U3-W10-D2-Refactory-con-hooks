import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Welcome extends Component {
  state = {
    ProvaStateStringa: "questo Valore",
    ProvaStateNumero: 23,
  };
  render() {
    return (
      <Container>
        <Row className="jumbotron">
          <Col xs="12" className="jumbotronUp">
            <h2 className="d-flex align-items-center">
              {this.props.nome} <span className="subName ps-4">--{this.props.subName}--</span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut veniam quo eaque ratione
              qui cumque, aliquam magni repellendus assumenda nulla libero commodi eveniet quidem
              perspiciatis tempore possimus in omnis consequatur.
            </p>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempore placeat.
              Repudiandae hic quae, fugiat inventore est quisquam veritatis accusantium, fuga dicta
              dignissimos enim suscipit itaque dolorum. Possimus, maxime accusantium?
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
