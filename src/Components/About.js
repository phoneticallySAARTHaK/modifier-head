function About(props) {
  return (
    <>
      <h2>About</h2>

      <p>
        <strong>Some random quote for no reason:</strong>
      </p>
      <blockquote className="blockquote">
        Most of the good programmers do programming not because they expect to
        get paid or get adulation by the public, but because it is fun to
        program. <br />- Linus Torvalds
      </blockquote>

      <h3>Contributors</h3>

      <p>
        <a href="https://github.com/hxyro">
          <img
            className="rounded rounded-circle img-thumbnail col-4"
            alt="Shubham vyas profile pic"
            src="https://avatars.githubusercontent.com/u/81517539?v=4"
          />
        </a>

        <a href="https://github.com/phoneticallySAARTHaK">
          <img
            className="rounded rounded-circle img-thumbnail col-4"
            alt="Sarthak Batham profile pic"
            src="https://avatars.githubusercontent.com/u/71564671?v=4"
          />
        </a>
      </p>
    </>
  )
}

export default About
