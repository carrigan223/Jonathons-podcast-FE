import "./App.css";
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import Home from "./views/Home";
import EpisodeList from "./views/ListEpisodes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import TopBar from "./components/header/TopBar";

const history = createBrowserHistory();

const AppContainer = styled.div`
  display: flex;

  flex: 1;
  /* height: 100vh;
  width: 100vw; */
  background-color: black;
  color: white;
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router history={history}>
      <AppContainer>
        <VerticalNavBar />
        <BodyContainer>
          <TopBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
