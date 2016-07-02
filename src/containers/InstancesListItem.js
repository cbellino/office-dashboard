import { connect } from 'react-redux';

import personReducer from '../reducers/people';
import { getPerson } from '../actions/people';
import InstancesListItem from '../components/InstancesList/InstancesListItem';

function mapStateToProps(state, { instance }) {
  return {
    manager: personReducer(state, getPerson(instance.get('manager'))),
  };
}

export default connect(mapStateToProps)(InstancesListItem);
