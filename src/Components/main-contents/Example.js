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
          <p className="m-2">Here's where the URL actually redirects you:</p>
          <div className="text-center">
            <img
              className="img-fluid pb-lg-4"
              src="https://picsum.photos/id/123/500/300"
              alt="a screenshot of the mentioned webpage"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Example
