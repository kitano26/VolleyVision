//import npm
//import slogo from './images/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//import pages
import Home from './pages/home';
import Login from './pages/login';
import fourohfour from './pages/404';
import Player_Dashboard from './pages/player_dashboard';
import Coach_Dashboard from './pages/coach_dashboard';
import Videos from './pages/video_page';
import Statistics from './pages/statistics'
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotpassword';
import Profile from "./pages/profile_page";
import EditProfile from "./pages/edit_profile_page";
import RecruiterTeam from './pages/recruiter_team';
import Dashboard from './pages/Dashboard';
import CreateMatches from './components/Matches/CreateMatches';
//import components
//import { fb } from './components/firebaseConfig';
import { AuthProvider } from './components/AccountAuth/authcontext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MatchDetails from './components/Matches/MatchDetails';
//import styles
import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/project/:id/' component={MatchDetails} />
            <Route path= "/home/" component={Home} />
            <Route path= "/404/" component={fourohfour} />
            <Route path = "/signup/" component={Signup} />
            <Route path= "/login/" component={Login} />
            <Route path= "/forgotpassword/" component={ForgotPassword} />
            <PrivateRoute path= "/recruiterteam/" component={RecruiterTeam} />
            <PrivateRoute path= "/profile/" component={Profile} />
            <PrivateRoute path= "/edit_profile/" component={EditProfile} />
            <PrivateRoute path="/player_dashboard/" component={Dashboard} />
            <PrivateRoute path="/coach_dashboard/" component={Dashboard} />
            <PrivateRoute path="/statistics/" component={Statistics} />
            <Route path='/videos/' component={Videos}/>
            <Route path='/create/' component={CreateMatches}/>
            <Route path="/">
              <Redirect exact from="/" to = "/home"/>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
