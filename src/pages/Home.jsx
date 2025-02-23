import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background: white;
  color: #0072ff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #0072ff;
    color: white;
  }
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to Home Page</Title>
      <Nav>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </Nav>
    </Container>
  );
}

export default Home;
