import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const Sidebar = ({routes, open, onRequestChange}) => (
  <div className="menu__sidebar">
    <Drawer
      docked={false}
      width={200}
      open={open}
      onRequestChange={() => onRequestChange(open)}
    >
      <List>
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onClick={() => onRequestChange(open)}
            style={{display: 'block'}}
          >
            <ListItem primaryText={route.label} leftIcon={route.component.icon || null}/>
          </Link>
        ))}
      </List>
    </Drawer>
  </div>
);

Sidebar.propTypes = {
  routes: PropTypes.array,
  open: PropTypes.bool,
  onRequestChange: PropTypes.func
};

export default Sidebar;
