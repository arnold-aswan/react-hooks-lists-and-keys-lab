import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technology = technologies.map((tech, index) => {
    return <span key={index}>{tech}</span>;
  });

  return (
    <div className="project-item" style={{ width: "auto" }}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technology}</div>
    </div>
  );
}

export default ProjectItem;
