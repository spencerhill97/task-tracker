const ActiveProject = ({ project }) => {
  return (
    <section className="activeProject">
      <h2>{project ? project.name : "Active Project"}</h2>
    </section>
  );
};

export default ActiveProject;
