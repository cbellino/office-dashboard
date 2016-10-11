import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import List from '../components/List';
import PreviewListItem from '../components/PreviewListItem';

function renderItem(preview) {
  return <PreviewListItem key={preview.id} preview={preview} />;
}

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
    comment: PropTypes.string,
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
