/* @flow */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/IconButton';
import SaveIcon from 'material-ui/svg-icons/navigation/check';
import PreviewStatus from '../PreviewStatus';
import { previewStatus, getInverseStatus } from '../../data/utils/previews';
import s from './PreviewForm.css';

import type { Preview } from '../../types';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comment: PropTypes.string,
    owner: PropTypes.string,
    status: PropTypes.string,
  }),
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
    this.onSave = this.onSave.bind(this);
  }

  // flow types.
  state: {
    preview: Preview,
  };
  onStatusChange: () => void; // eslint-disable-line react/sort-comp
  onCommentChange: () => void;
  onSave: (e: Event) => void;
  commentInput: TextField;

  componentDidMount() {
    this.commentInput.focus();
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

  onSave(e) {
    e.preventDefault();

    if (this.props.onSave) {
      this.props.onSave(this.state.preview);
    }
  }

  render() {
    const { preview } = this.state;

    const commentStyle = {
      style: { width: '100%' },
      underlineStyle: { borderColor: '#009cb7' },
    };
    const actions = [
      <IconButton key={'save'} type={'submit'} className={s.action} tooltip={'Save'}><SaveIcon /></IconButton>,
    ];

    return (
      <form className={s.root} onSubmit={this.onSave}>
        <div className={s.container}>
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
          <TextField
            ref={(c) => { this.commentInput = c; }}
            floatingLabelText={'Comment'}
            floatingLabelFixed
            defaultValue={preview.comment}
            onChange={this.onCommentChange}
            style={commentStyle.style}
            underlineStyle={commentStyle.underlineStyle}
          />
        </div>
      </form>
    );
  }
}

PreviewForm.propTypes = propTypes;

export default withStyles(s)(PreviewForm);
