import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import List from '../components/List';
import PreviewListItem from '../components/PreviewListItem';

function renderItem(preview, states) {
  const isEditing = states[preview.id] && states[preview.id].isEditing;

  return (
    <PreviewListItem
      key={preview.id}
      preview={preview}
      isEditing={isEditing}
    />
  );
}

class PreviewSection extends Component {

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { previews, states, isFetching } = this.props;

    return (
      <Section title={'Previews'} loading={isFetching}>
        <List
          items={previews}
          renderItem={(preview) => renderItem(preview, states)}
        />
      </Section>
    );
  }
}

PreviewSection.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })),
  states: PropTypes.objectOf(PropTypes.shape({
    isEditing: PropTypes.bool,
  })),
  isFetching: PropTypes.bool,
};

function mapStateToProps(state) {
  const { home, entities } = state;
  const {
    isFetching,
    items = [],
    states,
  } = home.previews;

  return {
    previews: items.map((id) => entities.previews[id]),
    states,
    isFetching,
  };
}

export default connect(mapStateToProps)(PreviewSection);
