import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const SettingsContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 25px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  transition: background 0.3s ease, color 0.3s ease;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: ${(props) => (props.darkMode ? "#333" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  transition: background 0.3s ease, color 0.3s ease;
`;

const ToggleSwitch = styled.input`
  width: 40px;
  height: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background: #0072ff;
  color: white;
  padding: 12px;
  border: none;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #005ecb;
  }
`;

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") === "true"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );
  const [privacy, setPrivacy] = useState(
    localStorage.getItem("privacy") || "Public"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("language", language);
    localStorage.setItem("privacy", privacy);
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
  }, [darkMode, notifications, language, privacy]);

  return (
    <SettingsContainer darkMode={darkMode}>
      <h2>⚙️ Settings</h2>

      <ToggleContainer>
        <span>Dark Mode</span>
        <ToggleSwitch
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </ToggleContainer>

      <ToggleContainer>
        <span>Enable Notifications</span>
        <ToggleSwitch
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </ToggleContainer>

      <ToggleContainer>
        <span>Language</span>
        <Select
          darkMode={darkMode}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </Select>
      </ToggleContainer>

      <ToggleContainer>
        <span>Privacy</span>
        <Select
          darkMode={darkMode}
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
        >
          <option>Public</option>
          <option>Private</option>
          <option>Friends Only</option>
        </Select>
      </ToggleContainer>

      <Button onClick={() => alert("Settings Saved Successfully! 🎉")}>
        Save Settings
      </Button>
    </SettingsContainer>
  );
}

export default Settings;
