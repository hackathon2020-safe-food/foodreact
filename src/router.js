import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Enter from './newStyle/Enter';
import HomePage from './newStyle/HomePage';
import Show from './newStyle/Show'
class RouterWrap extends Component{
    render(){
    return(
        <div id='router'>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Enter} exact />
                    <Route path="/homePage" component={HomePage} exact />
                    <Route path='/show' component={Show} exact/>
                </Switch>
            </HashRouter>
        </div>
    )}
}

export default RouterWrap;