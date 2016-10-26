/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePreview, startEditingPreview, stopEditingPreview } from '../../actions';
import ListItem from '../ListItem';
import PreviewForm from '../PreviewForm';
import PreviewStatus from '../PreviewStatus';
import { getEmptyPreview } from '../../data/utils/previews';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string,
    owner: PropTypes.string,
    status: PropTypes.string,
  }),
  isEditing: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditStop: PropTypes.func.isRequired,
};

class PreviewListItem extends Component {

  constructor() {
    super();

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditStop = this.onEditStop.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onEditStart: () => void;
  onEditStop: () => void;
  onClear: () => void;
  onSave: () => void;

  onEditStart() {
    if (this.props.onEditStart) {
      this.props.onEditStart(this.props.preview);
    }
  }

  onEditStop() {
    if (this.props.onEditStop) {
      this.props.onEditStop(this.props.preview);
    }
  }

  onClear() {
    if (this.props.onSave) {
      this.props.onSave(getEmptyPreview(this.props.preview.id));
    }
  }

  // TODO: display a toast when save fails, with a retry button.
  onSave(preview) {
    this.onEditStop();

    if (this.props.onSave) {
      this.props.onSave(preview);
    }
  }

  renderActions() {
    return [
      <button key={'clear'} onClick={this.onClear}>Clear</button>,
      <button key={'edit'} onClick={this.onEditStart}>Edit</button>,
    ];
  }

  render() {
    const { preview, isEditing } = this.props;

    const item = {
      title: <a target={'_blank'} href={preview.url}>{preview.name}</a>,
      content: <a target={'_blank'} href={preview.url}>{preview.comment || 'No comment'}</a>,
    };

    if (isEditing) {
      return (
        <PreviewForm
          preview={preview}
          onSave={this.onSave}
          onClear={this.onClear}
        />
      );
    }

    return (
      <ListItem
        item={item}
        strip={<PreviewStatus status={preview.status} />}
        actions={this.renderActions()}
      />
    );
  }
}

PreviewListItem.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    onSave: (preview) => dispatch(updatePreview(preview)),
    onEditStart: (preview) => dispatch(startEditingPreview(preview)),
    onEditStop: (preview) => dispatch(stopEditingPreview(preview)),
  };
}

export default connect(undefined, mapDispatchToProps)(PreviewListItem);
