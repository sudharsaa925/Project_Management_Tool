import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
`;

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 320px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: ${(props) => (props.disabled ? "#ccc" : "#2575fc")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#1a5bbd")};
  }
`;

const SocialButton = styled(Button)`
  background: ${(props) => (props.google ? "#db4437" : "#333")};
  
  &:hover {
    background: ${(props) => (props.google ? "#c1351d" : "#1a1a1a")};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledLink = styled.p`
  margin-top: 10px;
  font-size: 14px;

  a {
    color: #2575fc;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError("Google authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const githubLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      setError("GitHub authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box>
        <h2>Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        <SocialButton google onClick={googleLogin} disabled={loading}>
          {loading ? "Please wait..." : "Login with Google"}
        </SocialButton>
        <SocialButton onClick={githubLogin} disabled={loading}>
          {loading ? "Please wait..." : "Login with GitHub"}
        </SocialButton>
        <StyledLink>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </StyledLink>
      </Box>
    </Container>
  );
}

export default Login;
