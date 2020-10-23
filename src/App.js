import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthorizedRouteSignedOut from './components/auth/AuthorizedRouteSignedOut'
import AuthorizedRouteSignedIn from './components/auth/AuthorizedRouteSignedIn'
import { connect } from 'react-redux'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Dashboard from './components/dashboard/Dashboard'
import ActiveSurvey from './components/surveys/ActiveSurvey'
import SurveyHistory from './components/surveys/SurveyHistory'
import IndividualHistoryResults from './components/surveys/IndividualHistoryResults'
import ProfilePage from './components/Profile/UserProfile'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ResetPassword from './components/auth/ResetPassword'
import friendResultsPage from './components/Profile/friendResultsPage'
import FriendSurveyResults from './components/surveys/FriendSurveyHistory'
import Summary from './components/Profile/Summary'

import { ToastContainer, toast } from 'react-toastify';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) { this.setState({ hasError: true});}

  render() {
    if (this.state.hasError) {
      return (
        <div style={{textAlign: 'center'}}>
          <h3>Something went wrong, please navigate back to the home page</h3>
        </div>
      )
    }
    return this.props.children;
  }
}

function App(props) {
  const { auth } = props;
  return ( 
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <ErrorBoundary>       
              <Switch>
                <AuthorizedRouteSignedOut exact path='/' component={Dashboard} auth={auth}/>
                <AuthorizedRouteSignedIn exact path='/SignIn' component={SignIn} auth={auth}/>
                <AuthorizedRouteSignedIn exact path='/SignUp' component={SignUp} auth={auth}/>   
                <AuthorizedRouteSignedIn exact path='/ResetPassword' component={ResetPassword} auth={auth}/>   
                <AuthorizedRouteSignedOut exact path='/Profile' component={ProfilePage} auth={auth}/>
                <AuthorizedRouteSignedOut exact path='/ActiveSurvey/:id' component={ActiveSurvey} auth={auth}/>
                <AuthorizedRouteSignedOut exact path='/SurveyHistory/:id' component={SurveyHistory} auth={auth}/>
                <AuthorizedRouteSignedOut exact path='/SurveyHistoryResults/:id' component={IndividualHistoryResults} auth={auth}/>
                <AuthorizedRouteSignedOut exact path='/FriendSurveyHistory/:id' component={friendResultsPage} auth={auth}/>  
                <AuthorizedRouteSignedOut exact path='/FriendSurveyResults/:id' component={FriendSurveyResults} auth={auth}/> 
                <AuthorizedRouteSignedOut exact path='/Summary' component={Summary} auth={auth}/>      
              </Switch>               
          </ErrorBoundary>
        <Footer/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />      
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(App)