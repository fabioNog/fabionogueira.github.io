import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import Curriculo from "../assets/img/curriculo.docx"
import '../css/Home.css'

class Home extends Component {
  render() {
    return (<div>
      <Jumbotron>
        <h1>Fabio Nogueira do Carmo</h1>
        <p>
          Seja Bem vindo ao meu portifólio
        </p>
        <p>
          <Button
          bsStyle="primary"
          href= {Curriculo}
          >
          Curriculo
          </Button>
        </p>
      </Jumbotron>;
    </div>);
  }
}

export default Home;
