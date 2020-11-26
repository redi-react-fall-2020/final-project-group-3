import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';

const Routes =()  =>{
    return(
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ='/header' component={Header}/>

    </Switch>
    )
}

export default Routes