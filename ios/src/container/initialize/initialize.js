import React from 'react';
const connect = require('react-redux').connect;
const actions = require('../../actions/initialize/initialize.js');
import { ListView, Text, View } from 'react-native';

const Application = React.createClass({
  displayName:'Application',
  getInitialState() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      ]),
    };
  },
  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  },
});
module.exports = connect(state => state, actions)(Application);
