import React, {Component} from 'react';
import Login from './components/Login';
import EmployeList from './components/EmployeList';
import {Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import loginAction from './redux/actions';
import {bindActionCreators} from 'redux';




class App extends Component {
   

  render(){
    return (
            <div className="container">
              
              <Switch>
                <Route exact path="/" render ={()=> (
                  <Login  {...this.props} isLoggin={this.props.auth.isLoggin} />
                )} />

                <Route path="/dashboard" render={()=> (
                   this.props.auth.isLoggin ? (<EmployeList user = {this.props.user}/>) :(<Redirect to ="/"/>) 
                )} /> 
                
              </Switch>
            </div>
        );
      }
  }
 
  const mapStateToProps = (state) =>{
    return {
        auth: state.auth,
        user: state.user
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({loginAction}, dispatch)
  }
const Apps = withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
export default Apps ;
