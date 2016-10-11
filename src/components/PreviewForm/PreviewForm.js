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

    const commentStyle = {
      style: { width: '100%' },
      underlineStyle: { borderColor: '#009cb7' },
    };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.status}>
            <button onClick={this.onStatusChange} className={s.statusButton}>
              <PreviewStatus status={preview.status} />
            </button>
          </div>
          <div className={s.content}>
            <div className={s.itemTitle}>{preview.name}</div>
            <TextField
              hintText={'Comment'}
              defaultValue={preview.comment}
              onChange={this.onCommentChange}
              style={commentStyle.style}
              underlineStyle={commentStyle.underlineStyle}
              multiLine
            />
          </div>
          <div className={s.actions}>{this.renderActions()}</div>
        </div>
      </div>
    );
  }
}

PreviewForm.propTypes = propTypes;

export default withStyles(s)(PreviewForm);
