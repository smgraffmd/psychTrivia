import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import CreateGamePage from '../components/CreateGamePage';
import LobbyPage from '../components/LobbyPage';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header history={history}/>
            <Switch>
                <Route exact={true} path="/" component={DashboardPage} />
                <Route  path="/create" component={CreateGamePage} />
                <Route  path="/lobby" component={LobbyPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;