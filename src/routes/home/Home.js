import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import PreviewSection from '../../containers/PreviewSection';
import s from './Home.css';

function Home(props) {
  const { previews } = props;

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <PreviewSection previews={previews} />
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    requested_by: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
};

Home.contextTypes = {
  store: PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Home));
