import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

// Styled Modal Container
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

// Modal Title
const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Styled Input Field
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #0072ff;
    box-shadow: 0px 0px 5px rgba(0, 114, 255, 0.5);
  }
`;

// File Input Container
const FileInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border: 2px dashed #0072ff;
  border-radius: 8px;
  background: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #0072ff;
  transition: background 0.3s;

  &:hover {
    background: #e6f0ff;
  }
`;

// File Name Display
const FileName = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
  font-weight: bold;
`;

// Button Container
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

// Styled Buttons
const ModalButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
  
  background: ${(props) => (props.danger ? "#ff4d4d" : "#0072ff")};
  color: white;
  margin: 0 5px;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.danger ? "#cc0000" : "#005bb5")};
  }
`;

function ModalComponent({ isOpen, onClose, onConfirm, title, placeholder, defaultValue = "" }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle File Upload
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        content: {
          width: "350px",
          height: "280px",
          margin: "auto",
          padding: "0px",
          borderRadius: "12px",
          border: "none",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        
        {/* Text Input */}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />

        {/* File Upload */}
        <FileInputContainer>
          Upload File
          <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
        </FileInputContainer>

        {/* Display Selected File Name */}
        {selectedFile && <FileName>{selectedFile.name}</FileName>}

        {/* Buttons */}
        <ButtonContainer>
          <ModalButton onClick={() => onConfirm(inputValue, selectedFile)}>Confirm</ModalButton>
          <ModalButton danger onClick={onClose}>Cancel</ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
}

export default ModalComponent;
