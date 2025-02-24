import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #007bff;
  color: white;
`;

const ProfileDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  background: white;
  color: black;
  width: 160px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 100;
  padding: 10px;
`;

const MenuItem = styled.div`
  padding: 12px 15px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background: #f1f1f1;
  }
`;

const LogoutItem = styled(MenuItem)`
  color: red;
  font-weight: bold;
  &:hover {
    background: #ffdddd;
  }
`;

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "/default-profile.png");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Update profile image from localStorage
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) setProfileImage(storedImage);

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <h2>🚀 Project Management Tool</h2>

      {/* Profile Dropdown */}
      <ProfileDropdown ref={dropdownRef}>
        {/* Profile Image (Click to Toggle Dropdown) */}
        <ProfileImage
          src={profileImage}
          alt="Profile"
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        />

        {/* Dropdown Menu */}
        <DropdownMenu show={showDropdown}>
          <MenuItem onClick={() => navigate("/profile")}>👤 Profile</MenuItem>
          <MenuItem onClick={() => navigate("/settings")}>⚙️ Settings</MenuItem>
          <LogoutItem onClick={() => navigate("/login")}>🚪 Logout</LogoutItem>
        </DropdownMenu>
      </ProfileDropdown>
    </HeaderContainer>
  );
}

export default Header;
