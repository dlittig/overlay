import React from 'react'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'

const style = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    }
  }
}

class Notification extends React.Component {

  render() {
    const {notifications} = this.props

    return (
      <Notifications
        notifications={notifications}
        style={style}
      />
    );
  }
}

const mapStateToProps = ({ notifications }) => ({notifications})

export default connect(mapStateToProps)(Notification)
