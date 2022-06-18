import { Col, Container, Row, Button } from 'reactstrap'
import Slideshow from './Slideshow'

function Example(props) {
  return (
    <Container>
      <h2 className="h2">
        But what <em>is</em> this?
      </h2>
      <p className="lead">Best explained with an example!</p>
      <Row>
        <Col>
          <p>
            Observe the screenshots of various social media platforms,
            displalying a URL Embed.
          </p>
          <Button>Skip to Tl;dr</Button>
          <Slideshow />
          <p>
            Here's the link they contain <a href="#">seggs</a>.
            <img
              src="https://picsum.photos/id/123/500/300"
              alt="a screenshot of the mentioned webpage"
            />
          </p>
        </Col>
      </Row>
      <h2 className="h2">TL;DR</h2>
      <div>
        <p>
          We let you create a custom URL for any link, AND let you add the
          metadata that is shown in the embeds.
        </p>
        <p>
          This is works much like a URL shortner, but it's generalized and it's
          almost as if you've made a whole new webiste!
        </p>
      </div>
    </Container>
  )
}

export default Example
