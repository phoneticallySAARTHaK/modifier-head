import Example from './Example'
import Intro from './Intro'
import { Col, Container, Row } from 'reactstrap'
import Features from '../Features'
import About from '../About'

function Main(props) {
  return (
    <main>
      <section>
        <Intro />
      </section>
      <section>
        <Container>
          <Row>
            <Col className="col-12">
              <Example />
            </Col>
          </Row>
          <Row>
            <Col className="col col-md-6">
              <Features />
            </Col>
            <Col className="col col-md-6">
              <About />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Main
