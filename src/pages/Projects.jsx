import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
const projects = [
  {
    id: 1,
    title: "DELIVERY SERVICE",
    imgSrc: "/peak-landing.png",
    imgAlt: "peak performance landing page",
    demoLink: "http://gsrlogistic.uz/",
    githubLink: "https://github.com/Alisher0903/logistika",
    description: `
      The main purpose of this website is to deliver products from a foreign country to its users on time! In this service, the main goal of the website is to maintain the loyalty of its users, to achieve this result, users can see their product vertual and see when it will arrive and the price of the service, all the products are added from the admin panel. Estimated earnings of this website are between $1000-$10,000 depending on the sales of the products.
      This program was completed and delivered to users directly within 10 days given 4 front end and 3 back end developers!
    `,
    technologies: {
      backend: "Java",
      frontend: "React Js",
      database: "Postgres SQL",
    },
    tools: ["Java", "Tailwind CSS", "React Js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Railway ",
    imgSrc: "/alibi-esports-landing.PNG",
    imgAlt: "alibi esports landing page",
    demoLink: "https://pch14.uz/",
    githubLink: "https://github.com/SardorbekCoder07/Railway_z",
    description: `
      This web application is aimed at facilitating the work of all railway enterprises in Kashkadarya region. Through this web program, we brought a net profit of $10,000 to the company!
    Currently, it is used by all railways, but only Kashkadarya currently uses it.
    Date: 06/13/2024`,
    technologies: {
      backend: "Spring Boot, Java",
      frontend: "React.js, JavaScript",
      database: "Postgres SQL",
    },
    tools: ["JavaScript", "React.js", "Spring Boot", "Java", "PostgreSQL"],
  },
  {
    id: 2,
    title: "IT City Academy ",
    imgSrc: "/itca.png",
    imgAlt: "alibi esports landing page",
    demoLink: "https://itcityacademy.uz/",
    githubLink: "https://github.com/Alisher0903/alisher-itca",
    description: `
     Our goal is to increase the interest of young people in the regions in modern professions, to educate them as specialists in a certain field and thereby to increase their value.`,
    technologies: {
      backend: "Spring Boot, Java",
      frontend: "Next.js, JavaScript",
      database: "Postgres SQL",
    },
    tools: ["JavaScript", "Next.js", "Spring Boot", "Java", "PostgreSQL"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });

    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  }, []);
  return (
    <div className="projects-page-container">
      <div className="projects-landing">
        <div className="project-headline"  data-aos="zoom-in">
          <div className="project-header-img" data-aos="zoom-in">
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
      <div id="project" className="projects-container" >
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-img" >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.imgSrc} alt={project.imgAlt} />
              </a>
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <b>Backend:</b> {project.technologies.backend}
                <br />
                <b>Frontend:</b> {project.technologies.frontend}
                <br />
                <b>Database:</b> {project.technologies.database}
              </p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <p key={tool}>{tool}</p>
                ))}
              </div>
              <div className="project-btns">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
