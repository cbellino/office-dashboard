/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/IconButton';
import SaveIcon from 'material-ui/svg-icons/navigation/check';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PreviewStatus from '../PreviewStatus';
import Avatar from '../Avatar';
import { previewStatus, getInverseStatus } from '../../data/utils/previews';
import s from './PreviewForm.css';

import type { Preview, User } from '../../types';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string,
    owner: PropTypes.string,
    status: PropTypes.string,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  })).isRequired,
  avatar: PropTypes.node,
  onSave: PropTypes.func.isRequired,
};

class PreviewForm extends Component {

  constructor(props) {
    super();

    this.state = {
      preview: { ...props.preview, status: previewStatus.BUSY },
    };

    this.onStatusChange = this.onStatusChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onOwnerChange = this.onOwnerChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  // flow types.
  state: {
    preview: Preview,
  };
  onStatusChange: () => void; // eslint-disable-line react/sort-comp
  onCommentChange: () => void;
  onOwnerChange: () => void;
  onSave: (e: Event) => void;
  commentInput: TextField; // eslint-disable-line react/sort-comp

  componentDidMount() {
    this.commentInput.focus();
  }

  getOwner(ownerId) {
    return this.props.users.find(user => user.id === ownerId);
  }

  onStatusChange() {
    const status = getInverseStatus(this.state.preview.status);

    this.setState({
      preview: { ...this.state.preview, status },
    });
  }

  onCommentChange(event, comment) {
    this.setState({
      preview: { ...this.state.preview, comment },
    });
  }

  onOwnerChange(event, key, value) {
    if (!value) { return; }

    const owner = this.getOwner(value);

    this.setState({
      preview: { ...this.state.preview, owner: owner.id },
    });
  }

  onSave(e) {
    e.preventDefault();

    if (this.props.onSave) {
      this.props.onSave(this.state.preview);
    }
  }

  renderComment() {
    const { preview } = this.state;

    const commentStyle = {
      style: { width: '100%' },
      underlineStyle: { borderColor: '#009cb7' },
    };

    return (
      <TextField
        ref={(c) => { this.commentInput = c; }}
        floatingLabelText={'Comment'}
        floatingLabelFixed
        defaultValue={preview.comment}
        onChange={this.onCommentChange}
        style={commentStyle.style}
        underlineStyle={commentStyle.underlineStyle}
      />
    );
  }

  renderOwner() {
    const { users }: { users: User[] } = this.props;
    const { preview } = this.state;

    const ownerStyle = {
      style: { width: '100%' },
    };

    return (
      <SelectField
        floatingLabelText="Owner"
        value={preview.owner}
        onChange={this.onOwnerChange}
        style={ownerStyle.style}
      >
        <MenuItem value={null} />
        {users.map(user => (
          <MenuItem key={user.id} value={user.id} primaryText={user.name} />
        ))}
      </SelectField>
    );
  }

  renderAvatar() {
    const { preview } = this.state;
    const owner = this.getOwner(preview.owner);

    if (!owner || !owner.avatar) {
      return <Avatar className={s.avatar} text={'P'} />;
    }

    return (
      <Avatar className={s.avatar}>
        <img src={owner.avatar} role={'presentation'} />
      </Avatar>
    );
  }

  render() {
    const { preview } = this.state;

    const actions = [
      <IconButton key={'save'} type={'submit'} className={s.action} tooltip={'Save'}><SaveIcon /></IconButton>,
    ];

    return (
      <form className={s.root} onSubmit={this.onSave}>
        <div className={s.container}>
          {this.renderAvatar()}
          <div className={s.status}>
            <button type={'button'} onClick={this.onStatusChange} className={s.statusButton}>
              <PreviewStatus status={preview.status} />
            </button>
          </div>
          <div className={s.itemTitle}>{preview.name}</div>
          <div className={s.spacer} />
          <div className={s.actions}>{actions}</div>
        </div>
        <div className={s.content}>
          {this.renderComment()}
          {this.renderOwner()}
        </div>
      </form>
    );
  }
}

PreviewForm.propTypes = propTypes;

// TODO: move the redux part to a container and keep this component "dumb".
function mapStateToProps(state) {
  const users = Object.values(state.getIn(['entities', 'users']).toJS());

  return { users };
}

export default connect(mapStateToProps)(withStyles(s)(PreviewForm));
