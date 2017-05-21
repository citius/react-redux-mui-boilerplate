import {connect} from 'react-redux';
import Sidebar from 'components/Menu/Sidebar';
import {toggle} from 'actions/ui/sideBar';
import {get} from 'lodash';

const mapStateToProps = state => ({
  open: state.ui.sideBar.open
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  onRequestChange: (currentOpen) => dispatch(toggle(currentOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
