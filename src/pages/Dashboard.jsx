import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ModalComponent from "../components/ModalComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #00c6ff, #0072ff);
`;

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: ${(props) => (props.disabled ? "#ccc" : "#0072ff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#005bb5")};
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const ProjectItem = styled.li`
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallButton = styled.button`
  background: ${(props) => props.color || "#0072ff"};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${(props) => props.hoverColor || "#005bb5"};
  }
`;

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(["Project A", "Project B"]);
  const [modal, setModal] = useState({ isOpen: false, action: "", index: null });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) navigate("/login");
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalOpen = (action, index = null) => {
    setModal({ isOpen: true, action, index });
  };

  const handleModalConfirm = (inputValue) => {
    if (!inputValue) return;

    if (modal.action === "create") {
      setProjects([...projects, inputValue]);
    } else if (modal.action === "edit" && modal.index !== null) {
      const updatedProjects = [...projects];
      updatedProjects[modal.index] = inputValue;
      setProjects(updatedProjects);
    }

    setModal({ isOpen: false, action: "", index: null });
  };

  const handleDeleteProject = (index) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  };

  if (loading) {
    return (
      <Container>
        <Box>
          <p>Loading...</p>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box>
        <h2>Welcome to Dashboard</h2>
        {user ? (
          <>
            <p><strong>Name:</strong> {user.displayName || "User"}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <h3>Your Projects</h3>
            <ProjectList>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ProjectItem key={index}>
                    {project}
                    <div>
                      <SmallButton color="#4caf50" hoverColor="#388e3c" onClick={() => navigate(`/project/${index}`)}>
                        View Details
                      </SmallButton>
                      <SmallButton color="#ff9800" hoverColor="#e68900" onClick={() => handleModalOpen("edit", index)}>
                        Edit
                      </SmallButton>
                      <SmallButton color="#f44336" hoverColor="#d32f2f" onClick={() => handleDeleteProject(index)}>
                        Delete
                      </SmallButton>
                    </div>
                  </ProjectItem>
                ))
              ) : (
                <p>No projects found</p>
              )}
            </ProjectList>

            <Button onClick={() => handleModalOpen("create")}>Create New Project</Button>
            <Button onClick={handleLogout} disabled={loading}>
              {loading ? "Logging out..." : "Logout"}
            </Button>
          </>
        ) : (
          <p>Redirecting...</p>
        )}
      </Box>

      {/* Modal Component for Creating/Editing Projects */}
      {modal.isOpen && (
        <ModalComponent
          isOpen={modal.isOpen}
          onClose={() => setModal({ isOpen: false, action: "", index: null })}
          onConfirm={handleModalConfirm}
          title={modal.action === "edit" ? "Edit Project" : "Create New Project"}
          placeholder="Enter project name"
          defaultValue={modal.index !== null ? projects[modal.index] : ""}
        />
      )}
    </Container>
  );
}

export default Dashboard;
