import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { View as CommonWrapper } from '../components/CommonWrapper/'
import { Provider } from 'react-redux'
import store from '../store/'
import { Home } from '../Home/'
import { List } from '../List'
import 'whatwg-fetch'
import './reset.css'
import './style.css'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
        <div className="main">
        	<Provider store={store}>
        		<Router history={browserHistory}>
			      	<Route path='/' component={CommonWrapper}>
			      		<Route path='/' component={Home}></Route>
			      		<Route path='/list' component={List}></Route>
			      	</Route>
			    </Router>
	    	</Provider>
        </div>
    );
  }
}

export default App;
