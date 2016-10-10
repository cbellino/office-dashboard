import React, { Component, PropTypes } from 'react';
import ListItem from '../ListItem';
import PreviewForm from '../PreviewForm';
import PreviewStatus from '../PreviewStatus';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

class PreviewListItem extends Component {

  constructor() {
    super();

    this.state = {
      isEditing: false,
    };

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditEnd = this.onEditEnd.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  // TODO: focus the comment field.
  onEditStart() {
    this.setState({ isEditing: true });
  }

  onEditEnd() {
    this.setState({ isEditing: false });
  }

  // TODO: dispatch the save action.
  // TODO: display a toast when save success.
  // TODO: display a toast when save fail, with a retry button.
  onSave(preview) {
    this.onEditEnd();
    console.log('[SAVE]', preview);
  }

  renderActions() {
    return [
      <button key={'edit'} onClick={this.onEditStart}>Edit</button>,
    ];
  }

  render() {
    const { preview } = this.props;
    const { isEditing } = this.state;

    const item = {
      key: preview.id,
      title: <a target={'_blank'} href={preview.url}>{preview.name}</a>,
      content: <a target={'_blank'} href={preview.url}>{preview.comment}</a>,
    };

    return isEditing ? (
      <PreviewForm preview={preview} onSave={this.onSave} />
    ) : (
      <ListItem
        item={item}
        strip={<PreviewStatus status={preview.status} />}
        actions={this.renderActions()}
      />
    );
  }
}

PreviewListItem.propTypes = propTypes;

export default PreviewListItem;
