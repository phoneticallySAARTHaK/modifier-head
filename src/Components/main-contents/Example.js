import { Col, Container, Row } from 'reactstrap'
import Slideshow from './Slideshow'

function Example(props) {
  return (
    <Container>
      <h2 className="h2">Example</h2>
      <Row>
        <Col>
          <p>
            Screenshots of various social media platforms showing{' '}
            <a href="#">seggs</a> embed:
          </p>
          <Slideshow />
          <p>
            Here's the where URL actually redirects you:
            <img
              src="https://picsum.photos/id/123/500/300"
              alt="a screenshot of the mentioned webpage"
            />
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Example
