import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthLinksContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  padding: 0 20px;
`;

const AuthLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #404040;
  padding: 7px;
  border-radius: 33px;
  background-color: #404040;


  :hover {
      box-shadow: 2px 2px 20px white;
  }
`;

export { AuthLinksContainer, AuthLink };
