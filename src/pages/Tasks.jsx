import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
  background: ${(props) => (props.darkMode ? "#1f1f1f" : "#007bff")};
  color: white;
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
  background: ${(props) => (props.darkMode ? "#333" : "#0051cc")};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.darkMode ? "#444" : "#003ea5")};
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

// Task List Styles
const TaskList = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const TaskItem = styled.div`
  background: ${(props) => (props.darkMode ? "#252525" : "#fff")};
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(255, 255, 255, 0.1)"
      : "0px 4px 10px rgba(0, 0, 0, 0.1)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const TaskTitle = styled.span`
  font-size: 1rem;
`;

const TaskButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  background: ${(props) => (props.completed ? "#1db954" : "#ff6a00")};
  color: white;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.completed ? "#17a747" : "#ee0979")};
  }
`;

// Floating Add Button
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

function Tasks() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete UI Design", completed: false },
    { id: 2, title: "Fix Backend Issues", completed: true },
    { id: 3, title: "Update Documentation", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Layout darkMode={darkMode}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode}>
        <h2>✅ Tasks</h2>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/dashboard")}>
          📊 Dashboard
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/projects")}>
          📁 Projects
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/profile")}>
          👤 Profile
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => navigate("/settings")}>
          ⚙️ Settings
        </SidebarButton>
        <SidebarButton darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </SidebarButton>
      </Sidebar>

      {/* Main Content */}
      <Content>
        <h1>Your Tasks 📋</h1>
        <p>Manage your tasks efficiently and track progress.</p>

        {/* Task List */}
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id} darkMode={darkMode}>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskButton
                completed={task.completed}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? "Completed ✅" : "Mark as Done"}
              </TaskButton>
            </TaskItem>
          ))}
        </TaskList>
      </Content>

      {/* Floating Add Button */}
      <FloatingAddButton onClick={() => alert("New Task Coming Soon!")}>
        ➕
      </FloatingAddButton>
    </Layout>
  );
}

export default Tasks;
