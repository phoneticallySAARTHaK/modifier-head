import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const items = [
  {
    src: 'https://picsum.photos/id/123/500/300',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/500/300',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/500/300',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
]

const Slideshow = (props) => {
  const [animating, setAnimating] = useState(false)

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={props.activeIndex}
      next={() => props.next(animating)}
      previous={() => props.previous(animating)}
      dark={false}
      slide={true}
      className="text-center bg-dark"
    >
      <CarouselIndicators
        items={items}
        activeIndex={props.activeIndex}
        onClickHandler={(newIndex) => props.goToIndex(animating, newIndex)}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={() => props.previous(animating)}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={() => props.next(animating)}
      />
    </Carousel>
  )
}

export default Slideshow
