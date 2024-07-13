import { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return (
    <div className="projects-page-container">
      <div className="projects-landing">
        <div className="project-headline">
          <div className="project-header-img">
            <img src="/testimg.jpg" />
          </div>
          <div className="project-page-header">
            <p>
              WHERE<br></br>IDEAS<br></br>
              <span>BEGIN.</span>
            </p>
            <div className="project-page-headline-btn">
              <a href="#project">See my work</a>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="projects-container">
        <div className="project">
          <div className="project-img">
            <a
              href="http://gsrlogistic.uz/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/peak-landing.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">DELIVERY SERVICE</h2>
            <p>
              The main purpose of this website is to deliver products from a
              foreign country to its users on time! In this service, the main
              goal of the website is to maintain the loyalty of its users, to
              achieve this result, users can see their product vertual and see
              when it will arrive and the price of the service, all the products
              are added from the admin panel. Estimated earnings of this website
              are between $1000-$10,000 depending on the sales of the products.
            </p>
            <p>
              This program was completed and delivered to users directly within
              10 days given 4 front end and 3 back end developers! The
              technologies used to create this website 
              <br/><br />
              <b>Backend: Java</b><br />
              <b>Front:React Js</b> <br />
               <b>Database: Postgres SQL</b>
            </p>
            <div className="project-tools">
              <p>Java</p>
              <p>Tailwind CSS</p>
              <p>React Js</p>
              <p>PostgreSQL</p>
            </div>
            <div className="project-btns">
              <a
                href="http://gsrlogistic.uz/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/Alisher0903/logistika"
                target="_blank"
                rel="noopen noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a
              href="https://itcityacademy.uz/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/alibi-esports-landing.PNG"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Alibi Esports</h2>
            <p>
              A website for the organization Alibi Esports, used to host
              organization information, tournament registration, and
              communication to players.
            </p>
            <p>
              This was developed by incorporating UX/UI, form handling, RESTful
              API, and database development to create an interactive and dynamic
              environment that handled communication and tournament registration
              while streamlining the user experience.
            </p>
            <div className="project-tools">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <div className="project-btns">
              <a
                href="https://alibi-esports.onrender.com/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/justindjsuh/alibi-esports-fe"
                target="_blank"
                rel="noopen noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
