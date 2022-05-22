import styled from "styled-components";

export default function TopBar() {
  return (
    <NavBar>
      <h1>CINEFLEX</h1>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  background-color: #C3CFD9;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font-size: 34px;
    color: #E8833A;
  }
`;