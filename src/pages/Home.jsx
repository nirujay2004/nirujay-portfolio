function Home() {
  return (
    <section className="home">
      <div className="home-content">

        <p className="eyebrow">
          SOFTWARE ENGINEER · STUDENT ✦
        </p>

        <h1>
          HI, I'M
          <br />
          <span>NIRUJAY.</span>
        </h1>

        <p className="intro">
          I build things, break things,
          <br />
          and figure out why they broke.
        </p>

        <div className="home-buttons">
          <a href="/projects" className="button primary">
            View my work →
          </a>

          <a href="/about" className="button secondary">
            About me
          </a>
        </div>

      </div>

      <div className="home-decoration">
        <div className="doodle">
          ✦
        </div>

        <div className="hello-card">
          <span>currently</span>
          <strong>building things</strong>
          <small>and learning along the way.</small>
        </div>

        <div className="heart">♡</div>
      </div>
    </section>
  );
}

export default Home;