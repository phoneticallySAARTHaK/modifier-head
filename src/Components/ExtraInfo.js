// TODO

import Features from './Features'
import About from './About'
import { Col, Container, Row } from 'reactstrap'

function ExtraInfo(props) {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Features />
        </Col>
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
    </Container>
  )
}

export default ExtraInfo
