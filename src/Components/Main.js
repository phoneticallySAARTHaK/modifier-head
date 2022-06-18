import { Container, Row, Col } from 'reactstrap'
import Example from './Example'
import Intro from './Intro'
import Uses from './Uses'

// TODO
function Main(props) {
  return (
    <main>
      <section>
        <Intro />
      </section>
      <section>
        <Example />
        <Uses />
      </section>
    </main>
  )
}

export default Main
