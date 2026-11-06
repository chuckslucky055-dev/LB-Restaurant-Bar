function App() {
  const phone = '+234 909 674 8800';
  return (
    <main className="page">
      <nav>
        <div className="logo">L&B</div>
        <div className="links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#location">Location</a>
          <a href={'tel:' + phone.replaceAll(' ', '')}>Call</a>
        </div>
      </nav>
      <section className="hero">
        <div>
          <small>RESTAURANT & BAR • ENEKA</small>
          <h1>
            Good food.
            <br />
            <i>Good moments.</i>
          </h1>
          <p>
            A clean digital home for L & B Restaurant and Bar. Explore the
            concept, find the restaurant and contact the team from any phone.
          </p>
          <div className="actions">
            <a className="btn" href="#menu">
              Explore menu →
            </a>
            <a className="outline" href={'tel:' + phone.replaceAll(' ', '')}>
              ☎ {phone}
            </a>
          </div>
        </div>
        <div className="heroArt">
          <div className="plate">🍽️</div>
          <b>L&B</b>
          <span>Restaurant & Bar</span>
        </div>
      </section>
      <section id="about" className="intro">
        <small>WELCOME</small>
        <h2>
          A digital home for <i>L & B.</i>
        </h2>
        <p>
          Everything customers need most, in one simple place: what you serve,
          where to find you and how to reach you.
        </p>
      </section>
      <section id="menu" className="menu">
        <div className="head">
          <div>
            <small>THE MENU</small>
            <h2>Customer favourites</h2>
          </div>
          <span>DEMO CONTENT</span>
        </div>
        <p className="note">
          The dishes and prices below are placeholders for this demo and should
          be replaced with L & B's confirmed menu before launch.
        </p>
        <div className="cards">
          <article>
            <div>🍛</div>
            <h3>Jollof Rice & Chicken</h3>
            <p>Sample menu item</p>
          </article>
          <article>
            <div>🍚</div>
            <h3>Fried Rice & Chicken</h3>
            <p>Sample menu item</p>
          </article>
          <article>
            <div>🐟</div>
            <h3>Grilled Fish</h3>
            <p>Sample menu item</p>
          </article>
        </div>
      </section>
      <section id="location" className="location">
        <div>
          <small>COME BY</small>
          <h2>Find L & B.</h2>
          <p>
            <b>Address</b>
            <br />
            54 Rumuowha-Eneka Road, Eliowani, Eneka, Rivers, Nigeria
          </p>
          <p>
            <b>Phone</b>
            <br />
            <a href={'tel:' + phone.replaceAll(' ', '')}>{phone}</a>
          </p>
        </div>
        <div className="map">
          <span>📍</span>
          <b>Eliowani • Eneka</b>
        </div>
      </section>
      <section className="cta">
        <div>
          <small>READY WHEN YOU ARE</small>
          <h2>Let's make your next visit easy.</h2>
        </div>
        <a href={'tel:' + phone.replaceAll(' ', '')}>Contact L & B →</a>
      </section>
      <footer>
        <b>L&B Restaurant & Bar</b>
        <span>Website concept • Rivers, Nigeria</span>
      </footer>
    </main>
  );
}
export default App;
