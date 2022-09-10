import React from "react";
import Slideshow from "./Slideshow";

const Projects = () =>  { 

const manicky = [{src: "img/manicky1.png", alt: "Homepage Máničky a soudruzi"}, {src: "img/manicky2.png", alt: "Textbox"}, {src: "img/manicky3.png", alt: "Časová osa"}, {src: "img/manicky4.png", alt: "Ukázka kvízu"}]
const piskvorky = [{src: "img/piskvorky1.png", alt: "Screenshot homepage"}, {src: "img/piskvorky2.png", alt: "Pravidla hry"}, {src: "img/piskvorky3.png", alt: "Ukázka hry"}]

return (<section id="projects">
<h2>Projekty</h2>
<div className="project-container">
  <div className="project-text">
<h3>Máničky a soudruzi</h3>
<p>role: spoluautor (programování v JavaScriptu, Reactu, stylování CSS, výběr textů)</p>
<p>
  Web věnovaný komunistickému režimu v tehdejším Československu.
  Časová osa, výběr několika zajímavých témat, lehčích i vážných,
  např. jak vypadal běžný život v Československu, proč se pořádaly
  zakázané koncerty, kam bylo možno vycestovat, jak vypadaly máničky
  nebo třeba politické monstrprocesy.
</p>
<p>
  Kvízové otázky: různé typy obsahu: výběr z možností, audio a 
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
  <Slideshow data= {manicky}/>
</div>

<div className="project-container">
  <div className="project-text">
<h3>Piškvorky</h3>
<p>role: autor (programování v JavaScriptu, HTML a CSS)</p>
<p>
  Hra piškvorky vytvořená v rámci Czechitas Digitální akademie Web
  2022 dle grafického návrhu.
</p>
<p>Technologie: JavaScript, HTML, CSS</p>
<p>
  <a href="https://jitkahla.github.io/piskvorky/" target="_blank" rel="noreferrer noopener">
    <img className="icon" src="img/link.png" alt="Externí odkaz" />Piškvorky
    </a>
</p>
</div>
<Slideshow data={piskvorky} />
</div>
</section>
)};

export default Projects;