import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from 'reactstrap'

function Intro(props) {
  return (
    <Container className="intro col text-center">
      <h1 className="display-1">URL modifier</h1>
      <p className="lead">The next-gen URL shortner</p>
      <p className="text-muted">Create Custom URLs & Embeds</p>
      <InputGroup>
        <InputGroupText>
          <i className="bi bi-link-45deg"></i>
        </InputGroupText>
        <Input id="intro" placeholder="Enter a link to modify" />
        <Button>Modify</Button>
      </InputGroup>
    </Container>
  )
}

export default Intro
