import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PreviewStatus from '../PreviewStatus';
import s from './PreviewForm.css';

const propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
};

// TODO: move this into a separate file ?
function getInverseStatus(status) {
  return (status === 'free') ? 'busy' : 'free';
}

class PreviewForm extends Component {

  constructor(props) {
    super();

    this.state = {
      preview: props.preview,
    };

    this.onStatusChange = this.onStatusChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onSave = this.onSave.bind(this);
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

  onSave() {
    if (this.props.onSave) {
      this.props.onSave(this.state.preview);
    }
  }

  renderActions() {
    return [
      <button key={'save'} className={s.action} onClick={this.onSave}>Save</button>,
    ];
  }

  render() {
    const { preview } = this.state;
    const commentStyle = { width: '100%' };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.status}>
            <button onClick={this.onStatusChange}>
              <PreviewStatus status={preview.status} />
            </button>
          </div>
          <div className={s.content}>
            <div>{preview.name}</div>
            <TextField
              hintText={'Comment'}
              defaultValue={preview.comment}
              onChange={this.onCommentChange}
              style={commentStyle}
              multiLine
            />
          </div>
          <div className={s.spacer} />
          <div className={s.actions}>{this.renderActions()}</div>
        </div>
      </div>
    );
  }
}

PreviewForm.propTypes = propTypes;

export default withStyles(s)(PreviewForm);
