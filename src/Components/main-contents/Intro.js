import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
} from 'reactstrap'

function Intro(props) {
  return (
    <Container className="intro col text-center">
      <h1 className="display-1">URL modifier</h1>
      <p className="lead">The Next-Gen URL Shortner</p>
      <p className="text-muted">Create Custom URLs & Embeds</p>
      <Row>
        <Col>
          <InputGroup>
            <InputGroupText>
              <i className="bi bi-link-45deg"></i>
            </InputGroupText>
            <Input id="intro" placeholder="Enter a link to modify" />
            <Button>Modify</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <p>
            URL modifer lets you create a custom URL for any link, AND let you
            add the metadata that is shown in the embeds.
          </p>
          <p>
            This is works much like a URL shortner, but it's generalized and
            it's almost as if you've made a whole new webiste!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro
