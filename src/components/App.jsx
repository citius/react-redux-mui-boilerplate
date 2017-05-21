import React, {Component} from 'react';
import AppBar from 'containers/AppBar';
import Sidebar from 'containers/Menu/Sidebar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    const {routes} = this.props;

    return (
      <Router>
        <div className="app">
          <AppBar title="Myseobot" />
          <Sidebar routes={routes}/>
          <div className="app__content">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
        </div>
      </Router>
    ) 
  }
}

export default App;
  
