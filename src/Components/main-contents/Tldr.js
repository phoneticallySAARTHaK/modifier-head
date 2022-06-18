import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'

const Tldr = (props) => {
  const [open, setOpen] = useState('')
  const toggle = (id) => {
    open === id ? setOpen('') : setOpen('1')
  }

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">TL;DR</AccordionHeader>
          <AccordionBody accordionId="1"></AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Tldr
