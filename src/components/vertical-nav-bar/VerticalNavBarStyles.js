import styled from "styled-components";
import { Link } from "react-router-dom";
const VerticalNavBarContainer = styled("div")`
  background-color: #181818;
  color: #b3b3b3;
  height: 100vh;
  width: 17vw;
  display: flex;
  flex-direction: column;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  color: cyan;
  text-shadow: 2px 2px 10px cyan;
`;
const LinkContainer = styled.div`
  margin: 20px;
  height: 50%;
`;
const LinkTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: white;
`;
const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
`;
const LinkItem = styled.span`
  display: flex;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  color: #b3b3b3;
  :hover {
    color: cyan;
    text-shadow: 1px 1px 10px white;
  }
`;

const LinkIcon = styled.i`
  padding: 10px;
  /* ${StyledLink}:hover & { 
    color: white;
  } */
`;

// const LinkWrapper = styled.div`
// background-color: beige;
// display: flex;
//   align-items: center;
//   padding: 5px 10px;

// `;

// const StyledLink = styled(Link)`
//   padding: 10px;
//   ${Link} a:hover {
//     color: white
//   }
// `;
export {
  VerticalNavBarContainer,
  IconContainer,
  LinkContainer,
  LinkTitle,
  LinkItem,
  LinkList,
  LinkIcon,
  StyledLink,
};
