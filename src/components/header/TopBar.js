import React from "react";
import { TopBarStylesContainer, TitleLink } from "./TopBarStylesContainer";
import UserIcon from "./UserIcon";
const TopBar = () => {
  return (
    <TopBarStylesContainer>
      <TitleLink to="/">Top Bar</TitleLink>
      <UserIcon></UserIcon>
    </TopBarStylesContainer>
  );
};

export default TopBar;
