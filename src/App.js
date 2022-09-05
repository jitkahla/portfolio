import './App.css';

const App = () => 
    <div className="App">
       <div className="background">
      <header>
        <div className="logo">Jh</div>
        <div className="nav">
          <a href="#home">Domů</a>
          <a href="#about">O mně</a>
          <a href="#projects">Projekty</a>
          <a href="#contact">Kontakt</a>
        </div>
      </header>
      <main>
        <section id="home">
          <div className="intro">
            <h1>Jitka Hladká</h1>
            <p>Junior Frontend Developer</p>
          </div>
          <div className="photo-profile">
            <img src="img/jitka_profile.jpg" alt="Profilové foto" />
          </div>
        </section>
        <section id="about">
          <h2>O mně</h2>
          <p>V červnu 2022 jsem absolvovala Digitální akademii Web od Czechitas. Dále se vzdělávám v oblasti frontendového vývoje.  </p>
        </section>
        <section id="projects">
          <h2>Projekty</h2>
          <div className="project-container">
            <div className="project-text">
          <h3>Máničky a soudruzi</h3>
          <p>role: spoluautor (programování v JavaScriptu, Reactu, stylování CSS, výběr textů)</p>
          <p>
            Web věnovaný komunistickému režimu v tehdejším Československu.
            Časová osa, výběr několika zajímavých témat, lehčích i vážných,
            např. jak vypadal běžný život v Československu, proč se pořádaly
            zakázané koncerty, kam bylo možno vycestovat, jak vypadaly máničky
            nebo třeba politické monstrprocesy.
          </p>
          <p>
            Kvízové otázky: různé typy obsahu: výběr z možností, audio a
            videoukázky, klikací mapa, drag and drop
          </p>
          <p>Technologie: React, JavaScript, HTML, CSS</p>
          <p>
            Závěrečný projekt v rámci Czechitas Digitální akademie Web 2022.
          </p>
          <p>
            <img className="icon" src="img/award.png" alt="Ocenění" />Ocenění: Přesahový unicorn</p>
          <p>
            <a href="https://manickyasoudruzi.netlify.app/" target="_blank" rel="noreferrer noopener">
              <img className="icon" src="img/link.png" alt="Externí odkaz" />Máničky a
              soudruzi</a>
          </p>
        </div>
            <div className="slideshow-container">
<div className="slide">
  <img src="img/manicky1.png" alt="Screenshot homepage" />
</div>
<div className="slide">
  <img src="img/manicky2.png" alt="Screenshot textboxu" />
</div>
<div className="slide active">
  <img src="img/manicky3.png" alt="Screenshot časové osy" />
</div>

</div>
</div>
          <h3>Piškvorky</h3>
          <p>role: autor (programování v JavaScriptu, HTML a CSS)</p>
          <p>
            Hra piškvorky vytvořená v rámci Czechitas Digitální akademie Web
            2022 dle grafického návrhu.
          </p>
          <p>Technologie: JavaScript, HTML, CSS</p>
          <p>
            <a href="https://jitkahla.github.io/piskvorky/" target="_blank" rel="noreferrer noopener"
              ><img className="icon" src="img/link.png" alt="Externí odkaz" />Piškvorky</a
            >
          </p>
        </section>
      </main>
      <footer id="contact">
        <h2>Kontakt</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jitkahladka/">
            <img src="img/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/jitkahla">
            <img src="img/github.png" alt="github" />
          </a>
          <a href="mailto:jitka.hladka@gmail.com">
            <img src="img/email.png" alt="email" />
          </a>
        </div>
        <div className="author">© Jitka Hladká 2022</div>
      </footer>
    </div>
    </div>
  ;

export default App;
