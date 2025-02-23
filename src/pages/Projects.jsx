import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff6a00, #ee0979);
`;

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  background: #f0f0f0;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  background: #0072ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: #0051cc;
  }
`;

function Projects() {
  const navigate = useNavigate();

  // Sample projects
  const [projects] = useState([
    { id: 1, name: "Project Alpha" },
    { id: 2, name: "Project Beta" },
    { id: 3, name: "Project Gamma" },
  ]);

  return (
    <Container>
      <Box>
        <h2>📌 Your Projects</h2>
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              {project.name}
              <Button onClick={() => navigate(`/project/${project.id}`)}>🔍 View</Button>
            </ProjectItem>
          ))}
        </ProjectList>
        <Button onClick={() => navigate("/dashboard")}>⬅ Back to Dashboard</Button>
      </Box>
    </Container>
  );
}

export default Projects;
