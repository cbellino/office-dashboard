import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import PreviewSection from '../../containers/PreviewSection';
import { fetchPreviews } from '../../actions';
import s from './Home.css';

class Home extends Component {

  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <PreviewSection />
          </div>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

Home.contextTypes = {
  store: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchPreviews()),
  };
}

export default connect(undefined, mapDispatchToProps)(withStyles(s)(Home));
