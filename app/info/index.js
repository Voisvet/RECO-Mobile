import React from 'react';
import {View, Text} from 'react-native';

class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <View>
        <Text>InfoScreen</Text>
      </View>
    );
  }
}

export default InfoScreen;
