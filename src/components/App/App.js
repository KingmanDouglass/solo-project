import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import ConsultForm from '../ConsultForm/ConsultForm';
import Location from '../Location/Location';
import FAQ from '../FAQ/FAQ';
import PendingAppointment from '../PendingAppointment/PendingAppointment';
import Admin from '../Admin/Admin'
import SelectedUser from '../SelectedUser/SelectedUser'
import LogOutPage from '../LogOutPage/LogOutPage'

import './App.css';

class App extends Component {

  //get the user that is currently logged in
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }


//set up routes for the router and what is being displayed
  render() {
    console.log('where is my route - props', this.props);
    
    return (
      <Router> 
        <div>
          {/* {this.condtionalRednder()} */}
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/form"
              component={ConsultForm}
            />
            <ProtectedRoute
              exact
              path="/location"
              component={Location}
            />
            <ProtectedRoute
              exact
              path="/faq"
              component={FAQ}
            />
            <ProtectedRoute
              exact
              path="/pendingappointment"
              component={PendingAppointment}
            />
             <ProtectedRoute
              exact
              path="/admin"
              component={Admin}
            />
            <ProtectedRoute
              exact
              path="/selecteduser"
              component={SelectedUser}
            />
            <ProtectedRoute
              exact
              path="/logoutpage"
              component={LogOutPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
