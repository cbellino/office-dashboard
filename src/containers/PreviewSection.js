import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Strip from '../components/Strip';

// TODO: move this into another file.
const renderItem = (preview) => {
  const status = (preview.status !== 'free') ? 'busy' : 'free';
  const stripVariant = (status === 'busy') ? 'error' : 'success';
  const url = preview.url;
  const item = {
    key: preview.id,
    title: <a target={'_blank'} href={url}>{preview.name}</a>,
    content: <a target={'_blank'} href={url}>{preview.comment}</a>,
  };

  return (
    <ListItem
      key={item.key}
      item={item}
      strip={<Strip variant={stripVariant}>{status}</Strip>}
      actions={[
        <span key={'clear'}>Clear</span>,
        <span key={'edit'}>Edit</span>,
      ]}
    />
  );
};

function PreviewSection(props) {
  const { previews, isFetching } = props;

  return (
    <Section title={'Previews'}>
      {isFetching ? (
        'Loading'
      ) : (
        <List items={previews} renderItem={renderItem} />
      )}
    </Section>
  );
}

PreviewSection.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })),
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { home, entities } = state;
  const {
    isFetching,
    items,
  } = home.previews;

  return {
    previews: isFetching ? [] : items.map((id) => entities.previews[id]),
    isFetching,
  };
}

export default connect(mapStateToProps)(PreviewSection);
