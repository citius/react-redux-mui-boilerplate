import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {toggle} from 'actions/ui/sideBar';

const mapDispatchToProps = dispatch => ({
  onLeftIconButtonTouchTap: () => dispatch(toggle())
});

export default connect(
  null,
  mapDispatchToProps
)(AppBar);
