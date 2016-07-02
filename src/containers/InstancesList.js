import { connect } from 'react-redux';

import instancesReducer from '../reducers/instances';
import { getInstances } from '../actions/instances';
import InstanceList from '../components/InstancesList/InstancesList';

function mapStateToProps(state) {
  return {
    instances: instancesReducer(state.get('instances'), getInstances()),
  };
}

export default connect(mapStateToProps)(InstanceList);
