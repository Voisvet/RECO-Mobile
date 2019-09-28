import React from 'react';
import {View, Text} from 'react-native';
import InfoIcon from "./InfoIcon";

class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Читать',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <InfoIcon strokeColor={tintColor}/>
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
