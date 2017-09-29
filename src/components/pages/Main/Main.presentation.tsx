/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage.container';
import ProgressPage from '../ProgressPage/ProgressPage.container';
import BaselineSensorPage from '../BaselineSensorPage/BaselineSensorPage.container';
import RealTimeSensorPage from '../RealTimeSensorPage/RealTimeSensorPage.container';
import NotFoundPage from '../NotFoundPage/NotFoundPage.presentation';


/************************************/
/*            INTERFACES            */
/************************************/
interface IMainProps {}


/**
 * @desc Represent Main Structure which contains Routes List
 * @function Main
 * @type STATELESS FUNCTIONAL COMPONENT (SFC)
 * @returns page view & routes list
 */
const Main: React.SFC<IMainProps> = () => {
    return (
        <main>
            <div className="AppContent">
                <Switch>
                    {/* tslint:disable-next-line:jsx-boolean-value */}
                    <Route exact path="/" component={HomePage} />
                    <Route path="/progress" component={ProgressPage} />
                    <Route path="/baseline/config" component={BaselineSensorPage} />
                    <Route path="/sensor/config" component={RealTimeSensorPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </main>
    );
};


/* Export */
export default Main;