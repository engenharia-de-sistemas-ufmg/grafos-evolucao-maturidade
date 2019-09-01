import { connect } from 'react-redux';
import Page from './Page';

const mapStateToProps = (state) => ({
  loaded: state.page.loaded,
  graph: state.graph,
});

export default connect(
  mapStateToProps,
  null,
)(Page);
