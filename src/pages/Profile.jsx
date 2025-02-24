import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Default Profile Image
import defaultProfileImage from "../assets/default-profile.png";

const ProfileContainer = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 25px;
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
  color: ${(props) => (props.darkMode ? "#f0f0f0" : "#000")};
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #007bff;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: inline-block;
  padding: 8px 15px;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  text-align: left;
  margin-top: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background: ${(props) => (props.darkMode ? "#333" : "#fff")};
  color: ${(props) => (props.darkMode ? "#f0f0f0" : "#000")};
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;

function Profile({ darkMode }) {
  const navigate = useNavigate();

  // Load from localStorage if available
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || defaultProfileImage);
  const [name, setName] = useState(localStorage.getItem("name") || "John Doe");
  const [email, setEmail] = useState(localStorage.getItem("email") || "johndoe@example.com");
  const [role, setRole] = useState(localStorage.getItem("role") || "Project Manager");
  const [isEditing, setIsEditing] = useState(false);

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl); // Save to localStorage
    }
  };

  // Save Edited Profile
  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    setIsEditing(false);
  };

  return (
    <ProfileContainer darkMode={darkMode}>
      <h2>👤 My Profile</h2>

      {/* Profile Image */}
      <ProfileImage src={profileImage} alt="Profile" />

      {/* Upload Profile Picture */}
      <div>
        <FileInput id="fileUpload" type="file" accept="image/*" onChange={handleImageChange} />
        <UploadLabel htmlFor="fileUpload">Upload Photo</UploadLabel>
      </div>

      {/* User Details */}
      <UserInfo>
        <label><strong>Name:</strong></label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditing} darkMode={darkMode} />

        <label><strong>Email:</strong></label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} darkMode={darkMode} />

        <label><strong>Role:</strong></label>
        <Input type="text" value={role} onChange={(e) => setRole(e.target.value)} disabled={!isEditing} darkMode={darkMode} />
      </UserInfo>

      {/* Buttons */}
      <div>
        {isEditing ? (
          <Button primary onClick={handleSave}>💾 Save</Button>
        ) : (
          <Button primary onClick={() => setIsEditing(true)}>✏️ Edit</Button>
        )}
        <Button onClick={() => navigate("/dashboard")}>⬅ Back to Dashboard</Button>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
