import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import employeeList from './employeeList';
import Login from './login';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/employeeListPage" component={employeeList} />
                </Switch>
            </Router>
        );
    }
}



