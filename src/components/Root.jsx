import React, {Component, PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from 'components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import themeConfig from 'common/themeConfig';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import configureStore from 'common/configureStore';
import routes from 'routes';

injectTapEventPlugin();

export const store = configureStore();

class Root extends Component {
  render = () => (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(themeConfig)}>
        <App routes={routes}/>
      </MuiThemeProvider>
    </Provider>
  )
}

export default Root;
