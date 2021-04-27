import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function NavRoutes(){
    return(
           <HashRouter>
                <Switch>
                    <Route 
                     exact={true}
                     path='/'
                     name= 'HomePage'
                     render={(e,props) => (<Homepage {...e} data={props} />)}
                     ></Route>
                     <Route
                      exact={true}
                      path="/Login"
                      name="Login Page"
                      render={(e,props) => (<LoginForm {...e} data={props}/>)}>
                     </Route>


                     <Route
                      exact={true}
                      path="/SignUp"
                      name="Login Page"
                      render={(e,props) => (<SignUpForm {...e} data={props}/>)}>
                     </Route>
                </Switch>
           </HashRouter>)
}
export default NavRoutes;