import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
  Form,
} from 'reactstrap'
import ModForm from './ModForm'

function Intro(props) {
  const [isVisible, setVisible] = useState(false)
  const toggle = () => {
    setVisible(true)
  }

  return (
    <Container className="intro col col-md-6 col-lg-4 text-center">
      <h1 className="display-1">URL modifier</h1>
      <p className="lead">The Next-Gen URL Shortner</p>
      <p className="text-muted">Create Custom URLs & Embeds</p>
      <Row>
        <Col className="input-form text-start">
          <Form action="https://urlmod.herokuapp.com/u/um/m/" method="post">
            <InputGroup>
              <InputGroupText>
                <i className="bi bi-link-45deg"></i>
              </InputGroupText>
              <Input
                required
                id="intro"
                name="redirect_url"
                placeholder="Enter a link to modify"
              />
              {isVisible ? null : <Button onClick={toggle}>Next</Button>}
            </InputGroup>
            {isVisible ? <ModForm /> : null}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-start my-3">
          <p>
            URL modifer lets you create a custom URL for any link, AND let you
            add the metadata that is shown in the embeds.
          </p>
          <p>
            This is works much like a URL shortner, but it's generalized and
            it's almost as if you've made a whole new website!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro
