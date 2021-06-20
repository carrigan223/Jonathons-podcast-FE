import React from "react";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import { AuthLinksContainer, AuthLink } from "./UserIconStyles";
class UserIcon extends React.Component {
  render() {
    const logout = () => {
      AuthService.logout();
    };

    const renderAuthButton = () => {
      if (UserService.isAuth()) {
        return (
          <>
            <i className="fas fa-podcast fa-5x"></i>
            <AuthLink href="/signout" onClick={logout}>
              Log out
            </AuthLink>
          </>
        );
      } else {
        return (
          <AuthLinksContainer>
            <AuthLink href="/signin">Log-in</AuthLink>
            <AuthLink href="/signup">Sign up</AuthLink>
          </AuthLinksContainer>
        );
      }
    };

    return <div className="home-navbar-container">{renderAuthButton()}</div>;
  }
}
export default UserIcon;
