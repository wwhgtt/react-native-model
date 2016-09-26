import React from 'react';
const connect = require('react-redux').connect;
const actions = require('../../actions/initialize/initialize.js');
import { Text, View } from 'react-native';

const Application = React.createClass({
  displayName:'Application',
  propTypes: {
    // MapedActionsToProps
    initialize: React.PropTypes.func.isRequired,
    // MapedStatesToProps
    app: React.PropTypes.object.isRequired,
  },
  componentDidMount() {
    const { initialize } = this.props;
    initialize();
  },
  render() {
    const { app } = this.props;
    return (
      <View style={{ paddingTop: 22 }}>
        <Text>{app.text}</Text>
      </View>
    );
  },
});
module.exports = connect(state => state, actions)(Application);
