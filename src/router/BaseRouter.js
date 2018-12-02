import React ,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import App from '../containers/App';
import HomeContainer from "../containers/HomeContainer";
import ProgressContainer from "../containers/ProgressContainer";
import TagContainer from "../containers/TagContainer";
import DataContainer from "../containers/DataContainer";
import Logout from "../containers/LogoutContainer";
import {Utils} from '../utils/Utils';
import {Redirect} from 'react-router-dom';




class BaseRouter extends Component{

    onLoggedIN = () =>{
        if(Utils.isLoggedIn()=== true){
            return (
                <div>
                <Route path="/home" component={HomeContainer} />
                <Route path="/tag" component={TagContainer} />
                <Route path="/data" component={DataContainer} />
                <Route path="/logout" component={Logout} />
                </div>
            );
        }
    }
    render(){
        const store =this.props.store;
        return (
            <Provider store={store}>
            <Router>
                <div>
                <ProgressContainer />
                <Route exact path="/" component={App} />
                <PrivateRoute path="/home" component={HomeContainer} />
                <PrivateRoute path="/tag" component={TagContainer} />
                <PrivateRoute path="/data" component={DataContainer} />
                <PrivateRoute path="/logout" component={Logout} />
                </div>
         </Router>
            </Provider>

        );


       
    }

    
}

export default BaseRouter;

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            Utils.isLoggedIn()=== true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )};