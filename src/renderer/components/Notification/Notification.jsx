import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const style = {
  NotificationItem: {
    // Override the notification item
    DefaultStyle: {
      // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px',
    },
  },
};

const Notification = ({ notifications }) => (
  <Notifications notifications={notifications} style={style} />
);

Notification.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ notifications }) => ({ notifications });

export default connect(mapStateToProps)(Notification);
