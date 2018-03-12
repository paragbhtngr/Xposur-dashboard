import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import pages
import Login from './pages/login/login';
import PasswordReset from './pages/login/passwordreset';

import UserDashboard from './pages/user/dashboard';
import UserFeedback from './pages/user/feedback';
import UserLatestNews from './pages/user/latestNews';
import UserMessages from './pages/user/messages';
import UserProfile from './pages/user/profile';
import UserXperiences from './pages/user/xperiences';
import UserXperiencePage from './pages/user/xperiencePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch> 
          {/* Login Screens */}
          <Route exact path='/' component={Login}/> 
          <Route path='/password-reset/' component={PasswordReset}/> 
          {/* User Screens */}
          <Route path='/user/dashboard' component={UserDashboard}/> 
          <Route path='/user/feedback' component={UserFeedback}/> 
          <Route path='/user/latestnews' component={UserLatestNews}/> 
          <Route path='/user/messages' component={UserMessages}/> 
          <Route path='/user/profile' component={UserProfile}/> 
          <Route exact path='/user/xperiences' component={UserXperiences}/> 
          <Route path='/user/xperiences/:xperienceId' component={UserXperiencePage}/> 
          {/* Vendor Screens */}
          <Route path='/vendor/dashboard' component={PasswordReset}/> 
          {/* HR Screens */}
          <Route path='/hr/dashboard' component={PasswordReset}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
