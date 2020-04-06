import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware,  createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import ReducersAll from 'reducers/all';

import ComponentsNavigation from "components/Navigation/Navigation";

import 'stylesheets/global.css';

import {MemoryRouter, Route} from "react-router";

import ScreensOverview from "screens/Overview";
import ScreensAccount from "screens/Account";
import ScreensInstance from "screens/Instance";
import ScreensScript from "screens/Script";
import ConstantsRoutes from "constants/Routes";
import ComponentsSocket from "components/Socket";

let store = createStore(ReducersAll, composeWithDevTools(applyMiddleware(thunk)));

const rootContent = (
    <Provider store={store}>
        <div className="app-wrapper">
            <ReactNotification />
            <MemoryRouter>
                <ComponentsNavigation />
                <Route exact path={ConstantsRoutes.OVERVIEW_SCREEN} component={ScreensOverview}/>
                <Route path={ConstantsRoutes.ACCOUNT_SCREEN} component={ScreensAccount}/>
                <Route path={ConstantsRoutes.INSTANCE_SCREEN} component={ScreensInstance}/>
                <Route path={ConstantsRoutes.SCRIPT_SCREEN} component={ScreensScript}/>
            </MemoryRouter>
        </div>
        <ComponentsSocket/>
    </Provider>
);

ReactDOM.render(
    rootContent,
    document.getElementById('root')
);
