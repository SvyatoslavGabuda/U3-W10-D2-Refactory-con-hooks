import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BookList from "./components/BookList";
import FuncBookList from "./components/functionComponent/FuncBookList";
import MyFooter from "./components/statici/MyFooter";
import { useState } from "react";

import MyNav from "./components/statici/MyNav";
import Welcome from "./components/statici/Welcome";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [pagina, setPagina] = useState(true);

  return (
    <>
      <MyNav />
      <Welcome nome="EpiBooks" subName="The Best Books Ever!!!" />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs="6">
            <Button className="w-100" onClick={() => setPagina(!pagina)}>
              Clicca per fisualizzare i componenti 'funzione' o 'classe'
            </Button>
            <p className="text-center">
              ovviamente i due componenti sono identici in quanto a renderizzazione e funzionalità
            </p>
          </Col>
        </Row>
      </Container>
      {pagina ? (
        <>
          <h2 className="text-center"> Componenti a funzione: </h2>
          <FuncBookList />
        </>
      ) : (
        <>
          <h2 className="text-center"> Componenti a classe: </h2>
          <BookList />
        </>
      )}

      <MyFooter />
    </>
  );
}

export default App;
