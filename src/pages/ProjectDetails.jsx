import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #0072ff;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.5;
`;

const FileContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 2px dashed #0072ff;
  border-radius: 8px;
  background: #f9f9f9;
`;

const FileName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  background: #0072ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #005bb5;
  }
`;

function ProjectDetails() {
  const { id } = useParams();

  // Fetch project details (Mock Data for now)
  const project = {
    id,
    title: "Sample Project",
    description: "This is a sample project description with details about the work done.",
    fileName: "example.pdf",
  };

  return (
    <Container>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      {/* File Display */}
      {project.fileName && (
        <FileContainer>
          <FileName>📁 {project.fileName}</FileName>
        </FileContainer>
      )}

      <BackButton onClick={() => window.history.back()}>⬅ Back</BackButton>
    </Container>
  );
}

export default ProjectDetails;
