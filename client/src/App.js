import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css"

// React Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateAvatar from "./pages/UpdateAvatar";
import AllTeams from "./pages/AllTeams";
import Team from "./pages/Team";
import Results from "./pages/Results";
import PlayerProfile from "./pages/PlayerProfile";
import Error404 from "./pages/Error404";

// React Component
import Logo from "./components/Logo";
import PrimaryButton from "./components/PrimaryButton";

// Material-UI Component
import Box from '@material-ui/core/Box';

const styles = {
  box: {
    width: "100vw",
    height: "21vh",
    padding: "0 1rem"
  },
  priButton: {
    marginTop: "1rem",
    float: "right"
  }
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FFF"
    },
    primary: {
      light: "#F88717",
      main: "#F87C00",
      dark: "#E27100",
      contrastText: '#fff',
    },
    secondary: {
      light: "#2EC9F8",
      main: "#00BDF7",
      dark: "#009BCB",
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: [
      'Antonio'
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontSize: 16
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <CssBaseline>
        <Box style={styles.box}>
          <Logo />
          <PrimaryButton style={styles.priButton} message={"Log In"} />
        </Box> 
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/update-password" component={UpdatePassword} />
            <Route exact path="/update-avatar" component={UpdateAvatar} />
            <Route exact path="/all-teams" component={AllTeams} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/player-profile" component={PlayerProfile} />
            <Route component={Error404} />
          </Switch>
        </Router>
    </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
