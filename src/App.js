import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal isOpen={open} toggle={() => setOpen((prevOpen) => !prevOpen)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>Modal body text goes here.</ModalBody>
      </Modal>
      <Button color="danger" onClick={setOpen}>
        Danger!
      </Button>
    </>
  )
}

export default App
