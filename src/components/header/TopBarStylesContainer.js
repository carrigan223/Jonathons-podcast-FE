import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBarStylesContainer = styled.header`
  height: 18vh !important;
  width: 100% !important;
  position: fixed top;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
`;

const TitleLink = styled(Link)`
  color: white;
  font-size: 3rem;
  padding: 0 20px;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 2px 2px 20px white;
  font-family: "Poppins";
`;

export { TopBarStylesContainer, TitleLink };
