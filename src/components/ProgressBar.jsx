const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${(props) => (props.darkMode ? "#333" : "#ddd")};
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;

  div {
    width: ${(props) => props.progress}%;
    height: 100%;
    background: ${(props) => (props.darkMode ? "#1db954" : "#007bff")};
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
  }
`;
