import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Slideshow from './Slideshow'

function Example() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ITEMS = 3
  const next = (animating) => {
    if (animating) return
    const nextIndex = activeIndex === ITEMS - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = (animating) => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? ITEMS - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (animating, newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const props = {
    activeIndex,
    next,
    previous,
    goToIndex,
  }

  return (
    <Container>
      <h2 className="h2">Demonstration</h2>
      <Row>
        <Col className="col col-md-6 text-center">
          <h3>Modifiied URL</h3>
          <Slideshow {...props} />
        </Col>
        <Col className="col col-md-6 text-center">
          <h3>Original URL</h3>
          <Slideshow {...props} />
        </Col>
      </Row>
    </Container>
  )
}

export default Example
