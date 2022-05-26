import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 64px;
    font-family: Impact;
  }
  p {
    font-size: 32px;
    font-weight: bold;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 300px;
    height: 50px;
    font-size: 24px;
    margin-right: 50px;
    border-radius: 6px;
    border: 1px solid #cccccc;
  }
  #inputBtn {
    width: 100px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #cccccc;
    border-radius: 300px;
  }
  #inputBtn:active {
    transform: scale(0.98);
  }
  #listBtn {
    margin-left: 50px;
    border-radius: 50%;
  }
  #editBtn {
    margin-left: 15px;
    border-radius: 50%;
    font-weight: 600;
  }
  li {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

export default Wrapper;
