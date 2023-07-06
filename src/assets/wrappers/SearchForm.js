import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: var(--primary-900);
    cursor: pointer;
    width: 100%;
    letter-spacing: 1px;
    text-shadow: 0 0 1px var(--primary-300);
    outline-color: var(--primary-600);
  }
  input[type="search"]::-webkit-search-cancel-button {
    cursor: pointer;
  }

  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default Wrapper;
