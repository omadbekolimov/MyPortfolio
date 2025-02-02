const Bloomberg = () => {
  return (
    <>
      <div className="experience bloomberg">
        <p className="experience-role">Data Engineer Co-op</p><br />
        <p className="experience-company">Bloomberg</p><br />
        <div className="experience-description">
          <ul>
            <li>
              Revamped a manual process involving JIRA to be completely
              automated, attaining a 95% reduction in employee time spent and
              deprecating the previously inefficient workflow
            </li><br />
            <li>
              Authored documentation for a newly organized team that contained
              the fundamentals of web acquisition and data analysis
            </li><br />
            <li>
              Developed, maintained, and performed quality assurance on web
              crawlers to obtain and analyze data for distribution that is
              displayed on the Bloomberg Terminal.
            </li><br />
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/java.png" alt="java logo" />
          <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
          <img
            src="/toolkit-logos/jupyter-notebook.png"
            alt="jupyter-notebook logo"
          />
          <img src="/toolkit-logos/jira.png" alt="jira logo" />
        </div>
      </div>
    </>
  );
};

export default Bloomberg;
