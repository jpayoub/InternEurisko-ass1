import React from 'react';
import "../styles/Projects.css";
import ProjectItem from '../components/ProjectItem';
import saadnco from '../assets/LogoSaad&Co.jpg';
import lebtronic from '../assets/lebtronic.jpg';
import kanaanex from '../assets/logonbg.jpg';
import krysfit from '../assets/logoKrysfit.png';


function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
        <a target="_blank" href="https://www.lebtronic.com"><ProjectItem  name="Lebtronic" image={lebtronic} /></a>
        <a target="_blank" href="https://www.saadnco.com"><ProjectItem name="Saad&Co" image={saadnco} /></a>
        <a target="_blank" href="https://www.kanaanexcavations.com.au"><ProjectItem name="Kanaan Excavations" image={kanaanex} /></a>
        <a target="_blank" href="https://www.krys.fit"><ProjectItem name="KrysFit" image={krysfit} /></a>
      </div>
    </div>
  )
}

export default Projects;