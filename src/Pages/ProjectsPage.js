import Projects from "../Components/Projects/Projects";

const ProjectsPage = () => {
  document.body.scrollTop = 0;
  return (
    <div style={{ margin: "3em 0" }}>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
