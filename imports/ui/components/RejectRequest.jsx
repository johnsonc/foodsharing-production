import React, { PropTypes } from 'react'

import {
  FlatButton,
  Dialog,
} from 'material-ui';

class RejectRequest extends React.Component {

  constructor() {
    super();
    this.rejectClaim = this.rejectClaim.bind();
  }

  rejectClaim(){}

  render() {
    const actions = [
      <FlatButton
        label="Reject Claim!"
        primary={true}
        onTouchTap={this.rejectClaim}
      />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.toggle}
      />,
    ];
    return (
      <Dialog
        title="Reject"
        actions={actions}
        modal={true}
        contentStyle={{
          width: '100%',
          maxWidth: 'none',
        }}
        open={this.props.open}
      >
      Do you really want to reject this claim?
      </Dialog>);
  }
}

export default RejectRequest;
