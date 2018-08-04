import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap'
import Curriculo from "../assets/img/curriculo.docx"
import Sidebar1 from "../assets/img/sidebar-1.jpg"
import Sidebar2 from "../assets/img/sidebar-2.jpg"
import Image1 from "./Image1.jsx"
// css
import '../css/Home.css'

class Home extends Component {

  render() {
    // const { classes } = this.props;
    return (
      <Grid>
      <Col xs={12} md={4} lg={4} >
        <Image1/>
      </Col >
      <Col xs={12} md={8} lg={8} >
        <Jumbotron >
          <h1>Fabio Nogueira</h1>
          <h4>
            Seja Bem vindo ao meu portifólio
          </h4>
        </Jumbotron>
        <button
          href= {Curriculo}
        >
          Currículo
        </button>
      </Col>
      </Grid>
    )
  }
}

  // Home.propTypes = {
  //   classes: PropTypes.object.isRequired,
  // };

export default(Home);
