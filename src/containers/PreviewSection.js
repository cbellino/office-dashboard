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
  const { previews } = props;
  // TODO: remove this and use previews.isLoading prop instead.
  const isLoading = !previews || previews.length === 0;

  return (
    <Section title={'Previews'}>
      {!isLoading ? (
        <List items={previews} renderItem={renderItem} />
      ) : 'Loading'}
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
};

function mapStateToProps(state) {
  const { previewsPerPage, entities: { previews } } = state;
  const {
    isFetching,
    items,
  } = previewsPerPage[1] || {
    isFetching: true,
    items: [],
  };

  return {
    previews: isFetching ? [] : items.map((id) => previews[id]),
    isFetching,
  };
}

export default connect(mapStateToProps)(PreviewSection);
