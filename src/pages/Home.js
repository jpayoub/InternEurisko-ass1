import React from 'react'
import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className='about'>
    <div>
      <h1>Jean-Pierre Ayoub</h1>
      <p><b>Address:</b> Rashiine-Zgharta, North Lebanon</p>
      <p><b>Phone</b> <a href="tel:+96176172074">+961 76 172074</a></p>
      <p><b>Email:</b> <a href="mailto:jeanpierre.aub@hotmail.com"> jeanpierre.aub@hotmail.com</a></p>
      <p><b>Date of Birth</b>  May 12, 2001</p>
    </div>
      <hr />

      <div className="obj">
        <h2 className="title"><b>Objective</b>:</h2>
        <p className="paragraph">A software engineer student, bringing nine semesters of 
                                programming experience in Python, Java, and C++, HTML, PHP, 
                                SQL database, and Linux operating system, desiring a role to 
                                bring solid knowledge of programming, and obtain a great
                                experience.
        </p>
      </div>
      <hr />



      <div className="obj">
        <h2><b>Technical Skills</b>:</h2>
        <br />
        <div>
        <div><h3 className="title">Software: </h3>
        <p className="paragraph">Microsoft Office (Word, Excel, PowerPoint), Adobe CS6 
                                  (Photoshop, Illustrator), Visual studio 2017, Netbeans, VMware 
                                  workstation pro, MATLAB, Visual Studio code.
        </p>
        </div>
        <br/>
        <div>
        <h3 className="title">Database operation: </h3>
        <p className="paragraph">SQL server managment studio, MySQL 
            workbench 6.3 CE.
        </p>
        </div>
        <br />
        <div>
        <h3 className="title">Programming: </h3>
        <p className="paragraph">HTML 5, css, Bootstrap 4, JavaScript ES6, jQuery,
                                  SQL, Laravel, C#
        </p>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Home;