import React, {PropTypes} from 'react';

import {
  Link,
} from 'react-router';

import { IconButton, Drawer, AppBar } from 'material-ui';
import SvgIcons from 'material-ui/svg-icons';
import {
  green900,
} from 'material-ui/styles/colors';

class MessageCentre extends React.Component {
  render() {
    const open = this.props.open === 'true' ? true : false;
    const queryString = Object.assign({},this.props.query,{ openMessageCentre: false });
    const closeDrawerButton =
    <IconButton
      linkButton ={true}
      containerElement = {
        <Link to={{
            pathname: this.props.pathname,
            query: queryString
          }}/>
        }
        >
        <SvgIcons.ContentBackspace
          color={green900}/>
    </IconButton>
    return (
      <Drawer
        width={window.innerWidth}
        openSecondary={true}
        open={open}
        docked={false}
        >
        <div className="headContain">
          <AppBar
            title="Messages"
            iconElementLeft={
              closeDrawerButton
            }
            targetOrigin={{
              horizontal: 'right',
              vertical: 'top'
            }}/>
        </div>
          {/*<MessageCentreMessages
            user={this.state.messageUser}
            reset={this.resetState}
            />*/}
      </Drawer>
    )
  }
}

export default MessageCentre;
