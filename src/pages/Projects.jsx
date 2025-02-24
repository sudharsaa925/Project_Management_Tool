import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: ${(props) => (props.darkMode ? "#121212" : "#f4f4f4")};
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333")};
  transition: background 0.3s ease;
`;

// Sidebar
const Sidebar = styled.div`
  width: 250px;
  background: ${(props) => (props.darkMode ? "#1f1f1f" : "#fff")};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 0.5s ease-in-out;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.darkMode ? "#333" : "#0072ff")};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.darkMode ? "#444" : "#0051cc")};
  }
`;

// Main Content
const Content = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: ${(props) => (props.darkMode ? "#252525" : "#fff")};
  padding: 20px;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(255, 255, 255, 0.1)"
      : "0px 4px 10px rgba(0, 0, 0, 0.1)"};
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProjectActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  background: ${(props) => (props.primary ? "#28a745" : "#dc3545")};
  color: white;

  &:hover {
    transform: scale(1.05);
  }
`;

const FloatingAddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: #ff6a00;
  color: white;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    background: #ee0979;
  }
`;

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    { id: 1, name: "🚀 Project Alpha" },
    { id: 2, name: "📊 Project Beta" },
    { id: 3, name: "💡 Project Gamma" },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addProject = () => {
    const newName = prompt("Enter new project name:");
    if (newName) {
      setProjects([...projects, { id: projects.length + 1, name: newName }]);
    }
  };

  return (
    <Layout darkMode={darkMode}>
      {/* Sidebar Navigation */}
      <Sidebar darkMode={darkMode}>
        <h2>⚡ ProjectHub</h2>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/dashboard")}>
          🏠 Dashboard
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/settings")}>
          ⚙️ Settings
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => alert("Logged Out!")}>
          🚪 Logout
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </SidebarButton>
      </Sidebar>

      {/* Main Content */}
      <Content>
        <h2>📌 Your Projects</h2>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} darkMode={darkMode}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectActions>
                <ActionButton primary onClick={() => navigate(`/project/${project.id}`)}>
                  🔍 View
                </ActionButton>
                <ActionButton onClick={() => deleteProject(project.id)}>❌ Delete</ActionButton>
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>

      {/* Floating Add Button */}
      <FloatingAddButton onClick={addProject}>➕</FloatingAddButton>
    </Layout>
  );
}

export default Projects;
