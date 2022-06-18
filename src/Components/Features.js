import { ListGroup, ListGroupItem } from 'reactstrap'

function Features(props) {
  return (
    <>
      <h2 className="h2">Features</h2>
      <ListGroup>
        <ListGroupItem>Custom url code</ListGroupItem>
        <ListGroupItem>Custom metadata (ofc)</ListGroupItem>
        <ListGroupItem>Personal prefix (User account)</ListGroupItem>
        <ListGroupItem>Open Source!</ListGroupItem>
      </ListGroup>
    </>
  )
}

export default Features
