import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Strip from '../../components/Strip';
import s from './Home.css';

const renderItem = (preview) => {
  const item = {
    key: preview.key,
    title: preview.name,
    content: preview.comment,
  };
  const status = (preview.status !== 'free') ? 'busy' : 'free';
  const stripVariant = (status === 'busy') ? 'error' : 'success';

  return (
    <ListItem
      key={item.key}
      item={item}
      strip={<Strip variant={stripVariant}>{status}</Strip>}
    />
  );
};

function Home(props) {
  const { previews } = props;

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <Section title={'Previews'}>
            <List items={previews} renderItem={renderItem} strip />
          </Section>
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

export default withStyles(s)(Home);
