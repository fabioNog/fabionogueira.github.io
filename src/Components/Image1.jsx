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
import Eu1 from "../assets/img/faces/eu_2.jpg"
// css
import '../css/Image1.css'

class Image1 extends Component {

  render() {
    return (
      <Grid>
          <Col xs={6} md={6} lg={6} >
              <Image src={Eu1} circle/>
          </Col>
      </Grid>
    )
  }
}

  // Home.propTypes = {
  //   classes: PropTypes.object.isRequired,
  // };

export default(Image1);
