/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/action/settings-backup-restore';
import EditIcon from 'material-ui/svg-icons/image/edit';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { updatePreview, startEditingPreview, stopEditingPreview } from '../../actions';
import ListItem from '../ListItem';
import PreviewForm from '../PreviewForm';
import PreviewStatus from '../PreviewStatus';
import Avatar from '../Avatar';
import { getEmptyPreview } from '../../data/utils/previews';
import s from './PreviewListItem.css';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string,
    owner: PropTypes.string,
    status: PropTypes.string,
  }),
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
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
      <IconButton key={'clear'} tooltip="Clear" onClick={this.onClear}><ClearIcon /></IconButton>,
      <IconButton key={'edit'} tooltip="Edit" onClick={this.onEditStart}><EditIcon /></IconButton>,
    ];
  }

  renderAvatar() {
    const { owner } = this.props;

    if (!owner || !owner.avatar) {
      return <Avatar text={'P'} />;
    }

    return (
      <Avatar className={s.avatar}>
        <img src={owner.avatar} role={'presentation'} />
      </Avatar>
    );
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
        />
      );
    }

    return (
      <ListItem
        item={item}
        avatar={this.renderAvatar()}
        strip={<PreviewStatus status={preview.status} className={s.status} />}
        actions={this.renderActions()}
      />
    );
  }
}

PreviewListItem.propTypes = propTypes;

// TODO: move the redux part to a container and keep this component "dumb".
function mapStateToProps(state, ownProps) {
  const owner = state.getIn(['entities', 'users', ownProps.preview.owner]);

  return { owner };
}

function mapDispatchToProps(dispatch) {
  return {
    onSave: (preview) => dispatch(updatePreview(preview)),
    onEditStart: (preview) => dispatch(startEditingPreview(preview)),
    onEditStop: (preview) => dispatch(stopEditingPreview(preview)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(PreviewListItem));
