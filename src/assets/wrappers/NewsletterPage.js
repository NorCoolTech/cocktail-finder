import styled from "styled-components";

const Wrapper = styled.div`
  h4 {
    margin-bottom: 2rem;
    text-align: center;
  }
  input {
    outline: none;
  }
  button {
    width: 100%;
  }
  .error {
    color: red;
  }
  .error::after {
    content: "⚠️";
  }
`;

export default Wrapper;
