import React from 'react';
import TopBar from './components/toolbar/Topbar'
import Sidebar from "./components/sidebar/sidebar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from "./pages/userList/UserList";

const App = () => {
    return (
        <Router>
            <TopBar/>
            <div className="container">
                <Sidebar/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/users'}>
                    <UserList/>
                </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;