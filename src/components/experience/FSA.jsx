const FSA = () => {
  return (
    <>
      <div className="experience fsa">
        {/* <p className="experience-role"></p> */}
        <p className="experience-company-fsa">MY SKILLS</p>
        <div className="experience-description">
          <br></br>
          <ul>
            <li>
              Front end development: JavaScript, CSS3, HTML5, React, React Native, Tailwind CSS, Bootstrap5, jQuery,
              (toolkit)
            </li><br></br>
            <li>  
              Back end development: Java, C++, Axios, Services and APIs
            </li> 
            <br></br>
            <li>
              Data Systems: PostgreSQL, Sequelize, pg
            </li>
            <br></br>  
            <li>
              Object Oriented Programming, full-stack applications, Single-Page
              Applications
            </li>
            <br></br>
            <li>
              Expertise in developer tools & debugging: Git, Bash, Visual Studio
              Code, Chrome Developer Tools, Mocha and Chai testing frameworks,
              Firebase
            </li>
            <br></br>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/java.png" alt="java logo" />
          <img src="/toolkit-logos/css.png" alt="c++ logo" />
          <img src="/toolkit-logos/react.png" alt="react logo" />
          <img src="/toolkit-logos/postgres.png" alt="postgres logo" />
        </div>
      </div>
    </>
  );
};

export default FSA;
