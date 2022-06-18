import Example from './Example'
import Intro from './Intro'
import ExtraInfo from '../ExtraInfo'
import { Col, Container, Row } from 'reactstrap'
// TODO
function Main(props) {
  return (
    <main>
      <section>
        <Intro />
      </section>
      <section>
        <Container>
          <Row>
            <Col className="col col-lg-8">
              <Example />
            </Col>
            <Col>
              <ExtraInfo className="mt-5" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Main
